from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout, get_user_model

# Create your views here.
User = get_user_model()

def iregister(request):
    context = {
        'username': '',
        'email': '',
        'password': '',
        'password2': '',
    }

    if request.user.is_authenticated:
        return redirect('index')

    if request.method == 'POST':
        context['username'] = request.POST.get('username', '').strip()
        context['email'] = request.POST.get('email', '')
        password = request.POST.get('password', '')
        password2 = request.POST.get('password2', '')

        if not context['username'] or not context['email']:
            messages.error(request, 'All fields are required.')
        elif User.objects.filter(email=context['email']).exists():
            messages.error(request, 'An account with this email already exists. Please use another email.')
        elif password != password2:
            messages.error(request, 'Passwords must match.')
        elif User.objects.filter(username=context['username']).exists():
            messages.error(request, 'An account with this username already exists. Please use another.')
        else:
            user = User.objects.create_user(
                username=context['username'],
                email=context['email'],
            )
            user.set_password(password)
            user.is_active = True
            user.save()
            messages.success(request, 'Account created successfully. Login now.')
            return redirect('login')

    return render(request, 'users/register.html', context)


def ilogin(request):
    context = {
        'username': '',
    }
    if request.user.is_authenticated:
        return redirect('index')

    if request.method == 'POST':
        context['username'] = request.POST.get('username','')
        password = request.POST.get('password')

        user = authenticate (request, username = context['username'], password=password)

        if not context['username']:
            messages.error (request, 'Username required')
        
        if user is not None:
            login(request, user)
            messages.success (request, f"Welcome, {context['username']}")
            return redirect('index')
        else:
            if User.objects.filter(username= context['username']).exists():
                messages.error (request, 'Invalid credentials provided.')
            else:
                messages.error(request, f"Account with the username {context['username']} does not exist.")
            return redirect('login')

    return render(request, 'users/login.html', context)

def ilogout(request):
    logout(request)
    return redirect('login')
