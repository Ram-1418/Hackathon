import React from "react";
import ReportForm from "./ReportForm";

function Reports() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Reports</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex">
          <button 
          className="block py-2 pr-4 pl-3 duration-200 rounded-md font-medium bg-blue-500 text-white">
            + New Report
          </button>
        </div>
       
      </div>
      <ReportForm></ReportForm>
    </div>
  );
}

export default Reports;
