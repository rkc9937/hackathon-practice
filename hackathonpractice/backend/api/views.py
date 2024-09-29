from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

import base64
from io import BytesIO
from PIL import Image  # Make sure you have Pillow installed

from .serializers import ImageUploadSerializer

@api_view(['GET'])
def healthcheck(request):
    return Response({"message": "Got some data!"})

@api_view(['POST'])
def imgSearch(request):
    # data: {img: data}
    img_b64 = request.data["img"]
    print("Img submitted is: " + img_b64)

    response_data = {
        "results": [
            {
                "item_name": "Cool pokemon card",
                "item_description": "The coolest pokemon card ever",
                "item_price": 19.89
            },
            {
                "item_name": "Cool yugioh card",
                "item_description": "The coolest yugioh card ever",
                "item_price": 5.00
            },
            {
                "item_name": "Basketball",
                "item_description": "Used by MJ himself",
                "item_price": 10000009.89
            },
        ]
    }

    return Response(response_data, status=status.HTTP_200_OK)

