from rest_framework.serializers import ModelSerializer

from .models import User


class EmployeeSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
