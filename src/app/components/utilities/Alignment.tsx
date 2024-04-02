import React from 'react';

const AlignmentUtility: React.FC = () => {
  return (
    <>
    <div className="relative h-20 bg-slate-600 text-white text-lg rounded-full"> {/* This is the container */}
      <div className="absolute inset-0 flex items-center justify-center">
        This content will be positioned in the absolute center of its container using flex
      </div>
    </div>

    <div className='h-20 bg-slate-600 text-white text-lg rounded-full'>
    <div className="grid place-items-center h-32">
      This content is centered using Grid
    </div>
    </div>
    </>
  );
};

export default AlignmentUtility;
