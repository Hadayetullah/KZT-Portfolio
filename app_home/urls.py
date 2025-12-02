from django.urls import path
from app_home import views


urlpatterns = [
    path('', views.home, name='home'),
    # path('about/', views.about, name='about'),
]
