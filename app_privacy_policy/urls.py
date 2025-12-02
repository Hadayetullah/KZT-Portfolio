from django.urls import path
from app_privacy_policy import views


urlpatterns = [
    path('', views.privacy_policy, name='privacy_policy'),
]
