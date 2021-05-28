from django.db import models
import datetime
# Create your models here.

class Tutor(models.Model):
	id_tutor = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	date_of_birth = models.DateField(auto_now_add=True)
	phone_number = models.IntegerField(default=12341234)
	rate_per_hour = models.IntegerField(default=50)
	



class Availability(models.Model):
	id_availability = models.AutoField(primary_key=True)
	id_tutor = models.ForeignKey(Tutor, on_delete=models.PROTECT, related_name="availabilities")
	day_of_week = models.IntegerField(default=1)
	start_time = models.TimeField(default='10:00:00')
	end_time = models.TimeField(default='18:00:00')


		

class Hour(models.Model):
	id_hour = models.AutoField(primary_key=True)
	start_time = models.TimeField(default='00:00:00')
	end_time = models.TimeField(default='01:00:00')


