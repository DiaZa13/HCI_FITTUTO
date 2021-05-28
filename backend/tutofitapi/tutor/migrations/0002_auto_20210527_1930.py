# Generated by Django 3.1.7 on 2021-05-28 01:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutor', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutor',
            name='rate_per_hour',
            field=models.IntegerField(default=50),
        ),
        migrations.AlterField(
            model_name='tutor',
            name='date_of_birth',
            field=models.DateField(auto_now_add=True),
        ),
    ]