import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="bg-white text-gray-800 p-4 shadow-md h-30">
    <div className="container mx-auto  m-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-800">
       <h1> HealthFirst </h1>
      </Link>
    <div className='flex justify-center gap-3'>

    <NavLink
  to="/"
  className={({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 rounded-md font-medium 
     ${isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-100 hover:text-blue-500'}
    `
  } 
>
  Home
</NavLink>

    <NavLink
  to="/contact"
  className={({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 rounded-md font-medium 
     ${isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-100 hover:text-blue-500'}
    `
  } 
>
  Contact
</NavLink>

    </div>
    </div>
  </nav>

  )
}

export default Navbar