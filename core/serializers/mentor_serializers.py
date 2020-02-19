from rest_framework import serializers
from core.models.mentor_models import Mentor

class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = '__all__'


