import uuid
from django.db import models


class Participant(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    blacklist = models.ManyToManyField("self", symmetrical=False, blank=True)


class DrawHistory(models.Model):
    draw_date = models.DateTimeField(auto_now_add=True)
    relationships = models.JSONField()
