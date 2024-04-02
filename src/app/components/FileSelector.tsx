import React from 'react'

function FileSelector() {
  return (
    <div>
        <div className="p-4 bg-white">
  <span className="block text-xl font-medium text-black" id="file-selector-primary-label-101">Attachment</span>
  <div className="mt-1">
    <div className="flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
      <div className="space-y-1 text-center">
        <input
          type="file"
          className="sr-only"
          accept="image/png"
          id="file-upload-input-103"
          aria-labelledby="file-selector-primary-label-101 file-selector-secondary-label102"
        />
        <label htmlFor="file-upload-input-103" className="cursor-pointer">
          <span className="flex justify-center items-center font-medium text-black text-lg">
            {/* You can use an SVG or an icon library like react-icons here */}
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              {/* SVG path for upload icon (placeholder) */}
            </svg>
            Upload Files
          </span>
          <span className="block font-medium text-black text-lg"><span className='flex ml-14'>or</span> Drop Files</span>
        </label>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default FileSelector