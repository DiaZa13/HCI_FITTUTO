from django.shortcuts import render
from .serializers import UserSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import User
# Create your views here.


@api_view(['GET'])
def usersList(request):
	users= User.objects.all()
	serializers= UserSerializer(users,many=True)
	return Response(serializers.data)

@api_view(['GET'])
def userDetails(request,pk):
	users= User.objects.get(user_id=pk)
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
	user= User.objects.get(user_id=pk)
	serializer = UserSerializer(instance=user, data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def userDelete(request,pk):
	user= User.objects.get(user_id=pk)
	user.delete()
	return Response("User was deleted")