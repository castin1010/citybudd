# Generated by Django 3.0.3 on 2020-02-19 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='user_role',
            field=models.CharField(choices=[('MENTEE', 'Mentee'), ('MENTOR', 'Mentor')], default='MENTEE', max_length=10),
        ),
    ]
