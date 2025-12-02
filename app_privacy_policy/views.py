from django.shortcuts import render
# from django.http import HttpResponse


from app_home.current_time import custom_static_files_version

# Create your views here.


def privacy_policy(request):
    return render(request, 'app_privacy_policy/privacy_policy.html', context={'version': custom_static_files_version})
