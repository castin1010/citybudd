from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, BaseUserManager
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from core.managers.user_managers import UserManager

USER_ROLES = (
    ('MENTEE','Mentee'),
    ('MENTOR','Mentor')
)

class User(AbstractUser):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=400)
    username = models.CharField(max_length=100,null=False)
    first_name =models.CharField(max_length=100,null=False)
    last_name = models.CharField(max_length=100,null=False)
    is_active = models.BooleanField(default=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name']
    is_admin = models.BooleanField(default=False)
    user_role = models.CharField(max_length=10,choices=USER_ROLES,null=False,default='MENTEE')
    objects = UserManager()
    class Meta:
        db_table = 'auth_user'

    def __str__(self):
        return self.email

class UserProfile(models.Model):
    user = models.ForeignKey(to=User,on_delete=models.CASCADE,null=False)
    avatar = models.ImageField(upload_to='user', null=True, blank=True)
    birthday = models.DateField(null=True)
    city_of_residence = models.CharField(max_length=200,null=True)
    nationality = models.CharField(max_length=200,null=True)
    phone = models.CharField(max_length=20,null=True)
    GENDERS = (
            ('M','MALE'),
            ('F','FEMALE')
            )
    gender = models.CharField(max_length=1,choices=GENDERS,null=True)

    class Meta:
        db_table = 'auth_user_profile'

    def __str__(self):
        return self.user.username

@receiver(post_save,sender=User)
def creater_user_profile(sender,instance,created,**kwargs):
    if created:
        UserProfile.objects.create(user=instance)
