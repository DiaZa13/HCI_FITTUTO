# Generated by Django 3.1.7 on 2021-05-28 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20210527_0145'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birth_date',
            field=models.DateField(default='1990-01-01'),
        ),
    ]
