
from django.urls import path
from . import views

urlpatterns = [
path('',views.coursesList, name='courses-list'),
path('course/<str:pk>/',views.courseDetails, name='course-details'),
path('create/',views.courseCreate, name='course-create'),
path('update/<str:pk>/',views.courseUpdate, name='course-update'),
path('delete/<str:pk>/',views.courseDelete, name='course-delete'),
path('coursesByTutorId/<str:pk>/',views.coursesByTutorId, name='course-by-tutur-id'),
path('teaches/Create/',views.teachesCreate, name='teaches-create'),
path('teaches/',views.teachesList, name='teaches-list'),




]