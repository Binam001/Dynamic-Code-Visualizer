import React from 'react';

function Output({ output, loading }) {
  return (
    <div className="h-full">
      <div className="font-bold text-white mb-2 flex items-center gap-2">
        Output
        {loading && (
          <span className="animate-spin inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full"></span>
        )}
      </div>
      <div className="bg-[#1e1e2f] text-white p-2 rounded-md overflow-auto">
        {output || "Click 'Run' to see the output here"}
      </div>
    </div>
  );
}

export default Output;