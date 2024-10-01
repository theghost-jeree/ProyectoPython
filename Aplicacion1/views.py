from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class IndexView(TemplateView):
    template_name='index.html'

class InformacionView(TemplateView):
    template_name='informacion.html'

class ServiciosView(TemplateView):
    template_name='servicios.html'

class GaleriaView(TemplateView):
    template_name='galeria.html'