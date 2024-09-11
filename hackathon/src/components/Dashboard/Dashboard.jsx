import React, { useState, useEffect, useContext } from "react";
import { doc, getDoc} from "firebase/firestore";
import { db, auth } from "../../firebase";
import {  useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { NavigateContext } from "../../contexts/navigate";

function Dashboard() {

  const { doctor } = useParams();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isDoctor = doctor === "doctor";
  const [activeTab, setActiveTab] = useState("Profile");
  const [sidebarState, setSidebarState] = useState(false);
  const {navigate} = useContext(NavigateContext);
  const [userData, setUserData] = useState(null);
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  const fetchUserData = async () => {
    const user = auth.currentUser; // Get the currently logged-in user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data(); // Return the user data
      } else {
        console.log("No user document found!");
        navigate("/login");
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
        navigate("/login/doctor");
        return null;
      }
    } else {
      console.log("No user is signed in");
      navigate("/login/doctor");
      return null;
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      const data = await (isDoctor ? fetchDoctorData() : fetchUserData());
      if(data==null){
        isDoctor?navigate("/login/doctor"):navigate("/login");
        return;
      }
      setUserData(data);
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex">

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDoctor={isDoctor}
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
        screenWidth={screenWidth}
      />

      <Content
        userData={userData}
        activeTab={activeTab}
        isDoctor={isDoctor}
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      />
    </div>
  );
}

export default Dashboard;
