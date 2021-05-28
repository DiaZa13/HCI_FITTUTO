from django.shortcuts import render
from .serializers import CourseSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Course
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


@api_view(['POST'])
def courseCreate(request):
	serializer = CourseSerializer(data=request.data)
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