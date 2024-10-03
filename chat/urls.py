from django.urls import path
from django.contrib import admin
from . import views

#my urls
urlpatterns =[
    # path('admin/', admin.site.urls, name='admin'),
    path('',views.index, name='index'),
    path('profile_pic/',views.profile_pic, name='profile-pic'),
]