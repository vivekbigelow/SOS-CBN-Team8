from django.shortcuts import render
from django.views.generic.base import TemplateView

class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

def index(request, path=''):
    """
    Renders the Angular SPA
    """
    return render(request, 'index.html')