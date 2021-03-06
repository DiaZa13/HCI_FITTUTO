# Generated by Django 3.1.7 on 2021-05-26 23:42

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        ('tutor', '0001_initial'),
        ('course', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id_appointment', models.AutoField(primary_key=True, serialize=False)),
                ('start_date', models.DateTimeField(default=datetime.date.today)),
                ('end_date', models.DateTimeField(default=datetime.date.today)),
                ('id_course', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='appointments', to='course.course')),
                ('id_tutor', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='appointments', to='tutor.tutor')),
                ('id_user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='appointments', to='users.user')),
            ],
        ),
    ]
