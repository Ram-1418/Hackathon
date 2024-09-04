import React from "react";
function Sidenav({ children, sidenavState, setSidenavState }) {
  const overlay = (
    <div
      className="fixed w-screen h-screen bg-slate-950/60 top-0 left-0 z-20 duration-300"
      onClick={() => setSidenavState("-250")}
    ></div>
  );
  return (
    <>
      {sidenavState == 0 ? overlay : ""}
      <div
        id="sidenav"
        className="h-screen w-full max-w-[250px] bg-white fixed top-0 left-0 duration-300 ease z-30"
        style={{ marginLeft: `${sidenavState}px` }}
      >
        {children}
      </div>
    </>
  );
}

export default Sidenav;
