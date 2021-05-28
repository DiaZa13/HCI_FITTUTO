from django.shortcuts import render
from .serializers import AppointmentSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Appointment
# Create your views here.


@api_view(['GET'])
def appointmentsList(request):
	appointments= Appointment.objects.all()
	serializers= AppointmentSerializer(appointments,many=True)
	return Response(serializers.data)

@api_view(['GET'])
def appointmentDetails(request,pk):
	appointments= Appointment.objects.get(id_appointment=pk)
	serializers= AppointmentSerializer(appointments,many=False)
	return Response(serializers.data)


@api_view(['POST'])
def appointmentCreate(request):
	serializer = AppointmentSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
		print("APPOINTMENT SUCCESFULLY ADDED ")
	else :
		print("APPOINTMENT WAS NOT ADDED ")


	return Response(serializer.data)

@api_view(['POST'])
def appointmentUpdate(request,pk):
	appointment= Appointment.objects.get(id_appointment=pk)
	serializer = AppointmentSerializer(instance=appointment, data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)

@api_view(['DELETE'])
def appointmentDelete(request,pk):
	appointment= Appointment.objects.get(id_appointment=pk)
	appointment.delete()
	return Response("Appointment was deleted")