from django.urls import path
from app_about import views


urlpatterns = [
    path('', views.about, name='about'),
]
