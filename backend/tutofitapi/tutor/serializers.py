from rest_framework import serializers

from .models import Tutor , Availability


class TutorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tutor
		fields = "__all__"


class AvailabilitySerializer(serializers.ModelSerializer):
	class Meta:
		model = Availability
		fields = "__all__"

