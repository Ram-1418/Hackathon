import React from 'react'

function Navbar() {
  return (
    <nav className="bg-indigo-500 text-gray-100 p-4 shadow-md h-30">
    <div className="container mx-auto  m-auto flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-gray-800">
        HealthFirst 
      </a>
      <ul className="flex space font-bold  text-gray-800  space-x-4 font-
-x-4">
        <li>
          <a href="/" className="hover:text-white-500">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-white-500">About</a>
        </li>
        <li>
          <a href="/services" className="hover:text-white-500">Services</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-white-500">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  )
}

export default Navbar