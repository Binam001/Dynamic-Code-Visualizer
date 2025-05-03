import React from 'react';
import { LANGUAGE_VERSIONS } from '../constraints'; // Import the LANGUAGE_VERSIONS object

function LanguageSelector({ selectedLanguage, setSelectedLanguage }) {
  const onSelectLanguage = (event) => {
    setSelectedLanguage(event.target.value);
    console.log('Selected Language:', event.target.value); // Log the selected language
  };

  return (
    <div className="relative">
      <select
        value={selectedLanguage}
        onChange={onSelectLanguage}
        className="bg-[var(--dark-bg-color)] text-white border border-gray-500 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-500"
      >
        {Object.entries(LANGUAGE_VERSIONS).map(([language, version]) => (
          <option key={language} value={language}>
            {language.charAt(0).toUpperCase() + language.slice(1)} (v{version})
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;