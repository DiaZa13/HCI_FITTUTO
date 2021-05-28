from django.db import models
from django.conf import settings
from django.contrib.auth.models import User



class User(models.Model):
	user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	birth_date = models.DateField(default='1990-01-01' )
	phonenumber = models.IntegerField(default=12341234)
