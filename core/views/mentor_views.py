from rest_framework import generics
from core.serializers.mentor_serializers import MentorSerializer

class MentorCreate(generics.CreateAPIView):
    serializer_class = MentorSerializer
