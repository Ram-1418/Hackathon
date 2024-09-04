import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import Sidenav from "./Sidenav";
function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollTop, setScrollTop] = useState(0);
  const [sidenavState, setSidenavState] = useState("-250");
  window.addEventListener("scroll", () => {
    setScrollTop(window.scrollY);
  });
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
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
        <div className="flex items-center">
          <span id="menu-icon"
            className="text-gray-800 pt-1 px-2"
            onClick={() => {
              setSidenavState(0);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="6" width="16" height="3" fill="currentColor" />
              <rect x="4" y="11" width="16" height="3" fill="currentColor" />
              <rect x="4" y="16" width="16" height="3" fill="currentColor" />
            </svg>
          </span>
          <Link to="/" className="text-2xl font-bold">
            <h1> HealthFirst </h1>
          </Link>
        </div>
        {screenWidth > 580 ? (
          <NavItems />
        ) : (
          <Sidenav sidenavState={sidenavState} setSidenavState={setSidenavState }>
            <NavItems isSidenav={true} />
          </Sidenav>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
