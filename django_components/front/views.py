from django.shortcuts import render, HttpResponse, render_to_response

def index(request):
	return render_to_response('layout/base.html')

def home(request):
	return render_to_response('section/home.html')

def about_us(request):
	return render_to_response('section/aboutus.html')

def contact(request):
	return render_to_response('section/contact.html')