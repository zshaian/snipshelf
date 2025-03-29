'use client';

import { Editor } from '@monaco-editor/react';

export default function CodeEditorReadOnly() {
  return (
    <div className="overflow-hidden">
      <Editor
        height="300px"
        theme="vs-dark"
        language="javascript"
        defaultValue={`function sayName(name){
    console.log(\`hello \${name}\`);
}`}
        options={{ readOnly: true, fontSize: 16 }}
      />
    </div>
  );
}
