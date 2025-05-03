import React, { useRef, useState } from 'react'
import MonacoEditor from 'react-monaco-editor'
import * as monaco from 'monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import ToolBar from '../components/ToolBar';
import { CODE_SNIPPETS } from '../constraints';

function CodeEditor() {
  // Called before the editor is mounted
  const editorWillMount = (monaco) => {
    monaco.editor.defineTheme('my-dark-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'keyword', foreground: '569CD6', fontStyle: 'bold' },
        { token: 'number', foreground: 'B5CEA8' },
        { token: 'identifier', foreground: '9CDCFE' },
        { token: 'delimiter', foreground: 'D4D4D4' },
        { token: 'type', foreground: '4EC9B0' },
      ],
      colors: {
        'editor.background': '#1e1e2f',
        'editor.foreground': '#ffffff',
        'editor.lineHighlightBackground': '#2a2a3d',
        'editorCursor.foreground': '#ffffff',
        'editorLineNumber.foreground': '#858585',
      },
    });
  };

  const [code, setCode] = useState(CODE_SNIPPETS['javascript'])
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const editorRef = useRef()

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Update the selected language
    setCode(CODE_SNIPPETS[language]); // Update the code with the corresponding snippet
  };

  return (
    <div>
      <ToolBar selectedLanguage={selectedLanguage} setSelectedLanguage={handleLanguageChange} />
      <div className="flex gap-1 mt-1 h-[calc(100vh-(40px+4px))]">
        <div className="w-[70%] pt-2 rounded-md bg-[var(--dark-bg-color)]">
        <MonacoEditor
          // width="800"
          // height="600"
          // language="javascript"
          language={selectedLanguage}
          // theme="vs-dark"
          theme="my-dark-theme"
          editorWillMount={editorWillMount}
          // defaultValue="// Write a program ..."
          value={code}
          onChange={(value)=> setCode(value)}
          onMount={onMount}
          // options={options}
          // onChange={::this.onChange}
          // editorDidMount={::this.editorDidMount}
        />
        </div>

        <div className="w-[30%] rounded-md bg-[var(--dark-bg-color)] p-2">
          right
        </div>
      </div>

    </div>
  )
}

export default CodeEditor