from django.db import models

class Unit(models.Model):
    """
    A unit represents a direct child of the course in a course outline tree.
    """
    name = models.CharField(max_length=300,null=False,default='')
    available = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def get_available_units():
        return Unit.objects.filter(active=True)

class Course(models.Model):
    """
    A course is an entire module on a given area.
    """
    name = models.CharField(max_length=300,null=False,default='')
    units = models.ManyToManyField(Unit)
    available = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def get_available_courses():
        return Course.objects.filter(available=True)
