from django.db import models
from core.managers.user_managers import MentorManager
from authentication.models import User

class Mentor(User):
    """
    Proxy model for a Mentor
    """
    objects= MentorManager()
    class Meta:
        proxy = True
