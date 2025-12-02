from django.urls import path
from app_contact import views


urlpatterns = [
    path('', views.contact, name='contact'),
]
