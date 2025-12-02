from django.urls import path
from app_blog import views


urlpatterns = [
    path('', views.blog, name='blog'),
]
