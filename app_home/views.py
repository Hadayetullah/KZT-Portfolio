from django.shortcuts import render, redirect
from django.http import JsonResponse
from .current_time import custom_static_files_version
from django.http import HttpResponse

from .forms import NewsLettersForm



# Create your views here.

def home(request):
    # print(custom_static_files_version)
    if request.method == 'POST':
        data = request.POST
        form = NewsLettersForm(data)
        if form.is_valid():
            form.save()

            return JsonResponse({"msg": "Data submitted successfully", "status": 201, })
        else:
            return JsonResponse({"msg": "Something went wrong", "status": 400})
    return render(request, 'app_home/home.html', context={'version': custom_static_files_version})

