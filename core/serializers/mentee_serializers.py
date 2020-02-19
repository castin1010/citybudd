from rest_framework import serializers
from core.models.mentee_models import Mentee

class MenteeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentee
        fields = ['email','first_name','last_name']



