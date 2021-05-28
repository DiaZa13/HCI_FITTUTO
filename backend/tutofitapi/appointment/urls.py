
from django.urls import path
from . import views

urlpatterns = [
path('',views.appointmentsList, name='appointments-list'),
path('appointment/<str:pk>/',views.appointmentDetails, name='appointment-details'),
path('create/',views.appointmentCreate, name='appointment-create'),
path('update/<str:pk>/',views.appointmentUpdate, name='appointment-update'),
path('delete/<str:pk>/',views.appointmentDelete, name='appointment-delete'),


]