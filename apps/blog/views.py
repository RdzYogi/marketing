from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Post
from .serializers import PostSerializer
from apps.category.models import Category

class BlogListView(APIView):
    permission_classes = [permissions.AllowAny,]
    def get(self, request, format=None):
        if Post.objects.all().exists():
            posts = Post.objects.all()
            serializer = PostSerializer(posts, many=True)
            return Response({'posts': serializer.data }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)
