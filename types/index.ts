export type UserProfile = {
  user_id: string;
  name: string;
  avatar: string;
};

export type SnippetProps = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  code: string;
  language: string;
  profiles: UserProfile;
  created_at: string;
  isBookmarked?: boolean;
};

export type SnippetPropsForm = Omit<
  SnippetProps,
  'id' | 'created_at' | 'isBookmarked' | 'profiles'
>;

export type ErrorPageProps = {
  error: Error & { disgest?: string };
  reset: () => void;
};

export type SnippetCardProps = Omit<SnippetProps, 'code'>;
