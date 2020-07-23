from django.db import models

class Consumer(models.Model):
	first_name=models.CharField(max_length=250)
	last_name=models.CharField(max_length=250)
	address=models.CharField(max_length=500)
	phone_number=models.TextField()
	
	def __str__(self):
		return self.first_name

class Volunteer(models.Model):
	first_name=models.CharField(max_length=250)
	last_name=models.CharField(max_length=250)
	phone_number=models.TextField()
	position_title=models.CharField(max_length=250)


	def __str__(self):
		return self.first_name

