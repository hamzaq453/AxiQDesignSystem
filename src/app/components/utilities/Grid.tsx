import React from 'react';

const Grid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 h-40 m-10 ">
      <div className="border p-4  flex justify-center items-center bg-slate-600">Grid 1</div>
      <div className="border p-4 flex justify-center items-center bg-slate-500">Grid 2</div>
      <div className="border p-4 flex justify-center items-center bg-slate-700">Grid 3</div>
      <div className="border p-4 flex justify-center items-center bg-slate-500">Grid 4</div>
    </div>
  );
};

export default Grid;
