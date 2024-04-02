'use client'
import React, { useState, useRef } from 'react';
import { HiSelector } from 'react-icons/hi'; // This icon can be used for the dropdown arrow

const ComboBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const options = ["Accounts", "Reports", "Contacts", "Files", "Groups", "Leads", "Notes"];

  return (
    <div className="relative inline-block bg-white text-black text-2xl w-84 p-1">
      <label htmlFor="combobox-id-58" className="block text-lg font-medium text-gray-700">
        
      </label>
      <div className="mt-1">
        <button
          ref={buttonRef}
          type="button"
          className="w-full border border-gray-300 bg-white rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="combobox-label-id-130 combobox-id-58-selected-value"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block truncate font-bold">Select an Option…</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <HiSelector className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </button>

        {/* Conditionally render the dropdown */}
        {isOpen && (
          <ul className="absolute z-10 mt-1 font-semibold bg-white shadow-lg max-h-84 w-full rounded-md text-lg ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <li
                key={index}
                className="text-gray-900 text-lg cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                role="option"
                // Implement the logic to handle option click here
                onClick={() => {
                  // Placeholder for click handling logic
                  setIsOpen(false); // Close the dropdown
                  // Update the button text or form value
                }}
              >
                <span className="font-normal block truncate">{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ComboBox;
