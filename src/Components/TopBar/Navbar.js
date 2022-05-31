import React from 'react'
import Logo from './Logo'
import MagnifyingGlass from './MagnifyingGlass'
import NavItem from './NavItem'

function Navbar() {
  return (
    <div className='w-full h-20 flex shadow-lg justify-between px-10 sticky'>
        <div className='w-1/2 h-full flex justify-around'>
            <Logo/>
            <NavItem Title={"Chi siamo"}/>
            <NavItem Title={"News"}/>
            <NavItem Title={"Rubriche"}/>
            <NavItem Title={"Contattaci"}/>
        </div>
        <div className='w-1/4 h-1/2 hidden md:flex items-center my-auto justify-end rounded-xl border border-blue-300'>
            <input type={"text"} placeholder="Cerca qui" className='w-full h-full px-4 outline-none bg-transparent'/>
            <button className='h-full p-2 mx-0 flex justify-end items-center border-l border-gray-300 group hover:bg-blue-600 transition-all duration-300 rounded-r-lg'>
                <MagnifyingGlass/>
            </button>
        </div>
    </div>
  )
}

export default Navbar