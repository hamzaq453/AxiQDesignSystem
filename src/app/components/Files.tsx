import React from 'react'
import { FiFile } from 'react-icons/fi'

function Files() {
  return (
    <div className="w-80 bg-white rounded-lg overflow-hidden shadow-md">
    <div className="flex flex-col items-center p-4">
      <div className="w-full flex flex-col items-center space-y-4">
        {/* React file icon */}
        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
          <FiFile className="w-8 h-8" aria-hidden="true" />
        </div>
        <figcaption className="text-center">
          <div className="flex items-center space-x-2">
            {/* Smaller React file icon */}
            <FiFile className="w-4 h-4 text-gray-600" aria-hidden="true" />
            <span className="text-sm font-medium text-gray-900 truncate">Image Title</span>
          </div>
        </figcaption>
      </div>
    </div>
  </div>
  )
}

export default Files