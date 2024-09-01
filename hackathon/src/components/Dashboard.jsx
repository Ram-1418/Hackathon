import React, { useState, useEffect } from "react";

import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import QuizForm from "./QuizForm";

function Dashboard() {
  const { doctor } = useParams();
  const isDoctor = doctor === "doctor";
  const [responses, setResponses] = useState([]);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("Profile");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const fetchUserData = async () => {
    const user = auth.currentUser; // Get the currently logged-in user
    if (!isDoctor) {
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
      if (isDoctor) {
        navigate("/login/doctor");
      } else {
        navigate("/login");
      }
      return null;
    }
  };
  const fetchDoctorData = async () => {
    const user = auth.currentUser; // Get the currently logged-in user

    if (user) {
      // Check if a user is signed in
      const docRef = doc(db, "doctors", user.uid); // Use "doctors" collection
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data(); // Return the doctor's data
      } else {
        console.log("No doctor document found!");
        return null;
      }
    } else {
      console.log("No user is signed in");
      navigate("/login/doctor"); // Redirect to doctor login
      return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const data = await (isDoctor ? fetchDoctorData() : fetchUserData());
      console.log(data);
      setUserData(data);
      const quizResponsesCollectionRef = collection(db, 'quizResponses');

// Fetch all documents from the collection
getDocs(quizResponsesCollectionRef)
  .then((snapshot) => {
    const allResponses = []
    // Loop through each document in the snapshot

    snapshot.docs.forEach((doc) => {
      // Get the document data
      const data = doc.data();
      allResponses.push(data)
      // Do something with the data, for example, log it to the console
      console.log(data);
    });
    setResponses(allResponses)
    console.log(allResponses);
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });
    };

    fetchUser();
  }, [userData]); // Run only once on component mount
  console.log(userData);
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-white w-64 shadow-md">
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

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <img
                  src={
                    userData?.photoURL ??
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  alt="Profile"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {/* {userData?.displayName??(isDoctor? `Doctor`:"User")} */}
                    {userData
                      ? userData.displayName
                        ? userData.displayName
                        : isDoctor
                        ? "Doctor"
                        : "User"
                      : isDoctor
                      ? "Doctor"
                      : "User"}
                  </h3>
                  {/* Display other user data as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Submitted Reports" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Submitted Reports</h2>
            {/* Display submitted reports here */}
            <p>No reports submitted yet.</p>
            
            {
              responses.map((data,idx)=>{
                return <div>
                  {data.userId}
                </div>
              })
            }
          </div>
        )}
        {activeTab === "Quiz" && (
          <div>
            <QuizForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
