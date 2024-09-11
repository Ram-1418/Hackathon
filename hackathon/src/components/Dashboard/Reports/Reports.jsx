import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import Profile from "../Profile";

function Reports({ selectedReport, setReportVisible, userInfo }) {
  console.log("infdo", userInfo);
  const timestamps = Object.keys(selectedReport);
  console.log(selectedReport);
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-slate-900/80 z-10 flex flex-col justify-center items-center">
      <div className="max-w-[100vw] w-full h-full bg-gray-100 p-4 rounded-lg shadow-lg overflow-x-auto">
        <div className="flex justify-around items-center fixed top-0 left-0 w-full mx-auto bg-white shadow-md p-2">
          <FontAwesomeIcon
            onClick={() => {
              setReportVisible(false);
            }}
            icon={faArrowLeft}
            className="font-bold text-xl"
          />
          <h2 className="text-2xl font-bold mb-4 text-center">
            Report Details
          </h2>
          <FontAwesomeIcon
            onClick={() => {
              setReportVisible(false);
            }}
            icon={faClose}
            className="font-bold text-xl"
          />
        </div>
        <div className="w-full pt-[100px]">
        <Profile className="p-3" userData={userInfo}/>
          </div>
          {timestamps
            .sort((a, b) => Number(b) - Number(a))
            .map((ts, idx) => {
              const timestamp = Number(ts);
              const date = new Date(timestamp);
              const isToday = (timestamp) => {
                const today = new Date();
                return today.toDateString() == date.toDateString();
              };
              return (
                <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8 space-y-4" key={idx+ts}>
                  <div className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Report - {idx + 1}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium text-blue-600">Appointment:</span>{" "}
                    {selectedReport[ts].appointment?"Yes":"No"}
                  </div>
                  <div className="text-gray-700">
                    
                    {isToday(ts) ? "Today" :  <span className="font-medium text-blue-600">Date:{date.toDateString()}</span>}
                    <span className="px-4"></span>
                    <span className="font-medium text-blue-600">
                      Time:
                    </span>{" "}
                    {date.toLocaleTimeString()}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium text-blue-600">Mood:</span>{" "}
                    {selectedReport[ts].mood}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium text-blue-600">
                      Sleep Quality:
                    </span>{" "}
                    {selectedReport[ts].sleepQuality}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium text-blue-600">
                      Stress Level:
                    </span>{" "}
                    {selectedReport[ts].stressLevel}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium text-blue-600">
                      Anxiety Level:
                    </span>{" "}
                    {selectedReport[ts].anxietyLevel}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium text-blue-600">
                      Energy Level:
                    </span>{" "}
                    {selectedReport[ts].energyLevel}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium text-blue-600">Appetite:</span>{" "}
                    {selectedReport[ts].appetite}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
  );
}

export default Reports;
