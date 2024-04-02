import React from 'react'

function RadioGroup() {
  return (
    <div className='bg-white text-black'>
        <fieldset className="p-4">
  <legend className="text-2xl  font-semibold mb-2">
    <abbr className="text-red-500 text-2xl" title="required">*</abbr> Radio Group Label
  </legend>
  <div className="space-y-2">
    <label htmlFor="radio-65" className="flex items-center space-x-2">
      <input
        type="radio"
        id="radio-65"
        value="radio-65"
        name="required"
        checked
        className="text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <span className="text-black text-lg font-medium">Radio Label One</span>
    </label>
    <label htmlFor="radio-66" className="flex items-center space-x-2">
      <input
        type="radio"
        id="radio-66"
        value="radio-66"
        name="required"
        className="text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <span className="text-black text-lg font-medium">Radio Label Two</span>
    </label>
  </div>
</fieldset>

    </div>
  )
}

export default RadioGroup