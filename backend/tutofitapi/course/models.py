from django.db import models
from tutor.models import Tutor



class Course(models.Model):
	id_course = models.AutoField(primary_key=True)
	name= models.CharField(max_length=50)
	description = models.CharField(max_length=800)


class Teaches(models.Model):
	id_teach = models.AutoField(primary_key=True)
	id_course = models.ForeignKey(Course, on_delete=models.PROTECT, related_name="teaches")
	id_tutor = models.ForeignKey(Tutor, on_delete=models.PROTECT, related_name="scores")

	