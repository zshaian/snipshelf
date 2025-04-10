from .models import *
from rest_framework import serializers

class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = snippets
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at', 'last_seen']

class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = bookmarks
        fields = '__all__'
        read_only_fields = ['id', 'created_at']
        # extra_kwargs = {
        #     'user_id': {'write_only': True},
        #     'snippet': {'write_only': True}
        # }
        # depth = 1