import React from 'react'
import { MdSettings, MdSearch, MdThumbUp, MdCheckCircle, MdError, MdInfo, MdWarning } from 'react-icons/md';

function ButtonIcons() {
  return (
    <div>
        <div className="flex space-x-2">
      {/* Settings Button */}
      <button
        className="p-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
        title="Settings"
      >
        <MdSettings aria-hidden="true" className='h-10 w-10' />
        <span className="sr-only">Settings</span>
      </button>

      {/* Search Button */}
      <button
        className="p-2 text-blue-500 bg-blue-100 rounded hover:bg-blue-200 focus:outline-none"
        title="Search"
      >
        <MdSearch aria-hidden="true" className='h-10 w-10'/>
        <span className="sr-only">Search</span>
      </button>

      {/* Like Button */}
      <button
        className="p-2 text-green-500 bg-green-100 border border-green-500 rounded hover:bg-green-200 focus:outline-none"
        aria-pressed="true"
        title="Like"
      >
        <MdThumbUp aria-hidden="true" className='h-10 w-10' />
        <span className="sr-only">Like</span>
      </button>
       {/* Error Button */}
       <button
        className="p-2 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none"
        title="Error"
      >
        <MdError aria-hidden="true" className='h-10 w-10'/>
        <span className="sr-only">Error</span>
      </button>

      {/* Success Button */}
      <button
        className="p-2 text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none"
        title="Success"
      >
        <MdCheckCircle aria-hidden="true" className='h-10 w-10'/>
        <span className="sr-only">Success</span>
      </button>

      {/* Info Button */}
      <button
        className="p-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
        title="Info"
      >
        <MdInfo aria-hidden="true" className='h-10 w-10'/>
        <span className="sr-only">Info</span>
      </button>

      {/* Warning Button */}
      <button
        className="p-2 text-black bg-white rounded hover:bg-yellow-600 focus:outline-none"
        title="Warning"
      >
        <MdWarning aria-hidden="true" className='h-10 w-10'/>
        <span className="sr-only">Warning</span>
      </button>
    </div>
    </div>
  )
}

export default ButtonIcons