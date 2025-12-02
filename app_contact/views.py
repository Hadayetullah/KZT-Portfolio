from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import EmailMessage

from .forms import ContactFormForm

from app_home.current_time import custom_static_files_version


# Create your views here.
def contact(request):
    if request.method == 'POST':
        data = request.POST
        form = ContactFormForm(data)
        if form.is_valid():
            # form.save()

            html_content = "<div>"
            html_content += "<h2 style='border-bottom:1px solid #000;margin-bottom:10px;width:130px'>Client Details</h2>\n"
            for key, value in data.items():
                html_content += f"<p style='padding:0;margin:0;line-height:1.2'><span style='font-weight:bold;text-transform:capitalize;'>{key}: </span>{value}</p>"
                # print(key, value)

            html_content += '\n<a style="margin-top:50px;background:#606060;display:inline-block;margin-left:0%;color:white;font-size:18px;font-weight:bold;cursor:pointer;padding:8px 20px 6px;text-decoration:none;border-radius:3px;"><span style="line-height:20px;">Go to Admin Panel</span></a>'
            html_content += "</div>"

            mail_subject, from_email, to = "Client From Website", "hadayetullah002@gmail.com", "hadayetullah002@gmail.com"
            # html_content = "<p>This is an <strong>important</strong> message.</p>"
            msg = EmailMessage(mail_subject, html_content, from_email, [to])
            msg.content_subtype = "html"  # Main content is now text/html
            msg.send()

            # print(data)

            return JsonResponse({"msg": "Data submitted successfully", "status": 201, })
        else:
            return JsonResponse({"msg": "Something went wrong", "status": 400})
    return render(request, 'app_contact/contact.html', context={'version': custom_static_files_version})
