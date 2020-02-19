from django.urls import path,include
from core.views.course_views import *

urlpatterns = [
    path('courses/',CourseOutline.as_view())
]
