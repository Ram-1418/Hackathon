import React, { useState } from "react";
import Profile from "./Profile";
import Reports from "./Reports/Reports";
import MentalHealthAssessmentForm from "./MentalHealthAssessment";
import SubmittedReports from "./Reports/SubmittedReports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Content({ responses, userData, activeTab, isDoctor,  setIsCollapsedSiderBar}) {
  const [currentComponent, setCurrentComponent] = useState(null);

  React.useEffect(() => {
    if (activeTab === "Profile") {
      setCurrentComponent(<Profile userData={userData} />);
    } else if (activeTab === "Reports") {
      setCurrentComponent(<Reports />);
    } else if (activeTab === "Mental Health Assessment") {
      setCurrentComponent(<MentalHealthAssessmentForm disableFields={false} reportData={false}/>);
    } else {
      setCurrentComponent(
        <SubmittedReports isDoctor={isDoctor} currentUserId={userData?.uid} setCurrentComponent={setCurrentComponent} />
      );
    }
  }, [activeTab, userData, isDoctor]);

  return (
    <div className="flex-1 p-8 pt-12 h-screen overflow-y-auto">
      {currentComponent}
    </div>
  );
}

export default Content;
