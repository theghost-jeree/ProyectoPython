from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('App1/', include(('Aplicacion1.urls','app1'), namespace='app1')),    
    path('admin/', admin.site.urls),
]