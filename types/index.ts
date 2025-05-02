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
  dateCreated: string;
};

export type SnippetCardProps = Omit<SnippetProps, 'code'>;
