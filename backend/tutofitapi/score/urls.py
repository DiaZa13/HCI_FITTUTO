
from django.urls import path
from . import views

urlpatterns = [
path('',views.scoresList, name='scores-list'),
path('score/<str:pk>/',views.scoreDetails, name='score-details'),
path('create/',views.scoreCreate, name='score-create'),
path('update/<str:pk>/',views.scoreUpdate, name='score-update'),
path('delete/<str:pk>/',views.scoreDelete, name='score-delete'),
path('scoresByTutorId/<str:pk>/',views.scoresByTutorId, name='scores-by-tutor-id'),


]