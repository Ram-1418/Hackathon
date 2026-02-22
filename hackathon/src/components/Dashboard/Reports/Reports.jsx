import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

function Reports({ selectedReport, setReportVisible, doctorId }) {

  const handleStatusUpdate = async (newStatus) => {
    try {
      await updateDoc(
        doc(db, "doctors", doctorId, "patients", selectedReport.id),
        {
          status: newStatus,
        }
      );

      alert(`Appointment ${newStatus}`);
      setReportVisible(false);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // ✅ Safe Date Formatter
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";

    if (timestamp.seconds) {
      return new Date(timestamp.seconds * 1000).toLocaleString();
    }

    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-slate-900/80 z-10 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">

        <div className="flex justify-between items-center mb-6">
          <FontAwesomeIcon
            onClick={() => setReportVisible(false)}
            icon={faArrowLeft}
            className="cursor-pointer text-xl"
          />
          <h2 className="text-2xl font-bold">Report Details</h2>
          <FontAwesomeIcon
            onClick={() => setReportVisible(false)}
            icon={faClose}
            className="cursor-pointer text-xl"
          />
        </div>

        <div className="space-y-3">

          <div><strong>Email:</strong> {selectedReport.userEmail}</div>

          <div><strong>Submitted On:</strong> {formatDate(selectedReport.submittedAt)}</div>

          <div><strong>Mood:</strong> {selectedReport.mood}</div>
          <div><strong>Sleep Quality:</strong> {selectedReport.sleepQuality}</div>
          <div><strong>Stress Level:</strong> {selectedReport.stressLevel}</div>
          <div><strong>Anxiety Level:</strong> {selectedReport.anxietyLevel}</div>
          <div><strong>Energy Level:</strong> {selectedReport.energyLevel}</div>
          <div><strong>Appetite:</strong> {selectedReport.appetite}</div>

          {selectedReport.additionalNotes && (
            <div>
              <strong>Additional Notes:</strong> {selectedReport.additionalNotes}
            </div>
          )}

          <div>
            <strong>Status:</strong>{" "}
            <span
              className={
                selectedReport.status === "accepted"
                  ? "text-green-600 font-bold"
                  : selectedReport.status === "rejected"
                  ? "text-red-600 font-bold"
                  : "text-yellow-600 font-bold"
              }
            >
              {selectedReport.status}
            </span>
          </div>

          {selectedReport.appointment &&
            selectedReport.status === "pending" && (
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => handleStatusUpdate("accepted")}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg"
                >
                  Accept
                </button>

                <button
                  onClick={() => handleStatusUpdate("rejected")}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg"
                >
                  Reject
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Reports;