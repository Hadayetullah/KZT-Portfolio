"""
URL configuration for kztportfolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app_home.urls')),
    path('about/', include('app_about.urls')),
    path('portfolio/', include('app_portfolio.urls')),
    path('services/', include('app_service.urls')),
    path('contact/', include('app_contact.urls')),
    path('get-a-free-quote/', include('app_free_quote.urls')),
    path('blog/', include('app_blog.urls')),
    path('privacy-policy/', include('app_privacy_policy.urls')),
    path('terms-condition/', include('app_terms_condition.urls')),
]
