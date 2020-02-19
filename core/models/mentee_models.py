from django.db import models
from core.managers.user_managers import MenteeManager
from authentication.models import User

class Mentee(User):
    """
    Proxy model for a Mentee
    """
    objects=MenteeManager()
    class Meta:
        proxy = True


