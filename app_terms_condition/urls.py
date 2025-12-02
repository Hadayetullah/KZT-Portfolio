from django.urls import path
from app_terms_condition import views


urlpatterns = [
    path('', views.terms_condition, name='terms_condition'),
]
