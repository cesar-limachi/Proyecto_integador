from django.urls import path

from . import views

urlpatterns = [
    path('index/', views.index),
    path('categorias/', views.categorias),
    path('cliente/', views.cliente),
    path('login/', views.login),
    path('register/', views.register),
    path('hotel/<int:id>/', views.hotel_categoria),
    path('habitacion/<int:id_hotel>/', views.habitaciones_hotel),
    path('detallehabitacion/<int:pk>/', views.detallehabitacion),

    path('tipohabitacion/', views.tipohabitacion),
    path('tipohabitaciondata/<int:pk>/', views.gettipohabitacion),
    path('habitaciones/', views.habitaciones),
    path('hoteles/', views.hoteles),
    path('detallehotel/<int:pk>/', views.detallehotel),
    path('arduinos/', views.arduinos),
    path('reserva/', views.reserva),
    
]