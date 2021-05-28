from django.urls import path
from . import views

urlpatterns = [
	path('', views.tutorsList, name= "tutors-list"),
	path('tutor/<str:pk>/',views.tutorDetails, name='tutor-details'),
	path('create/',views.tutorCreate, name='tutor-create'),
	path('update/<str:pk>/',views.tutorUpdate, name='tutor-update'),
	path('delete/<str:pk>/',views.tutorDelete, name='tutor-delete'),
	path('tutorsByCourseId/<str:pk>/',views.tutorsListByCourseId, name='tutors-by-course'),

]