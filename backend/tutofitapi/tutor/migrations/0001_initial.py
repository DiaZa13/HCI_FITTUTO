# Generated by Django 3.1.7 on 2021-05-26 01:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tutor',
            fields=[
                ('id_tutor', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('date_of_birth', models.DateField(default=datetime.date.today)),
                ('phone_number', models.IntegerField(default=12341234)),
            ],
        ),
    ]
