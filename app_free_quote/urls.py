from django.urls import path
from app_free_quote import views


urlpatterns = [
    path('', views.getFreeQuote, name='get_free_quote'),
]
