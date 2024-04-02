import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

function Card() {
  return (
    <div>
        <article className="bg-white text-black shadow-md p-2 mb-2 border border-gray-600 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <FaUserCircle className="text-blue-500 text-4xl" aria-hidden="true" title="Account" />
          <h2 className="flex-grow text-2xl font-bold truncate">
            <a href="#" className="hover:text-blue-500" title="Accounts">Accounts</a>
          </h2>
        </div>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded text-sm">
          New
        </button>
      </div>
      <div className="p-4 text-lg font-medium">
        Anything can go into the card body
      </div>
      <footer className="p-4 border-t border-gray-900 text-center ">
        <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold text-lg">View All<span className="sr-only"> Accounts</span></a>
      </footer>
    </article>
    </div>
  )
}

export default Card