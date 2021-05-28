from django.shortcuts import render
from .serializers import ScoreSerializer

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