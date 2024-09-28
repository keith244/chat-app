from django.shortcuts import render,redirect

# Create your views here.
def index(request):
    return render(request, 'chat/index.html')

def profile_pic(request):
    return render (request, 'chat/profile_pic.html')