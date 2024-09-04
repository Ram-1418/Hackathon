import React from "react";
function Sidenav({children, sidenavState}) {
  return (
    <div className="h-screen w-full max-w-[250px] bg-white fixed z-50 top-0 left-0" style={{marginLeft:`-${sidenavState}px`}}>
      {children}
    </div>
  );
}

export default Sidenav;
