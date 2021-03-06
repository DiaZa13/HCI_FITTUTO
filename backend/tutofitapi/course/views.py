from django.shortcuts import render
from django.db import connection
from .serializers import CourseSerializer , TeachesSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db import connection
from .models import Course , Teaches
# Create your views here.




@api_view(['GET'])
def coursesList(request):
	courses= Course.objects.all()
	serializers= CourseSerializer(courses,many=True)
	return Response(serializers.data)

@api_view(['GET'])
def courseDetails(request,pk):
	courses= Course.objects.get(id_course=pk)
	serializers= CourseSerializer(courses,many=False)
	return Response(serializers.data)

@api_view(['GET'])
def coursesByTutorId(request,pk):
	querry='select name from course_course cc join course_teaches ct on ct.id_course_id = cc.id_course where id_tutor_id ='+pk
	cursor = connection.cursor()
	cursor.execute(querry)
	courses = cursor.fetchall()
	
	valores = []
	for course in courses:
		element_dict = {"course": course[0]}
		valores.append(element_dict)


	return Response(valores)

@api_view(['POST'])
def courseCreate(request):
	serializer = CourseSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['GET'])
def teachesList(request):
	courses= Teaches.objects.all()
	serializers= TeachesSerializer(courses,many=True)
	return Response(serializers.data)


@api_view(['POST'])
def teachesCreate(request):
	serializer = TeachesSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['POST'])
def courseUpdate(request,pk):
	course= Course.objects.get(id_course=pk)
	serializer = CourseSerializer(instance=course, data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def courseDelete(request,pk):
	course= Course.objects.get(id_course=pk)
	course.delete()
	return Response("Course was deleted")