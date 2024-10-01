from django.contrib import admin
from django.urls import path,include
from .views import IndexView, InformacionView, ServiciosView, GaleriaView

urlpatterns = [
    path('Index/', IndexView.as_view(), name='index'), 
    path('Informacion/', InformacionView.as_view(), name='informacion'),
    path('Servicios/', ServiciosView.as_view(), name='servicios'),
    path('Galeria/', GaleriaView.as_view(), name='galeria'),
]