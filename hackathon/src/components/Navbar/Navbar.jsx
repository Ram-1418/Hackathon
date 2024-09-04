import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import Sidenav from "./Sidenav";
function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollTop, setScrollTop] = useState(0);
  const [sidenavState, setSidenavState] = useState("250")
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
        <span className="text-3xl font-bold px-2" onClick={()=>{setSidenavState(0)}}>=</span>
        <Link to="/" className="text-2xl font-bold">
          <h1> HealthFirst </h1>
        </Link>
        </div>
        {screenWidth > 580 ? (
          <NavItems />
        ) : (
          <Sidenav setSidenavState={sidenavState}>
            <NavItems isSidenav={true} />
          </Sidenav>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
