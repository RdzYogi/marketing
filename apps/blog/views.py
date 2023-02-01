from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Post, ViewCount
from .serializers import PostListSerializer, PostSerializer
from apps.category.models import Category
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

class BlogListView(APIView):
    permission_classes = [permissions.AllowAny,]
    def get(self, request, format=None):
        if Post.objects.all().exists():
            posts = Post.objects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)

            serializer = PostListSerializer(results, many=True)
            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)

class ListPostsByCategoryView(APIView):
    permission_classes = [permissions.AllowAny,]
    def get(self, request, format=None):
        if Post.objects.all().exists():
            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)

            posts = Post.objects.order_by('-published').all()

            # Check if category has children or is a parent
            # If category has no children, filter by category
            if category.parent:
                posts = posts.filter(category=category)
            # If category has children, filter by parent and children
            else:
                # First filter by just the parent
                # This could be redundant, but it's a failsafe
                if not Category.objects.filter(parent=category).exists():
                    posts = posts.filter(category=category)
                else:
                    categories = Category.objects.filter(parent=category)
                    filtered_categories = [category]

                    for category in categories:
                        filtered_categories.append(category)

                    filtered_categories = tuple(filtered_categories)
                    posts = posts.filter(category__in=filtered_categories)



            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)

            serializer = PostListSerializer(results, many=True)
            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)

class PostDetailView(APIView):
    permission_classes = [permissions.AllowAny,]
    def get(self, request, slug, format=None):
        if Post.objects.filter(slug=slug).exists():
            post = Post.objects.get(slug=slug)

            # Get ip address from the request
            ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
            if ip_address:
                ip = ip_address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            # Check if ip address has already viewed the post
            if not ViewCount.objects.filter(ip_address=ip, post=post).exists():
                # If ip address has not viewed the post, create a new ViewCount object
                view_count = ViewCount(post=post, ip_address=ip)
                view_count.save()

                # Increment the post's view count
                post.views += 1
                post.save()

            serializer = PostSerializer(post)
            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)
