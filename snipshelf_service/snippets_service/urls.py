from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('snippets/', SnippetListAPIView.as_view(), name='snippet-list'),
    path('snippets/<int:snippet_id>/', SnippetDetailAPIView.as_view(), name='snippet-detail'),
    path('bookmarks/', SnippetBookmarkAPIView.as_view(), name='bookmark-list'),
]