from .serializers import ConsumerSerializer, VolunteerSerializer
from databasetp.models import Consumer, Volunteer
# from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.decorators import action, api_view
# from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class ConsumerViewSet(viewsets.ModelViewSet):

    # list, create, retrieve, update, partial_update, destroy
    queryset = Consumer.objects.all()
    serializer_class = ConsumerSerializer
    
    @action(methods=['get'], detail=False)
    def newest(self, request):
        newest = self.get_queryset().order_by('id').last()
        serializer = self.get_serializer_class()(newest)
        return Response(serializer.data)

class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

