from .models import Course , Teaches

from rest_framework import serializers


class CourseSerializer(serializers.ModelSerializer):
	class Meta:
		model = Course
		fields = "__all__"


class TeachesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Teaches
		fields = "__all__"