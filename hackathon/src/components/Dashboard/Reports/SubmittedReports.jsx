import React, { useEffect, useState } from "react";
import { auth, database, db } from "../../../firebase";
import { ref, onValue } from "firebase/database";
import { doc,getDoc } from "firebase/firestore";
const getUserDataByUid = async (uid) => {
    try {
      // Reference to the document using the uid
      const docRef = doc(db, "users", uid); // Assuming 'users' is your collection name
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        // Document data found
        console.log("User Data:", docSnap.data());
        return docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting user document:", error);
    }
  };

function SubmittedReports({ isDoctor }) {
  const user = isDoctor ? "" : auth.uid;
  const [userIds, setUserIds] = useState([]);
  const [submittedReports, setSubmittedReports] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getSubmittedReportsRef = ref(database, "reports/");
    onValue(getSubmittedReportsRef, (snapshot) => {
      const data = snapshot.val();
      setSubmittedReports(data);
      setUserIds(Object.keys(submittedReports ?? {}));
    });
  }, []);
  useEffect(()=>{
    userIds.forEach(async (userId)=>{
       const data =await getUserDataByUid(userId);
      await setUserInfo([...userInfo, data])
    })
  }, [userIds])
  console.log(submittedReports, Object.keys(submittedReports ?? {}));
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Submitted Reports
      </h2>
      {
        userInfo.map((data, idx)=>{
            return (
            <div key={idx+data.uid} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-6">
                {data.uid}
            </div>)
        })
      }
    </div>
  );
}

export default SubmittedReports;
