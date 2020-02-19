from core.models.course_models import Unit,Course
from core.serializers.course_serializers import UnitSerializer,CourseSerializer
from rest_framework import generics

class CourseOutline(generics.ListAPIView):
    queryset = Course.get_available_courses()
    serializer_class = CourseSerializer
