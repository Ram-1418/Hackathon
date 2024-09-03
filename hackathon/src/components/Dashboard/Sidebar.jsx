import React, { useState } from 'react'

function Sidebar() {
    const [activeTab, setActiveTab] = useState("Profile");
  return (
    <div className="bg-white w-64 shadow-md">
    <div className="p-6">
      {/* Profile Section in Sidebar */}
      <div
        className={`flex items-center p-2 rounded-lg cursor-pointer mb-4 ${
          activeTab === "Profile"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100"
        }`}
        onClick={() => console.log("profile")}
      >
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
        </svg>
        <span>Profile</span>
      </div>
      {/* Submitted Reports Section in Sidebar */}
      <div
        className={`flex items-center p-2 rounded-lg cursor-pointer ${
          activeTab === "Submitted Reports"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100"
        }`}
        onClick={() => console.log("Submitted Reports")}
      >
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
        </svg>
        <span>Submitted Reports</span>
      </div>
      <div
        className={`flex items-center p-2 rounded-lg cursor-pointer ${
          activeTab === "Quiz"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100"
        }`}
        onClick={() => console.log("Quiz")}
      >
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
        </svg>
        <span>Quiz</span>
      </div>
    </div>
  </div>
  )
}

export default Sidebar