from django.urls import path
from app_portfolio import views


urlpatterns = [
    path('', views.portfolio, name='portfolio'),
]
