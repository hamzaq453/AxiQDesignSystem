import React from 'react'

function Buttons() {
  return (
    <div>
        <div className="space-x-2 ml-10">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Blue
  </button>
  <button className="bg-green-500 w-[10%] hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
    Green
  </button>
  <button className="bg-white hover:bg-red-700 text-black border rounded-full w-[12%] font-bold py-2 px-4 ">
    Red
  </button>
  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
    Yellow
  </button>
  <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
    Purple
  </button>
</div>

    </div>
  )
}

export default Buttons