import random

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from app.models import DrawHistory, Participant


class ParticipantView(APIView):
    """View to manage participants."""

    def get(self, request):
        participants = Participant.objects.all()
        data = [
            {
                "id": participant.id,
                "name": participant.name,
                "email": participant.email,
                "created_date": participant.created_date,
                "blacklist": list(
                    participant.blacklist.values_list("email", flat=True)
                ),
            }
            for participant in participants
        ]
        return Response(data, status=status.HTTP_200_OK)

    def patch(self, request):
        email = request.data.get("email")
        blacklist_emails = request.data.get("blacklist", [])
        existing_participant = Participant.objects.filter(email=email).first()
        existing_participant.blacklist.set(
            Participant.objects.filter(email__in=blacklist_emails)
        )
        return Response({}, status=status.HTTP_200_OK)

    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        existing_participant = Participant.objects.filter(email=email).first()
        if existing_participant:
            return Response(
                {"error": "A participant with this email already exists."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        participant = Participant.objects.create(name=name, email=email)
        return Response(
            {
                "id": participant.id,
                "name": participant.name,
                "email": participant.email,
            },
            status=status.HTTP_201_CREATED,
        )


class DrawView(APIView):
    """View to create the Secret Santa draw."""

    def post(self, request):
        participants = Participant.objects.all()
        number_of_participants = participants.count()
        if number_of_participants < 2:
            return Response(
                {"error": "At least two participants are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        if number_of_participants % 2 != 0:
            return Response(
                {"error": "An even number of participants are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        remaining_participants = list(participants)
        matched = {}
        unmatched = []
        result = {}

        for giver in remaining_participants:
            giver_info = f"{giver.name} ({giver.email})"
            potential_receivers = [
                participant
                for participant in remaining_participants
                if participant != giver and participant not in giver.blacklist.all()
            ]
            if potential_receivers:
                receiver = random.choice(potential_receivers)
                receiver_info = f"{receiver.name} ({receiver.email})"
                if receiver_info not in matched:
                    matched[receiver_info] = giver_info
                remaining_participants.remove(receiver)
                if giver in remaining_participants:
                    remaining_participants.remove(giver)
            else:
                if giver_info not in matched and giver_info not in matched.values():
                    unmatched.append(giver_info)


        result["matched"] = matched
        result["umatched"] = unmatched

        DrawHistory.objects.create(relationships=matched)
        return Response(result, status=status.HTTP_200_OK)


class DrawHistoryView(APIView):
    """View to retrieve the history of the last 5 draws."""

    def get(self, request):
        history_top_5 = DrawHistory.objects.all().order_by("-draw_date")[:5]
        return Response(
            [
                {"date": draw.draw_date, "relationships": draw.relationships}
                for draw in history_top_5
            ],
            status=status.HTTP_200_OK,
        )
