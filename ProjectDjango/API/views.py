from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def index(request):
    return Response({'mensaje': 'API RESTFULL PROYECTO FINAL'})

@api_view(['GET'])
def categorias(request):
    if request.method == 'GET':
        lista_categorias = Categorias.objects.all()
        serializer = CategoriaSerializer(lista_categorias, many=True)
        return Response(serializer.data)
    '''
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CategoriaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)'''

@api_view(['GET'])
def cliente(request):
    """
    Retrieve, update or delete a serie.
    """
    print(request)
    if request.method == 'GET':
        lista_clientes = Cliente.objects.all()
        serializer = ClienteSerializer(lista_clientes, many=True)
        return Response(serializer.data)
    '''
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        clientesa = Cliente.objects.filter(Correo=data['email'], Password=data['password'])
        print("kandkand" + str(clientesa))
        serializer = ClienteSerializer(clientesa, many=True)
        return JSONResponse(serializer.data[0])
        
        data = JSONParser().parse(request)
        cliente = Cliente.objects.filter(Correo=data['email'], Password=data['password']).first()
        client['C']
        dato_cliente = JSONParser().parse(cliente)
        print('jASNFNSFg'+str(dato_cliente))
        serializer = ClienteSerializer(data=data)
        print('jvg'+str(request))
        print('jdgagsdgdg'+str(cliente))
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)'''

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        clientesa = Cliente.objects.filter(Correo=data['email'], Password=data['password'])
        print("kandkand" + str(clientesa))
        serializer = ClienteSerializer(clientesa, many=True)
        return Response(serializer.data[0])

@api_view(['POST']) 
def register(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ClienteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET'])
def hoteles(request):
    if request.method == 'GET':
        lista_hoteles = Hoteles.objects.all()
        serializer = HotelesSerializer(lista_hoteles, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def hotel_categoria(request, id):
    if request.method == 'GET':
        hoteles_por_categoria = Hoteles.objects.filter(Categoria=id)
        serializer = HotelesSerializer(hoteles_por_categoria, many=True)
        return Response(serializer.data)     

@api_view(['GET'])
def detallehotel(request, pk):
    if request.method == 'GET':
        hoteles_por_categoria = Hoteles.objects.filter(id=pk)
        serializer = HotelesSerializer(hoteles_por_categoria, many=True)
        return Response(serializer.data)    

@api_view(['GET'])
def tipohabitacion(request):
    if request.method == 'GET':
        lista_tipohabitacion = TipoHabitacion.objects.all()
        serializer = TipoHabitacionSerializer(lista_tipohabitacion, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def gettipohabitacion(request, pk):
    if request.method == 'GET':
        lista_tipohabitacion = TipoHabitacion.objects.filter(id=pk)
        serializer = TipoHabitacionSerializer(lista_tipohabitacion, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def habitaciones(request):
    if request.method == 'GET':
        lista_habitaciones = Habitaciones.objects.all()
        serializer = HabitacionesSerializer(lista_habitaciones, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def detallehabitacion(request, pk):
    if request.method == 'GET':
        lista_habitaciones = Habitaciones.objects.filter(id=pk)
        serializer = HabitacionesSerializer(lista_habitaciones, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def habitaciones_hotel(request, id_hotel):
    if request.method == 'GET':
        habitaciones_por_hotel = Habitaciones.objects.filter(Hotel=id_hotel)
        serializer = HabitacionesSerializer(habitaciones_por_hotel, many=True)
        return Response(serializer.data) 

@api_view(['GET'])
def arduinos(request):
    if request.method == 'GET':
        lista_arduinos = Arduinos.objects.all()
        serializer = ArduinosSerializer(lista_arduinos, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def reserva(request):
    if request.method == 'GET':
        lista_reservas = Reserva.objects.all()
        serializer = ReservaSerializer(lista_reservas, many=True)
        return Response(serializer.data)

