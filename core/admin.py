from django.contrib import admin
from core.models.course_models import Unit
from core.models.course_models import Course
from core.models.mentor_models import Mentor
from core.models.mentee_models import Mentee

admin.site.register(Course)
admin.site.register(Unit)
admin.site.register(Mentor)
admin.site.register(Mentee)
