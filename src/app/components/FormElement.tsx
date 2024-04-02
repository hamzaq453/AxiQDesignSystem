import React from 'react'

function FormElement() {
  return (
<div>  
 <div className="mt-5 md:mt-0 md:col-span-2">
    <form action="#" method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
             <label htmlFor="form-element-01" className="block text-2xl font-semibold text-black">
              Form Label
             </label>
            <div className="mt-1 border border-black flex rounded-md shadow-sm">
              <input
                type="text"
                name="form-element-01"
                id="form-element-01"
                className="focus:ring-indigo-500 p-2 text-black lg:text-2xl focus:border-indigo-500 flex-1 block w-full rounded sm:text-lg border-gray-300"
                placeholder="Placeholder text…"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

    </div>
  )
}

export default FormElement
