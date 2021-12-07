from django.urls import path

from . import views

urlpatterns = [
    path('index/', views.index),
    path('categorias/', views.categorias),
    path('cliente/', views.cliente),
    path('login/', views.login),
    path('register/', views.register),
    path('hoteles/<int:id>/', views.hotel_categoria),

    path('tipohabitacion/', views.tipohabitacion),
    path('habitaciones/', views.habitaciones),
    path('hoteles/', views.hoteles),
    path('arduinos/', views.arduinos),
    path('reserva/', views.reserva),
    
]