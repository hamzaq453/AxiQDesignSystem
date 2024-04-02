'use client'
import React from 'react';
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';

const Toast: React.FC = () => {
  const handleClose = () => {
    console.log("Toast closed");
    // Handle the close button click event here
  };

  return (
    <div className="fixed top-5 left-[30%]  w-[40%] h-[10%] bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <AiOutlineCheckCircle className="h-6 w-6 text-green-500" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-lg font-medium">
            Account <a href="#" className="font-bold underline hover:no-underline">ACME - 100</a> widgets was created.
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={handleClose}
              className="inline-flex bg-green-100 rounded-md p-1.5 text-green-500 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Close"
            >
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
