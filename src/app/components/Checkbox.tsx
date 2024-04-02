import React from 'react'

function Checkbox() {
  return (
    <div className='bg-white '>
        <div className="form-element">
  <div className="form-element__control">
    <div className="flex items-center text-black">
      <input
        type="checkbox"
        name="options"
        id="checkbox-unique-id-81"
        value="checkbox-unique-id-81"
        checked
        className="checked:bg-blue-600 h-6 w-6 ml-6 p-2 text-black border-gray-300 rounded focus:ring-blue-500"
      />
      <label
        htmlFor="checkbox-unique-id-81"
        className="ml-2 block text-2xl text-black"
      >
        Checkbox Label
      </label>
    </div>
  </div>
</div>

    </div>
  )
}

export default Checkbox