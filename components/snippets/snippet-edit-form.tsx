'use client';

import type { EditSnippetPropsForm } from '@/types';
import EditForm from '@/components/snippets/edit-form';
import { use } from 'react';

export default function EditSnippetForm({
  snippetInfoRequest,
}: {
  snippetInfoRequest: Promise<EditSnippetPropsForm>;
}) {
  const snippetInfo = use(snippetInfoRequest);

  return <EditForm snippetInfoEditRequest={snippetInfo} />;
}
