from django.urls import path
from app_service import views


urlpatterns = [
    path('', views.service, name='service'),
    path('page-speed-optimization/', views.pageSpeedOptimization, name='page-speed-optimization'),
    path('web-development/', views.webDevelopment, name='web-development'),
]
