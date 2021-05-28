from django.db import models
import datetime

from tutor.models import Tutor
from course.models import Course
from users.models import User


class Appointment(models.Model):
	id_appointment = models.AutoField(primary_key=True)
	date = models.DateField(default='2021-05-28' )
	start_time = models.TimeField(default='10:00:00')
	end_time = models.TimeField(default='11:00:00')
	id_tutor = models.ForeignKey(Tutor, on_delete=models.PROTECT, related_name="appointments")
	id_course = models.ForeignKey(Course, on_delete=models.PROTECT, related_name="appointments")
	id_user = models.ForeignKey(User, on_delete=models.PROTECT, related_name="appointments")
