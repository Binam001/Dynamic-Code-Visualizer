import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'

function ToolBar({ selectedLanguage, setSelectedLanguage }) {
  // const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  return (
    <div className='h-10 bg-[var(--dark-bg-color)] flex items-center px-3 gap-3'>
      <Link
        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
        to="/"
      >
        Home
      </Link>

      <LanguageSelector selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />

      <button
        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
        to="/"
      >
        Save
      </button>
    </div>
  )
}

export default ToolBar