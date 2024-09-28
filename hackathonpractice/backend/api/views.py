from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['POST'])
def healthcheck(request):
    return Response({"message": "Got some data!"})

@api_view(['POST'])
def imgSearch(request):
    return Response({"message": "Got some data!"})

