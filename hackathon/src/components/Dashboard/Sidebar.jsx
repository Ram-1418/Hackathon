import { faBrain, faFileLines, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Sidebar({ activeTab, setActiveTab, isDoctor, sidebarState, screenWidth}) {
  console.log(screenWidth);
  const tabs = [
    [
      "Profile", faUser
    ],

    [
      "Mental Health Assessment", faBrain
    ],
    [
      "Submitted Reports", faFileLines
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
      <h2 className="text-2xl font-bold text-center py-4">HealthFirst</h2>
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
              <FontAwesomeIcon className="text-xl px-3 py-2" icon={svgIcon}/>
              <span>{tabName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
