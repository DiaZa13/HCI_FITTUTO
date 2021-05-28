from django.shortcuts import render
from .serializers import AppointmentSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Appointment
# Create your views here.

from django.db import connection


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




@api_view(['GET'])
def appointmentsByUserId(reqeust,pk):
	querry='select id_appointment, date, start_time, end_time, cc.name, tt.name,tt.last_name from appointment_appointment aa join course_course cc on cc.id_course = aa.id_course_id join tutor_tutor tt on tt.id_tutor = aa.id_tutor_id where id_user_id ='+pk
	cursor = connection.cursor()
	cursor.execute(querry)
	appointments = cursor.fetchall()
	valores = []
	for appointment in appointments:
		element_dict = {"id_appointment": appointment[0] , "date" :appointment[1],"start_time":appointment[2],"end_time":appointment[3],"course_name":appointment[4],"tutor_name":appointment[5],"tutor_last_name":appointment[6]}
		valores.append(element_dict)
	return Response (valores)