import React from 'react'

function Logo() {
  return (
    <button className='h-full text-lg text-gray-500 align-middle justify-center px-4 delay-100 overflow-hidden'>
        <img src={process.env.PUBLIC_URL + "/IMGs/"+ "Logo.PNG" } className="max-h-full"></img>
    </button>
  )
}

export default Logo