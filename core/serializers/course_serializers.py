from rest_framework import serializers
from core.models.course_models import Unit,Course

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    units = UnitSerializer(many=True)
    class Meta:
        model = Course
        fields = '__all__'

