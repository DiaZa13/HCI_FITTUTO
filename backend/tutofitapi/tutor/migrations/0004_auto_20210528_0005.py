# Generated by Django 3.1.7 on 2021-05-28 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutor', '0003_availability'),
    ]

    operations = [
        migrations.AlterField(
            model_name='availability',
            name='end_time',
            field=models.TimeField(default='18:00:00'),
        ),
        migrations.AlterField(
            model_name='availability',
            name='start_time',
            field=models.TimeField(default='10:00:00'),
        ),
    ]
