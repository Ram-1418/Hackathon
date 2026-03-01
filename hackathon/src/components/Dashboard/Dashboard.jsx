import React, { useState, useEffect, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../firebase";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { NavigateContext } from "../../contexts/navigate";

function Dashboard() {
  const { doctor } = useParams();
  const isDoctor = doctor === "doctor";

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeTab, setActiveTab] = useState("Profile");
  const [sidebarState, setSidebarState] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { navigate } = useContext(NavigateContext);

  // ✅ Fix resize memory leak
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Proper Firebase Auth Listener (Fix refresh logout issue)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        isDoctor ? navigate("/login/doctor") : navigate("/login");
        return;
      }

      try {
        const collectionName = isDoctor ? "doctors" : "users";
        const docRef = doc(db, collectionName, user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData({ uid: user.uid, ...docSnap.data() });
        } else {
          console.log("No document found!");
          isDoctor ? navigate("/login/doctor") : navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [isDoctor, navigate]);

  // ✅ Loading screen while Firebase checks session
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-xl font-semibold">Loading Dashboard...</h1>
      </div>
    );
  }

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