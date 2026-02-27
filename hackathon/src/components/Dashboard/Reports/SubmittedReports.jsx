import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../firebase";
import Loader from "../../Loader";
import Reports from "./Reports";

function SubmittedReports({ isDoctor, currentUserId }) {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    if (!currentUserId) return;

    setLoading(true);

    let q;

    if (isDoctor) {
      q = query(
        collection(db, "appointments"),
        where("doctorId", "==", currentUserId),
        orderBy("appointmentDateTime", "asc")
      );
    } else {
      q = query(
        collection(db, "appointments"),
        where("patientId", "==", currentUserId),
        orderBy("appointmentDateTime", "asc")
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReports(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isDoctor, currentUserId]);

  if (loading) return <Loader>Loading...</Loader>;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Appointments
      </h2>

      {reports.length === 0 && (
        <p className="text-center text-gray-500">No Appointments Found</p>
      )}

      {reports.map((report) => (
        <div
          key={report.id}
          className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6"
        >
          <div className="font-bold mb-2">
            {isDoctor ? report.patientEmail : "Doctor Appointment"}
          </div>

          <div>
            Status:{" "}
            <span
              className={
                report.status === "APPROVED"
                  ? "text-green-600 font-bold"
                  : report.status === "REJECTED"
                  ? "text-red-600 font-bold"
                  : "text-yellow-600 font-bold"
              }
            >
              {report.status}
            </span>
          </div>

          {/* Safe Date Display */}
          {report.appointmentDateTime && (
            <div>
              Date:{" "}
              {report.appointmentDateTime.seconds
                ? new Date(
                    report.appointmentDateTime.seconds * 1000
                  ).toLocaleString()
                : new Date(report.appointmentDateTime).toLocaleString()}
            </div>
          )}

          <button
            onClick={() => setSelectedReport(report)}
            className="mt-3 px-5 py-2 bg-blue-500 text-white rounded"
          >
            View Details
          </button>
        </div>
      ))}

      {selectedReport && (
        <Reports
          selectedReport={selectedReport}
          setReportVisible={() => setSelectedReport(null)}
        />
      )}
    </div>
  );
}

export default SubmittedReports;