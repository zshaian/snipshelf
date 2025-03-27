'use client';

import Editor from '@monaco-editor/react';

export default function CodeEditor() {
  return (
    <div className="flex-1 w-full overflow-hidden">
      <Editor
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={`class Person {
    constructor(name,lastName){
        this.firstName = name;
        this.lastName =  lastName;
    }

    logName(){
        console.log(this.firstName + " " + this.lastName);
    }
}


const person = new Person("john","smith");

person.logName();`}
      />
    </div>
  );
}
