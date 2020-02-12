from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, BaseUserManager
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


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
