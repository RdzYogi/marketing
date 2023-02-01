from django.db import models
from apps.category.models import Category
from django.utils import timezone
from ckeditor.fields import RichTextField


def blog_thumbnail_path(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

# Create your models here.

class Post(models.Model):
    title =         models.CharField(max_length=255)
    slug =          models.SlugField(max_length=255, unique=True)
    thumbnail =     models.ImageField(upload_to=blog_thumbnail_path, max_length=500)
    description =   models.TextField(max_length=255)
    content =       RichTextField()
    published =     models.DateTimeField(default=timezone.now)
    time_read =     models.IntegerField()
    views =         models.IntegerField(default=0, blank=True)

    category =      models.ForeignKey(Category, on_delete=models.PROTECT)

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
        ordering = ['-published']

    def __str__(self):
        return self.title

    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views

class ViewCount(models.Model):
    post = models.ForeignKey(Post, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"
