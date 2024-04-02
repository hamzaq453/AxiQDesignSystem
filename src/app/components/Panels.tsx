import React from 'react'

function PanelHeader() {
  return (
    <div>
        <div className="flex flex-col max-w-md w-full border ml-4 rounded bg-white shadow-md">
  <div className="px-4 py-2 flex justify-between items-center border-b">
    <h2 className="text-lg font-semibold text-gray-900" title="Panel Header">Panel Header</h2>
    <div className="flex items-center">
      <button className="p-2 rounded hover:bg-gray-200 focus:outline-none" title="Collapse Panel Header">
        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <span className="sr-only">Collapse Panel Header</span>
      </button>
    </div>
  </div>
  <div className="px-4 py-4 text-black mb-10 ">A panel body accepts any layout or component</div>
</div>

    </div>
  )
}

export default PanelHeader