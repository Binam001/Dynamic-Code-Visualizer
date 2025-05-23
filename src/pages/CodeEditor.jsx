import React, { useRef, useState } from 'react';
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

    const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monacoInstance) => {
    editorRef.current = editor;
  };

  const highlightError = (line, column, message) => {
    if (!editorRef.current) return; // Prevent error if not mounted
    monaco.editor.setModelMarkers(
      editorRef.current.getModel(),
      'owner',
      [
        {
          startLineNumber: line,
          startColumn: column,
          endLineNumber: line,
          endColumn: column + 1,
          message,
          severity: monaco.MarkerSeverity.Error,
        },
      ]
    );
    showInlineError(line, column, message);
  };

  // Inline error decoration
  const showInlineError = (line, column, message) => {
    if (!editorRef.current) return;
    editorRef.current.deltaDecorations(
      [],
      [
        {
          range: new monaco.Range(line, column, line, column),
          options: {
            after: {
              content: ` ← ${message}`,
              inlineClassName: 'monaco-inline-error',
              // Inline style using afterContentClassName is not supported,
              // so we use a <style> tag below to inject CSS.
            },
          },
        },
      ]
    );
  };

  // Inject inline CSS for the error decoration
  // Place this inside your component's return, just before the main JSX
  const inlineErrorStyle = (
    <style>
      {`
        .monaco-inline-error {
          color: #ff5555 !important;
          font-style: italic;
          margin-left: 8px;
        }
      `}
    </style>
  );

  return (
     <>
      {inlineErrorStyle}
      <div>
        <ToolBar
          code={code}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={handleLanguageChange}
          setOutput={setOutput}
          setLoading={setLoading}
           highlightError={highlightError}
        />
        <div className="flex gap-1 mt-1 h-[calc(100vh-(40px+4px))]">
          <div className="w-[70%] pt-2 rounded-md bg-[var(--dark-bg-color)]">
            <MonacoEditor
              language={selectedLanguage}
              theme="my-dark-theme"
              editorWillMount={editorWillMount}
              onMount={handleEditorDidMount}
              value={code}
              onChange={(value) => setCode(value)}
            />
          </div>
          <div className="w-[30%] rounded-md bg-[var(--dark-bg-color)] p-2">
            <Output output={output} loading={loading} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeEditor;