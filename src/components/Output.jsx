import React from 'react';

function Output({ output }) {
  return (
    <div className="h-full">
      <div className="font-bold text-white mb-2">Output</div>
      <div className="bg-[#1e1e2f] text-white p-2 rounded-md overflow-auto">
        {output || "Click 'Run' to see the output here"}
      </div>
    </div>
  );
}

export default Output;