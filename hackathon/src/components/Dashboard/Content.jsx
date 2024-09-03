import React from "react";
import Profile from "./Profile";
import Reports from "./Reports";

function Content({ responses, userData, activeTab }) {
  console.log(responses, userData);
  let currentComponent;
  if (activeTab === "Profile") {
    currentComponent = <Profile userData={userData} />;
  } else if (activeTab === "Reports") {
    currentComponent = <Reports/>;
  } else {
    currentComponent = <div>SubmittedReports</div>;
  }
  return <div className="flex-1 p-8">{currentComponent}</div>;
}

export default Content;
