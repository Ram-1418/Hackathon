import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import QuizForm from "./QuizForm";

function Dashboard() {
    const navigate = useNavigate()
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("Profile");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const fetchUserData = async () => {
    const user = auth.currentUser; // Get the currently logged-in user
    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data(); // Return the user data
      } else {
        console.log("No such document!");
        return null;
      }
    } else {
      console.log("No user is signed in");
        navigate("/login")
      return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };

    fetchUser();
  }, []); // Run only once on component mount
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div
        className="bg-white w-64 shadow-md"
      >
        <div className="p-6">
          {/* Profile Section in Sidebar */}
          <div
            className={`flex items-center p-2 rounded-lg cursor-pointer mb-4 ${
              activeTab === "Profile"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleTabClick("Profile")}
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
            onClick={() => handleTabClick("Submitted Reports")}
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
            onClick={() => handleTabClick("Quiz")}
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
      {/* Content Area */}
      <div className="flex-1 p-8">
        {activeTab === "Profile" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            {userData && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <img
                    src={userData.photoURL}
                    alt="Profile"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {userData.displayName}
                    </h3>
                    {/* Display other user data as needed */}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {activeTab === "Submitted Reports" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Submitted Reports</h2>
            {/* Display submitted reports here */}
            <p>No reports submitted yet.</p>
          </div>
        )}
         {activeTab === "Quiz" && (
          <div>
           <QuizForm/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
