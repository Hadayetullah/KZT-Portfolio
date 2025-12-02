from django.db import models


# Create your models here.
class ContactForm(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    company = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=False, null=False)
    services = models.CharField(max_length=100, blank=True, null=True)
    subject = models.CharField(max_length=255, blank=True, null=True)
    budget = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField(max_length=255, blank=True, null=True)
