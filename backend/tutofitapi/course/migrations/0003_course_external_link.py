# Generated by Django 3.1.7 on 2021-05-28 03:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0002_teaches'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='external_link',
            field=models.TextField(default='wikipedia.com'),
        ),
    ]
