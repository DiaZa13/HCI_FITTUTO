from django.shortcuts import render
from .serializers import TutorSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Tutor
from .serializers import TutorSerializer

# Create your views here.


@api_view(['GET'])
def tutorsList(request):
	tutors = Tutor.objects.all()
	serializers = TutorSerializer(tutors,many=True)
	return Response(serializers.data)
