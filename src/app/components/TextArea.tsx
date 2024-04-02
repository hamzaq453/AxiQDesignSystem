import React from 'react'

function TextArea() {
  return (
    <div>
         <div className="flex flex-col space-y-1">
      <label htmlFor="textarea-id-01" className="block text-sm font-medium text-gray-700">
        Textarea Label
      </label>
      <textarea
        id="textarea-id-01"
        placeholder="Placeholder text…"
        className="mt-1 block w-full p-2.5 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    </div>
  )
}

export default TextArea