import React, { useRef, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import ToolBar from '../components/ToolBar';
import { CODE_SNIPPETS } from '../constraints';
import { getExplanation, getComplexity } from '../utils/callOpenAI';

function OutputPanel({ title, icon, content, loading, color = 'blue' }) {
  return (
    <div className={`bg-zinc-800 rounded-xl p-4 shadow-inner border border-zinc-700 mb-6`}>
      <h2 className={`text-lg font-semibold mb-3 text-${color}-400 flex items-center`}>
        <span className="mr-2 text-xl">{icon}</span> {title}
      </h2>
      <div className="bg-zinc-900 rounded-lg p-4 text-sm text-gray-200 whitespace-pre-wrap min-h-[120px] max-h-64 overflow-y-auto custom-scrollbar">
        {loading ? '⏳ Loading...' : content || '⚠️ No output yet.'}
      </div>
    </div>
  );
}

function CodeEditor() {
  const [code, setCode] = useState(CODE_SNIPPETS['javascript']);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [explanation, setExplanation] = useState('');
  const [complexity, setComplexity] = useState('');
  const [output, setOutput] = useState('');
  const [loadingExplanation, setLoadingExplanation] = useState(false);
  const [loadingComplexity, setLoadingComplexity] = useState(false);
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);

  const editorWillMount = (monaco) => {
    monaco.editor.defineTheme('my-dark-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'keyword', foreground: '569CD6', fontStyle: 'bold' },
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
    setExplanation('');
    setComplexity('');
    setOutput('');
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const fetchExplanation = async () => {
    setLoadingExplanation(true);
    setExplanation('');
    try {
      const result = await getExplanation(code, selectedLanguage);
      setExplanation(result);
    } catch {
      setExplanation('❌ Failed to fetch explanation.');
    }
    setLoadingExplanation(false);
  };

  const fetchComplexity = async () => {
    setLoadingComplexity(true);
    setComplexity('');
    try {
      const result = await getComplexity(code, selectedLanguage);
      setComplexity(result);
    } catch {
      setComplexity('❌ Failed to fetch complexity.');
    }
    setLoadingComplexity(false);
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
    <div className="flex flex-col md:flex-row h-screen p-4 gap-4 bg-zinc-900 text-white">

      {/* Code Editor Section */}
      <div className="flex flex-col w-full md:w-2/3 space-y-4">
        {inlineErrorStyle}
        <ToolBar
          code={code}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={handleLanguageChange}
          setOutput={setOutput}
          setLoading={setLoading}
           highlightError={highlightError}
        />
        <div className="rounded-xl overflow-hidden shadow-xl border border-zinc-700">
          <MonacoEditor
            language={selectedLanguage}
            theme="my-dark-theme"
            editorWillMount={editorWillMount}
            onMount={handleEditorDidMount}
            value={code}
            onChange={(value) => setCode(value)}
            options={{ automaticLayout: true }}
            height="65vh"
          />
        </div>
        <div className="flex gap-4">
          <button
            onClick={fetchExplanation}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow transition"
            disabled={loadingExplanation}
          >
            {loadingExplanation ? 'Explaining...' : 'Explain Code'}
          </button>
          <button
            onClick={fetchComplexity}
            className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded shadow transition"
            disabled={loadingComplexity}
          >
            {loadingComplexity ? 'Analyzing...' : 'Check Complexity'}
          </button>
        </div>
      </div>

      {/* Output Section */}
      <div className="w-full md:w-1/3 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
        <OutputPanel
          title="💻 Output"
          icon="📤"
          content={output}
          loading={false}
          color="green"
        />
        <OutputPanel
          title="🔍 Code Explanation"
          icon="📖"
          content={explanation}
          loading={loadingExplanation}
          color="blue"
        />
        <OutputPanel
          title="🧠 Time & Space Complexity"
          icon="⚙️"
          content={complexity}
          loading={loadingComplexity}
          color="purple"
        />
      </div>
    </div>
  );
}

export default CodeEditor;
