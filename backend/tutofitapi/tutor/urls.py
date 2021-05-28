from django.urls import path
from . import views

urlpatterns = [
	path('', views.tutorsList, name= "tutors-list"),
	path('tutor/<str:pk>/',views.tutorDetails, name='tutor-details'),
	path('create/',views.tutorCreate, name='tutor-create'),
	path('update/<str:pk>/',views.tutorUpdate, name='tutor-update'),
	path('delete/<str:pk>/',views.tutorDelete, name='tutor-delete'),
	path('tutorsByCourseId/<str:pk>/',views.tutorsListByCourseId, name='tutors-by-course'),


	path('availabilities/',views.availabilitiesList, name='availavilities-all'),
	path('availability/create/',views.availabilityCreate, name='availability-create'),
	path('availability/delete/<str:pk>/',views.availabilityDelete, name='availability-delete'),
	path('availability/update/<str:pk>/',views.availabilityUpdate, name='availability-update'),

]