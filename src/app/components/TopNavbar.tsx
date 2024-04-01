'use client'
import { useState } from 'react';
import { MenuIcon, ChevronDownIcon } from '@heroicons/react/outline';

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0">
        <div className="relative flex items-center gap-x-20 justify-start h-14">
          {/* App name and menu icon */}
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0">
              <MenuIcon className="block lg:hidden h-8 w-8 text-blue-600" />
            </div>
            <div className="hidden lg:block">
              <span className="font-semibold text-xl tracking-tight -ml-10  text-gray-800">Salesforce</span>
            </div>
          </div>

          {/* Navigation items */}
          <div className="hidden lg:block lg:ml-6">
            <div className="flex space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium text-blue-600 border-b-2 border-blue-600" aria-current="page">Home</a>
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900" onClick={toggleDropdown}>
                Products
                <ChevronDownIcon className="w-4 h-4 inline-block" />
              </a>
              {/* Dropdown menu, show/hide based on dropdown state. */}
              {isDropdownOpen && (
                <div className="absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Menu Item One</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Menu Item Two</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Menu Item Three</a>
                </div>
              )}
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900">Accounts</a>
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900">Opportunities</a>
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900">Contacts</a>
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900">Quotes</a>


            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-10">
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TopNavbar;
