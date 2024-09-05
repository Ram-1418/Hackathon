import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCoffee } from "@fortawesome/free-solid-svg-icons";

function Reports({ selectedReport, setReportVisible}) {
  const timestamps = Object.keys(selectedReport)
console.log(selectedReport);
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-slate-900/80 z-10 flex flex-col justify-center items-center">
      <div className="max-w-md w-full min-h-[200px] bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Report Details
          </h2>

          <FontAwesomeIcon onClick={()=>{setReportVisible(false)}} icon={faClose} className="font-bold text-xl" />
        </div>
        <div className="w-full">
          {
            timestamps.map((ts, idx)=>{
              return (
                <div>Report - {idx+1}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Reports;
