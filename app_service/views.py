from django.shortcuts import render


from app_home.current_time import custom_static_files_version


# Create your views here.
def service(request):
    return render(request, 'app_service/service.html', context={'version': custom_static_files_version})


def pageSpeedOptimization(request):
    return render(request, 'app_service/service_modal_contents/seo_services/page-speed-optimization.html', context={'version': custom_static_files_version})


def webDevelopment(request):
    return render(request, 'app_service/service_modal_contents/it_services/web-development.html', context={'version': custom_static_files_version})
