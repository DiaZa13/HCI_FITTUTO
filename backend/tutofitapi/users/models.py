from django.db import models
from django.conf import settings
from django.contrib.auth.models import User



class User(models.Model):
	user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	birth_date = models.DateTimeField(auto_now_add=True, blank=True)
    phonenumber = models.CharField(max_length=10, null = True, blank=True)



# Create your models here.
