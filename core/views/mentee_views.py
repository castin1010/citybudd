from rest_framework import generics
from core.serializers.mentee_serializers import MenteeSerializer

class MenteeCreate(generics.CreateAPIView):
    serializer_class = MenteeSerializer
