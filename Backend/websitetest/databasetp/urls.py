from django.urls import path
from databasetp import views
 
urlpatterns = [
    path('', views.HomePageView.as_view()),
    path('volunteers/', views.HomePageView.as_view()),
    path('consumers/', views.HomePageView.as_view()),
    path('dashboard/', views.HomePageView.as_view()),
]