import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { executeCode } from '../api';

function ToolBar({ code, selectedLanguage, setSelectedLanguage, setOutput, setLoading }) {
  const runCode = async () => {
    if (!code) {
      console.warn('No source code to execute.');
      return;
    }
    setLoading(true);
    try {
      const result = await executeCode(selectedLanguage, code);
      console.log('Execution result:', result);

      // Extract the output from the API response
      const output = result.run?.stdout || 'No output available.';
      setOutput(output); // Update the output state
    } catch (error) {
      console.error('Error executing code:', error);
      setOutput('Error executing code.'); // Display error message in the output
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