from django.urls import path,include 
from django.contrib import admin

urlpatterns = [
    path('auth/',include('djoser.urls')),
    path('auth/',include('djoser.urls.authtoken')),
    path('mentor/',include('core.api.mentor_urls')),
    path('mentee/',include('core.api.mentor_urls')),
    path('course/',include('core.api.course_urls'))
]
