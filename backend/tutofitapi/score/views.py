from django.shortcuts import render
from .serializers import ScoreSerializer
from django.db import connection

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Score
# Create your views here.


@api_view(['GET'])
def scoresList(request):
	scores= Score.objects.all()
	serializers= ScoreSerializer(scores,many=True)
	return Response(serializers.data)

@api_view(['GET'])
def scoreDetails(request,pk):
	scores= Score.objects.get(id_score=pk)
	serializers= ScoreSerializer(scores,many=False)
	return Response(serializers.data)



@api_view(['GET'])
def scoresByTutorId(request,pk):
	querry ='select first_name, last_name, cc.name , score, comment from score_score ss join appointment_appointment aa on ss.id_appointment_id = aa.id_appointment join ( 	select au.id, first_name,last_name from auth_user au join users_user uu on au.id = uu.user_id) sub1 on sub1.id =aa.id_user_id join course_course cc on aa.id_course_id = cc.id_course where id_tutor_id ='+pk
	cursor = connection.cursor()
	cursor.execute(querry)
	comments = cursor.fetchall()
	valores = []
	for comment in comments:
		element_dict = {"first_name": comment[0] , "last_name" :comment[1],"course_name":comment[2],"score":comment[3],"comment":comment[4]}
		valores.append(element_dict)
	return Response (valores)


	





@api_view(['POST'])
def scoreCreate(request):
	serializer = ScoreSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def scoreUpdate(request,pk):
	score= Score.objects.get(id_score=pk)
	serializer = ScoreSerializer(instance=score, data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def scoreDelete(request,pk):
	score= Score.objects.get(id_score=pk)
	score.delete()
	return Response("Score was deleted")