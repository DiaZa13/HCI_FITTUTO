from django.shortcuts import render
from .serializers import TutorSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Tutor , Availability , Hour
from django.db import connection
from .serializers import TutorSerializer , AvailabilitySerializer , HourSerializer

# Create your views here.


@api_view(['GET'])
def tutorDetails(request,pk):
	querry='select id_tutor, name, last_name, date_of_birth, phone_number, COALESCE(avg_score ,0.0) as avg_score , rate_per_hour from tutor_tutor t left join (select id_tutor_id, cast(avg(score) as float) as avg_score , count(score) as num_of_reviews from score_score s join appointment_appointment ap on s.id_appointment_id = ap.id_appointment group by id_tutor_id) sub1 on sub1.id_tutor_id = t.id_tutor where id_tutor ='+pk
	cursor = connection.cursor()
	cursor.execute(querry)
	tutor = cursor.fetchall()
	print(tutor)
	element_dict = {"id_tutor": tutor[0][0] , "name" :tutor[0][1],"last_name":tutor[0][2],"date_of_birth":tutor[0][3],"phone_number":tutor[0][4],"avg_score":tutor[0][5] ,"rate_per_hour":tutor[0][6]}
	return Response(element_dict)




@api_view(['GET'])
def tutorsList(request):
	querry='select id_tutor, name, last_name, date_of_birth, phone_number, COALESCE(avg_score ,0.0) as avg_score , rate_per_hour from tutor_tutor t left join (select id_tutor_id, cast(avg(score) as float) as avg_score , count(score) as num_of_reviews from score_score s join appointment_appointment ap on s.id_appointment_id = ap.id_appointment group by id_tutor_id) sub1 on sub1.id_tutor_id = t.id_tutor'
	cursor = connection.cursor()
	cursor.execute(querry)
	tutors = cursor.fetchall()
	valores = []
	for tutor in tutors:
		element_dict = {"id_tutor": tutor[0] , "name" :tutor[1],"last_name":tutor[2],"date_of_birth":tutor[3],"phone_number":tutor[4],"avg_score":tutor[5] ,"rate_per_hour":tutor[6]}
		valores.append(element_dict)
	return Response (valores)




@api_view(['GET'])
def tutorsListByCourseId(request, pk):
	querry = 'select id_tutor, name, last_name, date_of_birth, phone_number,avg_score,rate_per_hour from course_teaches ct left join ( 	select id_tutor, name, last_name, date_of_birth, phone_number, COALESCE(avg_score ,0.0) as avg_score , rate_per_hour from tutor_tutor t 	left join (select id_tutor_id, cast(avg(score) as float) as avg_score , count(score) as num_of_reviews from score_score s	join appointment_appointment ap 	on s.id_appointment_id = ap.id_appointment 	group by id_tutor_id) sub1 on sub1.id_tutor_id = t.id_tutor ) sub1 on sub1.id_tutor = ct.id_tutor_id where id_course_id = '+ pk + ' order by avg_score desc '
	cursor = connection.cursor()
	cursor.execute(querry)
	tutors = cursor.fetchall()
	valores = []
	for tutor in tutors:
		element_dict = {"id_tutor": tutor[0] , "name" :tutor[1],"last_name":tutor[2],"date_of_birth":tutor[3],"phone_number":tutor[4],"avg_score":tutor[5] ,"rate_per_hour":tutor[6]}
		valores.append(element_dict)

	return Response (valores)






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
	tutor= Tutor.objects.get(id_tutor=pk)
	tutor.delete()
	return Response("Tutor was deleted")



###Availabilities

@api_view(['GET'])
def availabilitiesList(request):
	availbilities= Availability.objects.all()
	serializers= AvailabilitySerializer(availbilities,many=True)
	return Response(serializers.data)


@api_view(['GET'])
def availabilitiesByTutorId(request,pk):
	querry='select * from (	select date,c.start_time,c.end_time from tutor_availability ta 	join calendar c  	on ta.day_of_week = c.day_of_week  	where id_tutor_id = '+pk+ ' and c.start_time >= ta.start_time and c.end_time <= ta.end_time ) available except (	select date, start_time, end_time from appointment_appointment aa where id_tutor_id = '+pk+') order by date, start_time'
	cursor = connection.cursor()
	cursor.execute(querry)
	availabilities = cursor.fetchall()
	valores = []
	for availability in availabilities:
		element_dict = {"date": availability[0] , "start_time" :availability[1],"end_time":availability[2]}
		valores.append(element_dict)

	return Response (valores)





@api_view(['POST'])
def availabilityCreate(request):
	serializer = AvailabilitySerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def availabilityUpdate(request,pk):
	availability= Availability.objects.get(id_availability=pk)
	serializer = AvailabilitySerializer(instance=availability, data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def availabilityDelete(request,pk):
	availability= Availability.objects.get(id_availability=pk)
	availability.delete()
	return Response("Availability was deleted")



####  Hours



@api_view(['GET'])
def hoursList(request):
	hours= Hour.objects.all()
	serializers= HourSerializer(hours,many=True)
	return Response(serializers.data)




@api_view(['POST'])
def hourCreate(request):
	serializer = HourSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def hourUpdate(request,pk):
	hour= Hour.objects.get(id_hour=pk)
	serializer = HourSerializer(instance=hour, data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def hourDelete(request,pk):
	hour= Hour.objects.get(id_hour=pk)
	hour.delete()
	return Response("Hour was deleted")
