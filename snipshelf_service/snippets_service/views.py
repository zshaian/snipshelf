from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from auth_service.views import SupabaseAuthHelper
from .models import snippets, bookmarks
from .serializers import SnippetSerializer, BookmarkSerializer

class SnippetListAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [SupabaseAuthHelper]

    def get(self, request):
        try:
            supabase_user_id = request.user.id  # Access the 'id' attribute of the Supabase user object
            supabase_user_data = request.auth

            #get all snippets
            snippets_list = snippets.objects.filter(supabase_user_id=supabase_user_id)
            snippets_serialized = SnippetSerializer(snippets_list, many=True)
            
            return Response(snippets_serialized.data, 200)
        except Exception as e:
            return Response({"error": str(e)}, 500)

class SnippetDetailAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [SupabaseAuthHelper]

    def get(self, request, snippet_id):
        try:
            snippet = snippets.objects.get(id=snippet_id)
            snippet_serialized = SnippetSerializer(snippet)
            return Response(snippet_serialized.data, 200)
        except snippets.DoesNotExist:
            return Response({"error": "Snippet not found."}, 404)
        except Exception as e:
            return Response({"error": str(e)}, 500)
    
    def post(self, request):
        try:
            snippet_data = request.data
            snippet_data['supabase_user_id'] = request.user.id  # Set the Supabase user ID
            snippet_serialized = SnippetSerializer(data=snippet_data)
            if snippet_serialized.is_valid():
                snippet_serialized.save()
                return Response(snippet_serialized.data, 201)
            return Response(snippet_serialized.errors, 400)
        except Exception as e:
            return Response({"error": str(e)}, 500)

    def put(self, request, snippet_id):
        try:
            snippet = snippets.objects.get(id=snippet_id)
            snippet_data = request.data
            snippet_serialized = SnippetSerializer(snippet, data=snippet_data, partial=True)
            if snippet_serialized.is_valid():
                snippet_serialized.save()
                return Response(snippet_serialized.data, 200)
            return Response(snippet_serialized.errors, 400)
        except snippets.DoesNotExist:
            return Response({"error": "Snippet not found."}, 404)
        except Exception as e:
            return Response({"error": str(e)}, 500)

    def delete(self, request, snippet_id):
        try:
            snippet = snippets.objects.get(id=snippet_id)
            snippet.delete()
            return Response({"message": "Snippet deleted successfully."}, 204)
        except snippets.DoesNotExist:
            return Response({"error": "Snippet not found."}, 404)
        except Exception as e:
            return Response({"error": str(e)}, 500)

class SnippetBookmarkAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [SupabaseAuthHelper]

    def get(self, request):
        try:
            supabase_user_id = request.user.id  # Access the 'id' attribute of the Supabase user object
            bookmarks_list = bookmarks.objects.filter(user_id=supabase_user_id)
            bookmarks_serialized = BookmarkSerializer(bookmarks_list, many=True)
            return Response(bookmarks_serialized.data, 200)
        except Exception as e:
            return Response({"error": str(e)}, 500)
    
    def post(self, request):
        try:
            snippet_id = request.data.get('snippet_id')
            if not snippet_id:
                return Response({"error": "Snippet ID is required."}, 400)
            snippet = snippets.objects.get(id=snippet_id)
            bookmark_data = {
                'snippet': snippet.id,
                'user_id': request.user.id
            }
            bookmark_serialized = BookmarkSerializer(data=bookmark_data)
            if bookmark_serialized.is_valid():
                bookmark_serialized.save()
                return Response(bookmark_serialized.data, 201)
            return Response(bookmark_serialized.errors, 400)
        except snippets.DoesNotExist:
            return Response({"error": "Snippet not found."}, 404)
        except bookmarks.DoesNotExist:
            return Response({"error": "Bookmark not found."}, 404)
        except bookmarks.MultipleObjectsReturned:
            return Response({"error": "Multiple bookmarks found."}, 400)
        except bookmarks.IntegrityError:
            return Response({"error": "Bookmark already exists."}, 400)
        except bookmarks.OperationalError:
            return Response({"error": "Database operational error."}, 500)
        except bookmarks.DatabaseError:
            return Response({"error": "Database error."}, 500)
        except Exception as e:
            return Response({"error": str(e)}, 500)

    def delete(self, request, snippet_id):
        # Example response
        data = {
            "message": f"Bookmark for snippet ID {snippet_id} removed.",
            "user": request.user.username if request.user.is_authenticated else "Anonymous"
        }
        return Response(data)
    

    



