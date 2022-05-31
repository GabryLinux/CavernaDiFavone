import React from 'react'

function NavItem({Title}) {
  return (
    <button className='h-full hover:border-b-4 border-blue-900  text-lg text-gray-500 transition-all duration-75 align-middle justify-center px-4 delay-100 '>
        {Title}
    </button>
  )
}

export default NavItem