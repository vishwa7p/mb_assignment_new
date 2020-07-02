from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView

from .models import User
from .serializers import EmployeeSerializer
from .utility_files import *


class Registration(APIView, RegistrationMixin):

    def post(self, request):
        request_data = request.data
        self.reg_details = request_data.get('reg_details')
        return self.registration()


class Login(APIView, LoginMixin):

    def post(self, request):
        request_data = request.data
        self.login_credentials = request_data.get('login_credentials')
        return self.login()


class AddEmployee(APIView, AddEmpMixin):

    def post(self, request):
        request_data = request.data
        self.emp_details = request_data.get('emp_details')
        return self.add_employee()


class EmpUpdateView(APIView, EmpUpdateMixin):

    def post(self, request):
        request_data = request.data
        self.emp_details = request_data.get('emp_details')
        return self.update_employee()


class EmpDeleteView(APIView):
    def delete(self, pk):
        self.user = User.objects.get(pk=pk)
        self.user.delete()
        return success_context(message='deleted successfully')


class EmployeeDetails(APIView):

    def get(self):
        queryset = User.objects.order_by('first_name')
        serializer = EmployeeSerializer(queryset, many=True)
        return Response(serializer.data)


class Logout(APIView):

    def post(self, request):
        cache.delete("jwt_token")
        return Response("logged out successfully")
