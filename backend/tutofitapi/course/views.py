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
