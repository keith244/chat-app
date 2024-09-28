from django.urls import path
from . import views

#my urls
urlpatterns =[
    path('',views.index, name='index'),
    path('profile_pic/',views.profile_pic, name='profile-pic'),
]