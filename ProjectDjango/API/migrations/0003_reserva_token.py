# Generated by Django 3.2 on 2021-11-29 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0002_remove_reserva_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='reserva',
            name='Token',
            field=models.CharField(default=500947, editable=False, max_length=6),
        ),
    ]