from django import forms
from .models import NewsLetters

class NewsLettersForm(forms.ModelForm):
    class Meta:
        model = NewsLetters
        fields = '__all__'