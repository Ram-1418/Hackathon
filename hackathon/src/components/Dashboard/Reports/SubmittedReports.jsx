import React, { useEffect, useState } from "react";
import { database, db } from "../../../firebase";
import { ref, onValue } from "firebase/database";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../Loader";
import MentalHealthAssessmentForm from "../MentalHealthAssessment";
import Reports from "./Reports.jsx";
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

function SubmittedReports({ isDoctor, currentUserId, setCurrentComponent }) {
  const [isDataLoading, setLoading] = useState(false);
  const [userIds, setUserIds] = useState([]);
  const [submittedReports, setSubmittedReports] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [isReportVisible, setReportVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState([]);
  const [selectedReportInfo, setSelectedReportInfo] = useState({})
  //
  useEffect(() => {
    const user = isDoctor ? "" : currentUserId;
    console.log("current user", currentUserId);
    setLoading(true);
    const query = `reports/${user}`;
    console.log(query, user);
    const getSubmittedReportsRef = ref(database, query);
    onValue(getSubmittedReportsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setSubmittedReports(data);
      // console.log("submitted reports",data);
      setLoading(false);
      const keys = Object.keys(data ?? {});
      isDoctor && setUserIds(keys);
      !isDoctor && setTimestamps(keys);
      console.log(keys);
    });
  }, []);
  // console.log("submitted reports", submittedReports);
  useEffect(() => {
    if (!isDoctor || userIds.length === 0) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const promises = userIds.map((userId) => getUserDataByUid(userId));
        const data = await Promise.all(promises);
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Consider handling the error, e.g., showing an error message to the user
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isDoctor, userIds]);
  const isToday = (timestamp) => {
    const date = new Date(Number(timestamp));
    return date.toDateString() === new Date().toDateString();
  };
  //console.log(userInfo);
  return (
    <div>
      {isDataLoading && <Loader>Loading Reports..</Loader>}
      {isReportVisible && <Reports selectedReport={selectedReport} setReportVisible={setReportVisible} userInfo={selectedReportInfo} />}
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Submitted Reports
      </h2>
      {isDoctor &&
        userInfo.map((data, idx) => {
          const timestamp = Number(
            Object.keys(submittedReports[data.uid]).sort(
              (a, b) => Number(b) - Number(a)
            )[0]
          );
          const date = new Date(timestamp);
          return (
            <div
              key={idx + data?.uid}
              className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-6"
            >
              <div className="font-bold text-2xl mb-4">{data.displayName}</div>
              <div className="text-lg text-gray-700">
                <span className="mr-8 font-medium">
                  📅{isToday(timestamp) ? "Today" : date.toLocaleDateString()}
                </span>
                <span className="font-medium">{date.toLocaleTimeString()}</span>
              </div>
              <div className="mx-auto max-w-md text-center">
                <button 
                onClick={()=>{ 
                  setReportVisible(true);
                 // setSelectedReport(submittedReports[timestamp]);
                 const reports = submittedReports[data?.uid]
                  setSelectedReport(reports);
                  setSelectedReportInfo(data);

                }}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
                  View Report
                </button>
              </div>
            </div>
          );
        })}
      {!isDoctor &&
        timestamps
          .sort((a, b) => Number(b) - Number(a))
          .map((timestamp, key) => {
            const date = new Date(Number(timestamp));
            return (
              <div
                key={key + timestamp}
                className="max-w-2xl mx-auto bg-white p-5 rounded-lg shadow-lg mt-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {submittedReports[timestamp]?.type === "mental-health"
                    ? "Mental Health Assessment"
                    : `Report ${key}`}
                </div>

                <div className="flex justify-between items-center text-gray-600">
                  <div
                    className="font-bold p-3 rounded-xl text-blue-500 hover:bg-blue-100"
                    onClick={() =>
                      setCurrentComponent(
                        <MentalHealthAssessmentForm
                          disableFields={true}
                          isDoctor={isDoctor}
                          reportData={submittedReports[timestamp]}
                        />
                      )
                    }
                  >
                    Details
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-sm font-medium">Submitted : </span>
                    <span className="text-sm font-medium">
                      {isToday(timestamp) ? "Today" : date.toLocaleDateString()}
                    </span>
                    <span className="text-sm font-medium">
                      {date.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default SubmittedReports;
