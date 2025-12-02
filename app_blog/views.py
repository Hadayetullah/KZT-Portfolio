from django.shortcuts import render
from app_home.current_time import custom_static_files_version
# from django.http import HttpResponse

# Create your views here.


def blog(request):
    return render(request, 'app_blog/blog.html', context={'version': custom_static_files_version})
