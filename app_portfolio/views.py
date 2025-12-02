from django.shortcuts import render


from app_home.current_time import custom_static_files_version


# Create your views here.
def portfolio(request):
    return render(request, 'app_portfolio/portfolio.html', context={'version': custom_static_files_version})
