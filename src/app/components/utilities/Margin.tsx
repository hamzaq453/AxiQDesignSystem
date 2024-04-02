import React from 'react';

const Margin = () => {
  return (
    <div className="space-y-10 p-5 bg-slate-700 divide-y divide-gray-800">
      {/* Margin Top None */}
      <div className="mt-0  bg-red-500 w-20 h-20"></div>

      {/* Margin Top Small */}
      <div className="mt-2 bg-green-500 w-20 h-20"></div>

      {/* Margin Top XX-Large */}
      <div className="mt-20 bg-blue-500 w-20 h-20"></div>

      {/* Margin Left XX-Large */}
      <div className="ml-20 bg-yellow-500 w-20 h-20"></div>

      {/* Margin Bottom X-Large */}
      <div className="mb-16 bg-purple-500 w-20 h-20"></div>

      {/* Margin Right XX-Large */}
      <div className="mr-20 bg-pink-500 w-20 h-20"></div>

      {/* Margin Horizontal XX-Large */}
      <div className="mx-20 bg-indigo-500 w-20 h-20"></div>

      {/* Margin Vertical XX-Large */}
      <div className="my-20 bg-orange-500 w-20 h-20"></div>

      {/* Margin Around X-Small */}
      <div className="m-1 bg-teal-500 w-20 h-20"></div>

      {/* Margin Around XX-Large */}
      <div className="m-20 bg-gray-500 w-20 h-20"></div>
    </div>
  );
};

export default Margin;
