import React from 'react'

function Panels() {
  return (
    <div className='w-full'>
         <div>
<div className="bg-white shadow-md">
    <div className="flex justify-between items-center bg-gray-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
            <span className="text-2xl text-gray-700">
                <svg className="h-8 w-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.5 10c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zM10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm-3.5 8a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-7zM14 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" clipRule="evenodd"/>
                </svg>
            </span>
            <div className="ml-2 text-gray-700">
                <h1 className="text-xl t font-base">Opportunity</h1>
                <span className=" text-2xl font-bold">Acme - 1,200 Widgets</span>
            </div>
        </div>
        <div className="flex ">
  {/* Follow Button */}
  <button className="border rounded border-gray-400 px-4 py-2 rounded-l-md bg-white hover:bg-gray-100">
    <span className="text-blue-500">+ Follow</span>
  </button>

  {/* Edit Button */}
  <button className=" border rounded border-gray-400 px-4 py-2 ml-2 text-blue-500 bg-white hover:bg-gray-100">
    Edit
  </button>

  {/* Delete Button */}
  <button className="border text-blue-500 border-gray-400 px-4 py-2 bg-white hover:bg-gray-100">
    Delete
  </button>

  {/* Clone Button */}
  <button className="border  border-gray-400 px-4 py-2 text-blue-500 rounded-r-md bg-white hover:bg-gray-100">
    Clone
    </button>
    
    <button className="border border-gray-400 text-blue-500 bg-white font-semibold py-2 px-2 rounded flex items-center">
        <span className="mr-2"></span>
        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 12a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.41-1.42L10 10.59l3.29-3.3a1 1 0 1 1 1.41 1.42l-4 4a1 1 0 0 1-.71.3z"/>
        </svg>
    </button>
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 hidden">
        <div className="py-1">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action 1</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action 2</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action 3</a>
        </div>
    </div>


  
</div>

    </div>
    <div className="p-6">
        <div className="flex space-x-4">
            <div className="w-1/4">
                <div className="text-gray-600 font-bold">Field 1</div>
                <div className="text-gray-700">Description that demonstrates truncation with a long text field.</div>
            </div>
            <div className="w-1/4">
                <div className="text-gray-600 font-bold">Field 2 (3)</div>
                <div className="text-gray-700">Multiple Values</div>
            </div>
            <div className="w-1/4">
                <div className="text-gray-600 font-bold">Field 3</div>
                <div className="text-gray-700">
                    <a href="#" className="text-blue-500">Hyperlink</a>
                </div>
            </div>
            <div className="w-1/4">
                <div className="text-gray-600 font-bold">Field 4</div>
                <div className="text-gray-700">Description (2-line truncation—must use JS to truncate).</div>
            </div>
        </div>
    </div>
</div>

    </div>
    </div>
  )
}

export default Panels