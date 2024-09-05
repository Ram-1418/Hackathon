import React from "react";

function Loader({children}) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-950/80 fixed top-0 left-0 z-50">
    <div className="bg-white p-4 rounded-xl max-w-[200px] flex items-center justify-center">
    <svg
      className="animate-spin h-5 w-5 text-blue-500 mr-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
    <span className="text-l">{children}</span>
    </div>
    </div>
  );
}

export default Loader;
