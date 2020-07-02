# Demo


# Overview
This application helps the user to signin and sign up and employee process,The app uses django for the server side and React for the client side of the application.

Please follow the setup instrutions as follow in order to view the complete app we need to setup our backend and frontend separately so be carefull otherwise there could be problems.

# Backend-Setup 

clone the repositroy:-
```
https://github.com/vishwa7p/mb_assignment_new.git
```
Create Virtual env for django-part:-
```
virtualenv app
```
Activate Virtual env:-
```
```
Install Dependencies:-
```
cd Backend
pip install -r requirements.txt
```
Make Migrations:-
```
./manage.py makemigrations
./manage.py migrate
```
Start server for your REST-API:-
```
./manage.py runserver
```
# Frontend Setup:-
Go to root and Open another terminal window
```
cd Frontend
```
Install Dependencies:-
```
npm install
```
Run Server:-
```
npm start
```

So apparently to server is running one is localhost:3000(clientside react) and second is localhost:8000(django-api).....
