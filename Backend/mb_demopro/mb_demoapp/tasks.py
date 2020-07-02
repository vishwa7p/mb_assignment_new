from django.conf import settings
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from celery import Celery

SENDGRID_API_KEY = "api-key"

app = Celery('tasks', broker='pyamqp://guest@localhost//')


@app.task
def send_email(email):
    mail_content = "Hello,<br><strong>" "</strong> Thank you for registration.<br>We will reach you soon.."
    message = Mail(
        from_email='test@gmail.com',  # change the mail
        to_emails=email,
        subject='Welcome',
        html_content=mail_content
    )
    try:
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(str(e))
