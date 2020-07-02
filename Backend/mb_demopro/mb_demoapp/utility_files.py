from datetime import datetime, timedelta
from django.contrib.auth import authenticate
import jwt
from django.contrib.auth.models import Group
from django.core.cache import cache

from rest_framework import status
from rest_framework.response import Response

from .models import User
from .tasks import send_email


def success_context(data={}, message='ok', code=200):
    ok_response = {'data': data, 'message': message, 'status': True}
    return Response(data=ok_response, status=status.HTTP_200_OK)


def error_context(data={}, message='error', code=401):
    error_response = {'data': data, 'message': message, 'status': False}
    return Response(data=error_response, status=code)


class RegistrationMixin(object):

    def __init__(self):
        [self.user, self.reg_details] = None

    def registration(self):
        try:
            self.user = User.objects.filter(email=self.reg_details['email'], is_active=True)
        except Exception as e:
            print(e)
            pass
        if self.user:
            return error_context(message='user already exists', code=406)
        user = User(first_name=self.reg_details['first_name'], last_name=self.reg_details['last_name'],
                    email=self.reg_details['email'], username=self.reg_details['email'],
                    address=self.reg_details['address'], company=self.reg_details['company'],
                    mobile_number=self.reg_details['mobile_number'])
        user.set_password(self.reg_details['password'])
        user.save()
        my_group = Group.objects.get(name="Manager")
        my_group.user_set.add(user.id)
        email_id = self.reg_details['email']
        send_email.delay(email_id)
        return success_context(message='registered successfully')


class AddEmpMixin(object):

    def __init__(self):
        [self.user, self.emp_details] = None

    def add_employee(self):
        try:
            self.user = User.objects.filter(email=self.emp_details['email'], is_active=True)
        except Exception as e:
            print(e)
            pass
        user_grp = self.user.groups.get(name="Manager")
        if user_grp:
            if self.user:
                return error_context(message='user already exists', code=406)
            user = User(first_name=self.emp_details['first_name'], last_name=self.emp_details['last_name'],
                        email=self.emp_details['email'], username=self.emp_details['email'],
                        address=self.emp_details['address'], company=self.emp_details['company'],
                        mobile_number=self.emp_details['mobile_number'])
            user.set_password(self.emp_details['password'])
            user.save()
            my_group = Group.objects.get(name="Employee")
            my_group.user_set.add(user.id)
            email_id = self.emp_details['email']
            send_email.delay(email_id)
            return success_context(message='employee added successfully')
        return error_context(message="permission denied to add employee")


class LoginMixin(object):

    def __init__(self):
        [self.user, self.login_credentials, self.encode_token] = None

    def login(self):
        try:
            self.user = User.objects.filter(username=self.login_credentials['email'], is_active=True)
        except Exception as e:
            print(e)
            return error_context(message='user does not exists', code=406)
        user = authenticate(username=self.login_credentials['email'], password=self.login_credentials['password'])
        payload = {"username": self.user.username,
                   "user_id": self.user.id,
                   "iat": str(datetime.utcnow())}
        self.encode_token = jwt.encode({"data": payload, "exp": datetime.utcnow() + timedelta(minutes=30)}).decode()
        cache.set("jwt_token", self.encode_token)
        if user:
            return success_context(data=self.encode_token, message='login successful')
        else:
            return error_context(message='email or password is invalid')


class EmpUpdateMixin(object):
    def __init__(self):
        [self.user, self.emp_details] = None

    def update_employee(self):
        try:
            self.user = User.objects.filter(email=self.emp_details['email'], is_active=True)
        except Exception as e:
            print(e)
            pass
        if self.user:
            return error_context(message='user already exists', code=406)
        user = User(first_name=self.emp_details['first_name'], last_name=self.emp_details['last_name'],
                    email=self.emp_details['email'], username=self.emp_details['email'],
                    address=self.emp_details['address'], company=self.emp_details['company'],
                    mobile_number=self.emp_details['mobile_number'])
        user.save()
        email_id = self.emp_details['email']
        send_email.delay(email_id)
        return success_context(message='employee updated successfully')