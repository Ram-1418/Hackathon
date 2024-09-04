import React from "react";
import { Link, NavLink } from "react-router-dom";
function NavItems({isSidenav}) {
  return (
      <div className={`flex justify-center gap-3 ${isSidenav? 'flex-col p-3':'flex-row'}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 rounded-md font-medium
              ${
                isActive
                  ? "text-blue-500"
                  : "text-gray-800 hover:bg-blue-100 hover:text-blue-500"
              }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 rounded-md font-medium 
              ${
                isActive
                  ? "text-blue-500"
                  : "text-gray-800 hover:bg-blue-100 hover:text-blue-500"
              }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 rounded-md font-medium 
     ${
       isActive
         ? "text-blue-500"
         : "text-gray-800 hover:bg-blue-100 hover:text-blue-500"
     }`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 rounded-md font-medium 
            ${
              isActive
                ? "text-blue-500"
                : "text-gray-800 hover:bg-blue-100 hover:text-blue-500"
            }`
          }
        >
          About
        </NavLink>
        <Link to="/login">
          <button className={`block py-2 pr-4 pl-3 duration-200 rounded-md font-medium bg-blue-500 text-white ${isSidenav?"absolute bottom-4 max-w-[90%] w-full":"relative"}`}>
            Login
          </button>
        </Link>
      </div>
  );
}

export default NavItems;
