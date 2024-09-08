import React from "react";

function Sidebar({ activeTab, setActiveTab, isDoctor, sidebarState, screenWidth}) {
  console.log(screenWidth);
  const tabs = [
    [
      "Profile",
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>,
    ],

    [
      "Mental Health Assessment",
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2a10 10 0 00-10 10c0 4.97 3.5 9 8 9.74V22a2 2 0 004 0v-.26c4.5-.74 8-4.77 8-9.74A10 10 0 0012 2zm0 16c-3.39 0-6-2.69-6-6 0-1.72 1.38-4.02 4-4.78V6a2 2 0 014 0v1.22c2.62.76 4 3.06 4 4.78 0 3.31-2.61 6-6 6z"
        />
      </svg>,
    ],
    [
      "Submitted Reports",
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>,
    ],
  ];
  const condition = sidebarState || screenWidth>580;
  console.log(condition)
  return (
    <div id="sidebar"
      className="bg-white w-[250px] shadow-md h-screen"
      style={{
        marginLeft:`${condition?"0":"-250px"}`
      }}
    >
      <h2 className="text-2xl font-bold text-center py-4">Health First</h2>
      <div className="p-6">
        {tabs.map(([tabName, svgIcon], idx) => {
          if (isDoctor && tabName === "Mental Health Assessment") return null;
          return (
            <div key={idx + tabName}
              className={`flex items-center p-2 rounded-lg cursor-pointer mb-4 ${
                activeTab === tabName
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tabName)}
            >
              {svgIcon}
              <span>{tabName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
