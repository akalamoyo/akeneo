"""
URL configuration for secret_santa project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path

from app.views import DrawView, DrawHistoryView, ParticipantView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("participant/", ParticipantView.as_view(), name="participant-list"),
    path("draw/", DrawView.as_view(), name="draw"),
    path("history/", DrawHistoryView.as_view(), name="draw-history"),
]