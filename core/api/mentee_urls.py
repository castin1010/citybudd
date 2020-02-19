from django.urls import path,include
from core.views.mentee_views import MenteeCreate

urlpatterns = [
    path('register/',MenteeCreate.as_view()),
]
