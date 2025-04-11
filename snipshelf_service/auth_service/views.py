from rest_framework import authentication
from rest_framework import exceptions
from supabase import create_client
import os
# Create your views here.

class SupabaseAuthHelper(authentication.BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        if not auth_header or not auth_header.startswith('Bearer '):
            return None

        token = auth_header.split(' ')[1]
        supabase_url = os.environ.get('SUPABASE_URL')
        supabase_key = os.environ.get('SUPABASE_ANON_KEY')  # Use anon key for verification

        if not supabase_url or not supabase_key:
            raise exceptions.AuthenticationFailed('Supabase URL or Anon Key not configured.')

        supabase = create_client(supabase_url, supabase_key)

        try:
            user = supabase.auth.get_user(token)
            if user.user:
                # Authentication successful. You can return a dummy Django user object
                # and the Supabase user data.
                return (user.user, user.data)
            else:
                raise exceptions.AuthenticationFailed('Invalid Supabase JWT.')
        except Exception as e:
            raise exceptions.AuthenticationFailed(f'Error verifying JWT: {e}')

