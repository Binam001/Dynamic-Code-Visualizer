import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { executeCode } from '../api';

function ToolBar({ code, selectedLanguage, setSelectedLanguage, setOutput, setLoading, highlightError }) {
  const runCode = async () => {
    if (!code) {
      console.warn('No source code to execute.');
      return;
    }
    setLoading(true);
    try {
    const result = await executeCode(selectedLanguage, code);
    console.log('Execution result:', result);

 if (result && result.run && typeof result.run.stderr === 'string' && result.run.stderr) {
  // Try to extract the line number
  const match = result.run.stderr.match(/file0\.code:(\d+)/);
  let lineInfo = '';
  if (match) {
    const line = parseInt(match[1], 10);
    lineInfo = ` (Line ${line})`;
    highlightError(line, 1, "Syntax error");
  }

  // Extract main error message
  const lines = result.run.stderr.split('\n');
  const mainErrorLine = lines.find(line => /Error|Exception/i.test(line)) || lines[0];

  // Show both error and line number in Output
  setOutput(`${mainErrorLine}${lineInfo}`);
} else {
  const output = result?.run?.stdout || 'No output available.';
  setOutput(output);
}
  } catch (error) {
  console.error('Error executing code:', error);
  setOutput(error?.message || String(error) || 'Error executing code.');
} finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="h-10 bg-[var(--dark-bg-color)] flex items-center px-3 gap-3">
      <Link
        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
        to="/"
      >
        Home
      </Link>

      <LanguageSelector
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      <button
        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
      >
        Save
      </button>
      <button
        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
        onClick={runCode} // Call runCode when clicked
      >
        Run
      </button>
    </div>
  );
}

export default ToolBar;