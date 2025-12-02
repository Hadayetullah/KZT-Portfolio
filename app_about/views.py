from django.shortcuts import render
from app_home.current_time import custom_static_files_version
# from django.http import HttpResponse

# Create your views here.


def about(request):
    return render(request, 'app_about/about.html', context={'version': custom_static_files_version})
