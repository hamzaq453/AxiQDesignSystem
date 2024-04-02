import React from 'react';

const SizingUtility = () => {
  return (
    <div className="grid gap-4 bg-slate-600 text-white">
      {/* 1/2 width */}
      <div className="w-1/2">
        <div className="border p-2 text-center mx-2">.w-1/2</div>
      </div>
      <div className="w-1/2">
        <div className="border p-2 text-center mx-2">.w-1/2</div>
      </div>
      
      {/* Full width */}
      <div className="w-full">
        <div className="border p-2 text-center mx-2">.w-full</div>
      </div>
    </div>
  );
};

export default SizingUtility;
