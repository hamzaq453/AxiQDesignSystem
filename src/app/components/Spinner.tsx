import React from 'react'

function Spinner() {
  return (
    <div >
        <div className="flex items-center  justify-center" style={{ height: '6rem' }}>
            <div className="w-10 h-10 border-8 border-blue-900 border-dotted rounded-full animate-spin"></div>
        </div>
    </div>
    
  )
}

export default Spinner