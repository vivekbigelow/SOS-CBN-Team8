from rest_framework import serializers 
from databasetp.models import Consumer, Volunteer
 
 
class ConsumerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consumer
        fields = ('__all__')

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('__all__')