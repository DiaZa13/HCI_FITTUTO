from django.db import models
import datetime
# Create your models here.

class Tutor(models.Model):
	id_tutor = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	date_of_birth = models.DateField(auto_now_add=True)
	phone_number = models.IntegerField(default=12341234)



	

		




