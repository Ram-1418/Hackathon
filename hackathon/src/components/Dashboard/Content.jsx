import React, { useState } from "react";
import Profile from "./Profile";
import Reports from "./Reports/Reports";
import MentalHealthAssessmentForm from "./MentalHealthAssessment";
import SubmittedReports from "./Reports/SubmittedReports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Content({ userData, activeTab, isDoctor, setSidebarState, sidebarState }) {
  const [currentComponent, setCurrentComponent] = useState(null);

  React.useEffect(() => {
    if (activeTab === "Profile") {
      setCurrentComponent(<Profile userData={userData} isDoctor={isDoctor} />);
    } else if (activeTab === "Reports") {
      setCurrentComponent(<Reports />);
    } else if (activeTab === "Mental Health Assessment") {
      setCurrentComponent(
        <MentalHealthAssessmentForm disableFields={false} reportData={false} />
      );
    } else {
      setCurrentComponent(
        <SubmittedReports
          isDoctor={isDoctor}
          currentUserId={userData?.uid}
          setCurrentComponent={setCurrentComponent}
        />
      );
    }
  }, [activeTab, userData, isDoctor]);
const icon = sidebarState?faClose:faBars;
  return (
    <div className="flex-1 p-8 pt-12 h-screen overflow-y-auto">
      <FontAwesomeIcon
       id="menu-icon"
        className="text-2xl cursor-pointer fixed top-4 left-4"
        icon={icon}
        onClick={() => setSidebarState(!sidebarState)}
      />
      {currentComponent}
    </div>
  );
}

export default Content;
