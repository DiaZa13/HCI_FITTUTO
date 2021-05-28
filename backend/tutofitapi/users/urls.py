
from django.urls import path
from . import views

urlpatterns = [
path('',views.usersList, name='users-list'),
path('user/<str:pk>/',views.userDetails, name='user-details'),
path('create/',views.userCreate, name='user-create'),
path('update/<str:pk>/',views.userUpdate, name='user-update'),
path('delete/<str:pk>/',views.userDelete, name='user-delete'),

path('logout/',views.userLogout, name='user-logout'),

path('login/',views.userLogin,name='user-login'),
path('register/',views.userRegister,name='user-register'),







]