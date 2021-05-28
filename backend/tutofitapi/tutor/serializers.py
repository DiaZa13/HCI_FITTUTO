from rest_framework import serializers

from .models import Tutor , Availability , Hour


class TutorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tutor
		fields = "__all__"


class AvailabilitySerializer(serializers.ModelSerializer):
	class Meta:
		model = Availability
		fields = "__all__"



class HourSerializer(serializers.ModelSerializer):
	class Meta:
		model = Hour
		fields = "__all__"

