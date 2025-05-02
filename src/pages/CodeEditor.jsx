import React, { useRef, useState } from 'react'
import MonacoEditor from 'react-monaco-editor'

function CodeEditor() {
  // Called before the editor is mounted
  const editorWillMount = (monaco) => {
    monaco.editor.defineTheme('my-dark-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'keyword', foreground: '569CD6' },
        { token: 'number', foreground: 'B5CEA8' },
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

  const [code, setCode] = useState('')
  const editorRef = useRef()

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  return (
    <div className="">
      <div className='h-10 bg-[var(--dark-bg-color)] flex items-center px-3'>tool bar</div>
      <div className="flex gap-1 mt-1 h-[calc(100vh-(40px+4px))]">
        <div className="w-[70%] pt-2 rounded-md bg-[var(--dark-bg-color)]">
        <MonacoEditor
          // width="800"
          // height="600"
          language="javascript"
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