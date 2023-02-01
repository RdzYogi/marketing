# Generated by Django 3.2.16 on 2023-02-01 10:17

import apps.blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_alter_post_content'),
    ]

    operations = [
        migrations.RenameField(
            model_name='viewcount',
            old_name='category',
            new_name='post',
        ),
        migrations.AlterField(
            model_name='post',
            name='thumbnail',
            field=models.ImageField(max_length=500, upload_to=apps.blog.models.blog_thumbnail_path),
        ),
    ]
