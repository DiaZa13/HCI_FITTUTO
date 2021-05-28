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


@api_view(['GET'])
def tutorDetails(request,pk):
	tutors = Tutor.objects.get(id_tutor=pk)
	serializers = TutorSerializer(tutors,many=False)
	return Response(serializers.data)




@api_view(['POST'])
def tutorCreate(request):
	serializer = TutorSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def tutorUpdate(request,pk):
	tutor= Tutor.objects.get(id_tutor=pk)
	serializer = TutorSerializer(instance=tutor, data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def tutorDelete(request,pk):
	course= Tutor.objects.get(id_tutor=pk)
	course.delete()
	return Response("Tutor was deleted")