from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

import base64
from io import BytesIO
from PIL import Image  # Make sure you have Pillow installed

from .serializers import ImageUploadSerializer

@api_view(['POST'])
def healthcheck(request):
    return Response({"message": "Got some data!"})

@api_view(['POST'])
def imgSearch(request):
    serializer = ImageUploadSerializer(data=request.data)

    if serializer.is_valid():
        image = serializer.validated_data['image']

        # Open the image using Pillow
        img = Image.open(image)

        # Convert the image to bytes
        buffered = BytesIO()
        img.save(buffered, format="JPEG")  # You can change the format if needed
        img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')

        return Response({'image_base64': img_str}, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

