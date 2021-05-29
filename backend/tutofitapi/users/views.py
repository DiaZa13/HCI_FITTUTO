from django.shortcuts import render
from .serializers import UserSerializer
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.decorators import api_view
from django.conf import settings

from .models import User as MyUser
from django.contrib.auth.models import User
# Create your views here.


@api_view(['GET'])
def usersList(request):
	users= MyUser.objects.all()
	serializers= UserSerializer(users,many=True)
	return Response(serializers.data)

@api_view(['GET'])
def userDetails(request,pk):
	users= MyUser.objects.get(user_id=pk)
	serializers= UserSerializer(users,many=False)
	return Response(serializers.data)


@api_view(['POST'])
def userCreate(request):
	serializer = UserSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def userUpdate(request,pk):
	user= MyUser.objects.get(user_id=pk)
	serializer = UserSerializer(instance=user, data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def userDelete(request,pk):
	user= MyUser.objects.get(user_id=pk)
	user.delete()
	return Response("User was deleted")



def userLogout(request):
    logout(request)
    return HttpResponseRedirect("../login/")

@api_view(['POST'])
def userLogin(request):
	username =request.data['username']
	password = request.data['password']
	user = authenticate(username=username, password=password)
	if user is not None:
		login(request, user)
		HttpResponseRedirect('../../tutors/')

	return HttpResponseRedirect('../../tutors/')

@api_view(['POST'])
def userRegister(request):
	username =request.data['username']
	password = request.data['password']
	name =request.data['name']
	last_name = request.data['last_name']
	phone_number =request.data['phone_number']
	birth_date = request.data['birth_date']
	email = request.data['email']
	new_user=User.objects.create_user(username=username, password=password,first_name=name,last_name=last_name,email=email)
	MyUser.objects.create(user=new_user,birth_date=birth_date,phonenumber=phone_number)


	return HttpResponseRedirect('../../tutors/')


# {
# "username": "parent4",
# "password": "tutofit1234",
# "name": "papa",
# "last_name": "apellido",
# "phone_number": 125145654,
# "birth_date": "1997-05-05"
# }



# {
# "username": "coutino" ,
# "password" :"coutino"
# }




