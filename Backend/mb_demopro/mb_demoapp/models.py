from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.


class User(AbstractUser):
    address = models.CharField(max_length=200, null=True)
    mobile_number = models.CharField(max_length=15, null=True)
    company = models.TextField(null=True)
    date_of_birth = models.DateField(null=True)
    city = models.CharField(max_length=200, null=True)

    def __str__(self):
        return str(self.address)
