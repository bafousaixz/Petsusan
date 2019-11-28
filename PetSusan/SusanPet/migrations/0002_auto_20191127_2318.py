# Generated by Django 2.1.5 on 2019-11-27 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SusanPet', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Subject', models.CharField(max_length=50)),
                ('Email', models.EmailField(max_length=254)),
                ('Name', models.CharField(max_length=50)),
                ('Message', models.TextField(blank=True)),
            ],
        ),
        migrations.AddField(
            model_name='item',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='item',
            name='sex',
            field=models.BooleanField(default=True),
        ),
    ]
