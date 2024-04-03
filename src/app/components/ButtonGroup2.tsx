import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi'; // This is for the dropdown icon

const ButtonGroup2 = () => {
  return (
    <div className="flex" role="group">
      <button className="px-4 py-2 text-blue-700 bg-white border border-r-0 border-gray-400 rounded-l-lg hover:bg-gray-300 focus:outline-none">
        Refresh
      </button>
      <button className="px-4 py-2 text-blue-700 bg-white border border-r-0 border-gray-400 hover:bg-gray-300 focus:outline-none">
        Edit
      </button>
      <button className="px-4 py-2 text-blue-700 bg-white border border-gray-400 hover:bg-gray-300 focus:outline-none">
        Save
      </button>
      <div className="relative">
        <button className="px-2 py-2 text-gray-700 bg-white border border-gray-400 rounded-r-lg hover:bg-gray-300 focus:outline-none" aria-haspopup="true" aria-expanded="false" title="Show More">
          <HiOutlineChevronDown className="w-5 h-6" aria-hidden="true" />
          <span className="sr-only">Show More</span>
        </button>
        {/* Assuming you have a dropdown menu component */}
        {/* <DropdownMenu /> */}
      </div>
    </div>
  );
};

export default ButtonGroup2;
