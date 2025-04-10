from django.db import models

# Create your models here.

class snippets(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    code = models.TextField()
    language = models.CharField(max_length=50)
    tags = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    last_seen = models.DateTimeField(auto_now=True)

    supabase_user_id = models.CharField(max_length=36, db_index=True)

    def __str__(self):
        return self.title
    
class bookmarks(models.Model):
    id = models.AutoField(primary_key=True)
    snippet = models.ForeignKey(snippets, on_delete=models.CASCADE)
    user_id = models.CharField(max_length=36, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Bookmark for {self.snippet.title} by {self.user_id}"