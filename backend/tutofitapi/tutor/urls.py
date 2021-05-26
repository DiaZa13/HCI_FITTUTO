from django.urls import path
from . import views

urlpatterns = [
	path('', views.tutorsList, name= "tutors-list"),


]