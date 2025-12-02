from django.shortcuts import render
# from django.http import HttpResponse


from app_home.current_time import custom_static_files_version

# Create your views here.


def terms_condition(request):
    return render(request, 'app_terms_condition/terms_condition.html', context={'version': custom_static_files_version})
