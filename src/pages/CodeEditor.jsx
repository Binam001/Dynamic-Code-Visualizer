import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import ToolBar from '../components/ToolBar';
import { CODE_SNIPPETS } from '../constraints';
import Output from '../components/Output';

function CodeEditor() {
  const [code, setCode] = useState(CODE_SNIPPETS['javascript']);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setCode(CODE_SNIPPETS[language]);
  };

  return (
    <div>
      <ToolBar
        code={code}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={handleLanguageChange}
        setOutput={setOutput} // Pass setOutput to ToolBar
        setLoading={setLoading}
      />
      <div className="flex gap-1 mt-1 h-[calc(100vh-(40px+4px))]">
        <div className="w-[70%] pt-2 rounded-md bg-[var(--dark-bg-color)]">
          <MonacoEditor
            language={selectedLanguage}
            theme="my-dark-theme"
            editorWillMount={editorWillMount}
            value={code}
            onChange={(value) => setCode(value)}
          />
        </div>

        <div className="w-[30%] rounded-md bg-[var(--dark-bg-color)] p-2">
          <Output output={output} loading={loading} /> {/* Only pass output */}
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;