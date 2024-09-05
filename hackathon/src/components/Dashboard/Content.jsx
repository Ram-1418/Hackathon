import React from "react";
import Profile from "./Profile";
import Reports from "./Reports/Reports";
import MentalHealthAssessmentForm from "./MentalHealthAssessment";
import SubmittedReports from "./Reports/SubmittedReports";

function Content({ responses, userData, activeTab, isDoctor }) {
  console.log(responses, userData);
  let currentComponent;
  if (activeTab === "Profile") {
    currentComponent = <Profile userData={userData} />;
  } else if (activeTab === "Reports") {
    currentComponent = <Reports/>;
  }else if(activeTab==="Mental Health Assessment"){
    currentComponent = <MentalHealthAssessmentForm/>
  } else {
    currentComponent = <SubmittedReports isDoctor={isDoctor} currentUserId={userData?.uid}/>;
  }
  return <div className="flex-1 p-8 h-screen overflow-y-auto">{currentComponent}</div>;
}

export default Content;
