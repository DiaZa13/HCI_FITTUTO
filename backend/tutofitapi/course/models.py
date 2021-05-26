from django.db import models


class Course(models.Model):
	id_course = models.AutoField(primary_key=True)
	name= models.CharField(max_length=50)
	description = models.CharField(max_length=800)


