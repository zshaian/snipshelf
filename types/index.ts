export type SnippetViewProps = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  code: string;
  programmingLanguageName: string;
  authorImage: string;
  authorName: string;
  dateCreated: string;
};

export type SnippetCardProps = Omit<SnippetViewProps, 'code'>;
