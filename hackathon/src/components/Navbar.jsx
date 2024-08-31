import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [scrollTop, setScrollTop] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollTop(window.scrollY);
  });
  const navStyle = {
    backgroundColor: scrollTop > 0 ? "white" : "white",
    transition: "background-color 0.3s ease",
    color: scrollTop > 0 ? "black" : "black",
    boxShadow: scrollTop > 0 ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
  };
  const textColor = scrollTop > 0 ? "text-gray-800" : "text-gray-800";
  return (
    <nav className="text-black p-4 h-30 fixed w-full z-10" style={navStyle}>
      <div className="container mx-auto  m-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <h1> HealthFirst </h1>
        </Link>
        <div className="flex justify-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 rounded-md font-medium
     ${
       isActive
         ? "text-blue-500"
         : `${textColor} hover:bg-blue-100 hover:text-blue-500`
     }
    `
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
         : `${textColor} hover:bg-blue-100 hover:text-blue-500`
     }
    `
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
         : `${textColor} hover:bg-blue-100 hover:text-blue-500`
     }
    `
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
         : `${textColor} hover:bg-blue-100 hover:text-blue-500`
     }
    `
            }
          >
            About
          </NavLink>
          <button className="`block py-2 pr-4 pl-3 duration-200 rounded-md font-medium bg-blue-500 text-white">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
