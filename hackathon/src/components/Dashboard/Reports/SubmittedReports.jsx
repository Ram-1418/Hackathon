import React, { useEffect, useState } from "react";
import { auth, database, db } from "../../../firebase";
import { ref, onValue } from "firebase/database";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../Loader";
const getUserDataByUid = async (uid) => {
  try {
    // Reference to the document using the uid
    const docRef = doc(db, "users", uid); // Assuming 'users' is your collection name
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Document data found
      //console.log("User Data:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting user document:", error);
  }
};

function SubmittedReports({ isDoctor, currentUserId }) {
  const [isDataLoading, setLoading]= useState(false);
  const [userIds, setUserIds] = useState([]);
  const [submittedReports, setSubmittedReports] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  //
  useEffect(() => {
    const user = isDoctor ? "" : currentUserId;
    console.log("current user",currentUserId)
    setLoading(true)
    const query = `reports/${user}`;
    console.log(query, user)
    const getSubmittedReportsRef = ref(database,query);
    onValue(getSubmittedReportsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setSubmittedReports(data);
      // console.log("submitted reports",data);
      setLoading(false)
      const keys = Object.keys(data ?? {});
      isDoctor && setUserIds(keys);
      !isDoctor && setTimestamps(keys);
      log
      
    });
  }, []);
 // console.log("submitted reports", submittedReports);
 useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const promises = userIds.map((userId) => getUserDataByUid(userId));
      const data = await Promise.all(promises);
      setUserInfo(data);
      setLoading(false)
    };

    if (userIds.length > 0) {
      fetchData();
    }
  }, [userIds]);

  //console.log(userInfo);
  return (
    <div>
      {isDataLoading && <Loader>Loading Reports..</Loader>}
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Submitted Reports
      </h2>
      {/* {userInfo.map((data, idx) => {
        const timestamp = Number(Object.keys(submittedReports[data.uid])[0]);
        const date = new Date(timestamp);
        console.log(date);
        return (
          <div
            key={idx + data.uid}
            className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-6"
          >
            <div className="font-bold text-xl mb-2">{data.displayName}</div>
            <div className="text-gray-700">
              <span className="mr-4">Date: {date.toDateString()}</span>
              <span>Time: {date.toTimeString()}</span>
            </div>
          </div>
        );
      })} */}
      {!isDoctor && Object.keys(submittedReports)[0]}
    </div>
  );
}

export default SubmittedReports;
