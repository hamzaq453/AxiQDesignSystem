import React from 'react';

const Padding = () => {
  return (
    <div className="flex flex-wrap gap-4 items-start bg-white">
      {/* Padding Top XX-Large */}
      <div className="pt-20 bg-blue-400 w-10 h-10 border-dashed border-2 border-gray-300"></div>

      {/* Padding bottom  */}
      <div className="pb-32 bg-green-400 w-10 h-10 border-dashed border-2 border-gray-300"></div>

      {/* Padding left */}
      <div className="pl-20 bg-yellow-400 w-10 h-10 border-dashed border-2 border-gray-300"></div>

      {/* Padding Right */}
      <div className="pr-32 bg-purple-400 w-10 h-10 border-dashed border-2 border-gray-300"></div>

      {/* Padding Around*/}
      <div className="p-32 bg-red-400 w-10 h-10 border-dashed border-2 border-gray-300"></div>

      {/* Padding Horizontal Large */}
      <div className="px-32 bg-indigo-400 w-10 h-10 border-dashed border-2 border-gray-300"></div>

      {/* Padding Vertical medium */}
      <div className="py-20 bg-pink-400 w-10 h-10 border-dashed border-2 border-gray-300"></div>

      {/* Padding Around large */}
      <div className="p-40 bg-orange-400 w-10 h-10 border-dashed border-2 border-gray-300"></div>

      {/* Padding Around X-small */}
      <div className="p-10 bg-teal-400 w-10 h-10 border-dashed border-2 border-gray-300"></div>
    </div>
  );
};

export default Padding;
