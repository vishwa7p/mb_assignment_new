from django.urls import path

from . import views
urlpatterns = [

    path("register/", views.Registration.as_view(), name="emp-reg"),
    path("login/", views.Login.as_view(), name="emp-login"),
    path("logout/", views.Logout.as_view(), name='emp-logout'),
    path("emp_list/", views.EmployeeDetails.as_view(), name="emp-list"),
    path("add_emp/", views.AddEmployee.as_view(), name="add_emp"),
    path('emp_delete/<int:pk>/', views.EmpDeleteView.as_view(),
         name='emp_delete'),
    path("emp_update/<int:pk>/", views.EmpUpdateView.as_view(), name='emp_update'),
]