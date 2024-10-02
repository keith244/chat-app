from django.shortcuts import render,redirect

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        return render(request, 'chat/index.html')
    else:
        return redirect('login')

def profile_pic(request):
    if request.user.is_authenticated:
        return render (request, 'chat/profile_pic.html')
    else:
        return redirect('login')