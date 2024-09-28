from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
# Create your views here.

@api_view(['POST'])
def healthcheck(request):
    return HttpResponse({"message": "Got some data!"})