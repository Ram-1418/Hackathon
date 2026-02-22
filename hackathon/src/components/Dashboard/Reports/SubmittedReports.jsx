import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import Loader from "../../Loader";
import Reports from "./Reports";

function SubmittedReports({ isDoctor, currentUserId }) {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    if (!currentUserId) return;

    const fetchReports = async () => {
      try {
        setLoading(true);

        if (isDoctor) {
          const snapshot = await getDocs(
            collection(db, "doctors", currentUserId, "patients")
          );

          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setReports(data);
        } else {
          const doctorsSnap = await getDocs(collection(db, "doctors"));
          let patientReports = [];

          for (const doctorDoc of doctorsSnap.docs) {
            const patientsSnap = await getDocs(
              collection(db, "doctors", doctorDoc.id, "patients")
            );

            patientsSnap.forEach((doc) => {
              if (doc.data().userId === currentUserId) {
                patientReports.push({
                  id: doc.id,
                  ...doc.data(),
                });
              }
            });
          }

          setReports(patientReports);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [isDoctor, currentUserId]);

  if (loading) return <Loader>Loading Reports...</Loader>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Submitted Reports
      </h2>

      {reports.length === 0 && (
        <p className="text-center text-gray-600">No reports found.</p>
      )}

      {reports.map((report) => (
        <div
          key={report.id}
          className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6"
        >
          <div className="font-bold text-lg mb-2">
            {isDoctor ? report.userEmail : "Mental Health Assessment"}
          </div>

          <div className="text-gray-600 mb-3">
            Status:{" "}
            <span
              className={
                report.status === "accepted"
                  ? "text-green-600 font-bold"
                  : report.status === "rejected"
                  ? "text-red-600 font-bold"
                  : "text-yellow-600 font-bold"
              }
            >
              {report.status}
            </span>
          </div>

          <button
            onClick={() => setSelectedReport(report)}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            View Report
          </button>
        </div>
      ))}

      {selectedReport && (
        <Reports
          selectedReport={selectedReport}
          doctorId={currentUserId}
          setReportVisible={() => setSelectedReport(null)}
        />
      )}
    </div>
  );
}

export default SubmittedReports;