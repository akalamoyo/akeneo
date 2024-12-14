from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from app.models import DrawHistory, Participant


class ParticipantViewTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.participant1 = Participant.objects.create(
            name="Jules Akeneo", email="jules@example.com"
        )
        self.participant2 = Participant.objects.create(
            name="Louis Akeneo", email="louis@example.com"
        )

    def test_get_participants(self):
        response = self.client.get("/participant/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0]["name"], self.participant1.name)
        self.assertEqual(response.data[1]["email"], self.participant2.email)

    def test_create_participant(self):
        payload = {
            "name": "Alice Akeneo",
            "email": "alice@example.com",
        }
        response = self.client.post("/participant/", payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Participant.objects.count(), 3)
        new_participant = Participant.objects.get(email="alice@example.com")
        self.assertEqual(new_participant.name, payload["name"])

    def test_create_duplicate_participant(self):
        payload = {
            "name": "Jules Akeneo",
            "email": "jules@example.com",
        }
        response = self.client.post("/participant/", payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("error", response.data)

    def test_patch_update_blacklist(self):
        payload = {
            "email": "jules@example.com",
            "blacklist": ["louis@example.com"],
        }
        response = self.client.patch("/participant/", payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.participant1.refresh_from_db()
        blacklist_emails = self.participant1.blacklist.values_list("email", flat=True)
        self.assertIn("louis@example.com", blacklist_emails)


class DrawViewTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.participant1 = Participant.objects.create(
            name="Alice Akeneo", email="alice@example.com"
        )
        self.participant2 = Participant.objects.create(
            name="Louis Akeneo", email="louis@example.com"
        )
        self.participant3 = Participant.objects.create(
            name="Jules Akeneo", email="jules@example.com"
        )
        self.participant4 = Participant.objects.create(
            name="Elodie Akeneo", email="elodie@example.com"
        )

    def test_draw_with_insufficient_participants(self):
        Participant.objects.all().delete()
        Participant.objects.create(name="Single Akeneo", email="single@example.com")

        response = self.client.post("/draw/")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.data["error"], "At least two participants are required"
        )

    def test_draw_with_odd_number_of_participants(self):
        Participant.objects.filter(email="elodie@example.com").delete()
        response = self.client.post("/draw/")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.data["error"], "An even number of participants are required"
        )

    def test_successful_draw(self):
        response = self.client.post("/draw/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("matched", response.data)
        self.assertIn("umatched", response.data)

        matched = response.data["matched"]
        unmatched = response.data["umatched"]

        participants = Participant.objects.all()
        participant_info = [
            f"{participant.name} ({participant.email})" for participant in participants
        ]

        matched_givers = list(matched.values())
        matched_receivers = list(matched.keys())
        self.assertTrue(all(giver in participant_info for giver in matched_givers))
        self.assertTrue(
            all(receiver in participant_info for receiver in matched_receivers)
        )
        self.assertTrue(len(unmatched) == 0)
        self.assertTrue(DrawHistory.objects.exists())

    def test_draw_with_blacklist(self):
        self.participant1.blacklist.add(self.participant2)

        response = self.client.post("/draw/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        matched = response.data["matched"]

        for receiver_info, giver_info in matched.items():
            giver_email = giver_info.split(" (")[1][:-1]
            receiver_email = receiver_info.split(" (")[1][:-1]

            giver = Participant.objects.get(email=giver_email)
            receiver = Participant.objects.get(email=receiver_email)

            self.assertNotIn(receiver, giver.blacklist.all())
