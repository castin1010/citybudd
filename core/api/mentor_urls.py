from django.urls import path,include
from core.views.mentor_views import MentorCreate

urlpatterns = [
    path('register/',MentorCreate.as_view()),
]

