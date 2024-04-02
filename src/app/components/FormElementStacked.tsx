import React from 'react';
import { MdInfo, MdEdit } from 'react-icons/md'; // Import the necessary icons from react-icons

const FormElement = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-8  text-black  bg-white">
    <div className="grid grid-cols-1 py-4 divide-y divide-gray-400" role="listitem">
      <div className="flex flex-col">
          <span className="font-semibold text-lg">Assigned To</span>
          <div className="flex items-center space-x-1">
            <img className="w-6 h-6 rounded-full" src="/path/to/avatar.jpg" alt="Jack Rogers" title="Jack Rogers" />
            <a href="#" className="text-blue-600">Jack Rogers</a>
            <button title="Edit: Assigned To" className="text-gray-400 hover:text-gray-700">
              <MdEdit />
            </button>
          </div>
        </div>

        <div>
          <span className="font-semibold text-lg">Team Name</span>
          <div className="flex items-center space-x-1">
            <a href="#" className="text-blue-600">Salesforce Lightning Design System</a>
            <button title="Edit: Team Name" className="text-gray-500 hover:text-gray-700">
              <MdEdit />
            </button>
          </div>
        </div>

        <div>
          <span className="font-semibold text-lg">Team Name</span>
          <div className="flex items-center space-x-1">
            <a href="#" className="text-blue-600">Salesforce Lightning Design System</a>
            <button title="Edit: Team Name" className="text-gray-500 hover:text-gray-700">
              <MdEdit />
            </button>
          </div>
        </div>



        <div>
          <span className=" font-semibold text-lg">Team Name</span>
          <div className="flex items-center space-x-1">
            <a href="#" className="text-blue-600">Salesforce Lightning Design System</a>
            <button title="Edit: Team Name" className="text-gray-500 hover:text-gray-700">
              <MdEdit />
            </button>
          </div>
        </div>
      </div>

      {/* Security Assessment Required? & Status */}
      {/* Repeat the pattern for other rows, using icons and structure as necessary */}
      {/* ... */}

      {/* Billing Address & Shipping Address */}
      <div className="grid grid-cols-1 py-4 divide-y divide-gray-400" role="listitem">
      
      {/* Selected Languages */}
      <div className="py-4" role="listitem">
        <div className="font-semibold text-lg">Selected Languages</div>
        <div className="flex items-center space-x-1">
          <div className="whitespace-pre-line">Engish, Arabic and German.</div>
          <button title="Edit: Description" className="text-gray-500 hover:text-gray-700">
            <MdEdit />
          </button>
        </div>
      </div>

      {/* Location */}
      <div className="py-4" role="listitem">
        <div className="font-semibold text-lg">Location</div>
        <div className="flex items-center space-x-1">
          <div className="whitespace-pre-line">10,123.090</div>
          <button title="Edit: Description" className="text-gray-500 hover:text-gray-700">
            <MdEdit />
          </button>
        </div>
      </div>

      {/* Description */}
      
      <div className="py-4" role="listitem">
        <div className="font-semibold text-lg">Description</div>
        <div className="flex items-center space-x-1">
          <div className="whitespace-pre-line">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</div>
          <button title="Edit: Description" className="text-gray-500 hover:text-gray-700">
            <MdEdit />
          </button>
        </div>
      </div>

      {/* Status */}
      <div className="py-4" role="listitem">
        <div className="font-semibold text-lg">Status</div>
        <div className="flex items-center space-x-1">
          <div className="whitespace-pre-line">Confirmed</div>
          <button title="Edit: Description" className="text-gray-500 hover:text-gray-700">
            <MdEdit />
          </button>
        </div>
      </div>
      </div>

    </div>
  );
};

export default FormElement;
