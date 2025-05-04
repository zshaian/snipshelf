export type UserProfile = {
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

export type SnippetCardProps = Omit<SnippetProps, 'code'>;
