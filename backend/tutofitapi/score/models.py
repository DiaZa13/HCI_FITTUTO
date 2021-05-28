from django.db import models
from appointment.models import Appointment


class Score(models.Model):
	id_score = models.AutoField(primary_key=True)
	id_appointment = models.ForeignKey(Appointment, on_delete=models.PROTECT, related_name="scores")
	score = models.IntegerField(default=12341234)
	comment= models.CharField(max_length=300)


