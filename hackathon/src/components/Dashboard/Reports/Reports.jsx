import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import Chat from "../../chat";

import {
  doc,
  updateDoc,
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs
} from "firebase/firestore";

import { db } from "../../../firebase";
function Reports({ selectedReport, reports, setReportVisible, isDoctor }) {

  const [openChat, setOpenChat] = React.useState(false);

  // 🔥 UPDATED FUNCTION (FIXED)
  const handleStatusUpdate = async (newStatus) => {
    try {

      let chatId = null;

      // 🔍 STEP 1: Check if chat already exists
      const q = query(
        collection(db, "chats"),
        where("participants", "array-contains", selectedReport.patientId)
      );

      const snapshot = await getDocs(q);

      snapshot.forEach((docSnap) => {
        const data = docSnap.data();

        if (data.participants.includes(selectedReport.doctorId)) {
          chatId = docSnap.id;
        }
      });

      // ➕ STEP 2: Create chat only if not exists
      if (!chatId && newStatus === "APPROVED") {
        const chatRef = await addDoc(collection(db, "chats"), {
          participants: [
            selectedReport.patientId,
            selectedReport.doctorId,
          ],
          createdAt: serverTimestamp(),
        });

        chatId = chatRef.id;
      }

      // ✅ STEP 3: Update appointment
      await updateDoc(
        doc(db, "appointments", selectedReport.id),
        {
          status: newStatus,
          chatId: chatId || selectedReport.chatId || null,
        }
      );

      alert(`Appointment ${newStatus}`);

    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // 🔥 Date formatter
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";

    if (timestamp.seconds) {
      return new Date(timestamp.seconds * 1000).toLocaleString();
    }

    return new Date(timestamp).toLocaleString();
  };
  debugger
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-slate-900/80 z-10 flex justify-center items-center">

      {/* MAIN BOX */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <FontAwesomeIcon
            onClick={() => setReportVisible(false)}
            icon={faArrowLeft}
            className="cursor-pointer text-xl"
          />
          <h2 className="text-2xl font-bold">Appointment Details</h2>
          <FontAwesomeIcon
            onClick={() => setReportVisible(false)}
            icon={faClose}
            className="cursor-pointer text-xl"
          />
        </div>

        {/* DETAILS */}
        <div className="space-y-3">

          <div><strong>Email:</strong> {selectedReport.patientEmail}</div>

          {selectedReport.appointmentDateTime && (
            <div>
              <strong>Appointment Date & Time:</strong>{" "}
              {formatDate(selectedReport.appointmentDateTime)}
            </div>
          )}

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

          {/* STATUS */}
          <div>
            <strong>Status:</strong>{" "}
            <span
              className={
                selectedReport.status === "APPROVED"
                  ? "text-green-600 font-bold"
                  : selectedReport.status === "REJECTED"
                    ? "text-red-600 font-bold"
                    : "text-yellow-600 font-bold"
              }
            >
              {selectedReport.status}
            </span>
          </div>

          {/* USER MESSAGES */}
          {!isDoctor && selectedReport.status === "PENDING" && (
            <div className="mt-4 text-yellow-600 font-semibold">
              ⏳ Waiting for doctor's approval.
            </div>
          )}

          {!isDoctor && selectedReport.status === "APPROVED" && (
            <div className="mt-4 text-green-600 font-semibold">
              🎉 Appointment approved.
            </div>
          )}

          {!isDoctor && selectedReport.status === "REJECTED" && (
            <div className="mt-4 text-red-600 font-semibold">
              ❌ Appointment rejected.
            </div>
          )}

          {/* DOCTOR BUTTONS */}
          {isDoctor && selectedReport.status === "PENDING" && (
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => handleStatusUpdate("APPROVED")}
                className="px-6 py-2 bg-green-500 text-white rounded-lg"
              >
                Accept
              </button>

              <button
                onClick={() => handleStatusUpdate("REJECTED")}
                className="px-6 py-2 bg-red-500 text-white rounded-lg"
              >
                Reject
              </button>
            </div>
          )}

          {/* CHAT BUTTON */}

          {selectedReport.status?.trim() === "APPROVED" && (

            <button
              onClick={() => setOpenChat(true)}
              className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg"
            >
              Open Chat 💬
            </button>
          )}

        </div>
      </div>

      {/* CHAT POPUP */}
      {/* CHAT POPUP */}
      {openChat && (
        <Chat
          chatId={
            selectedReport.chatId ||
            reports?.find(r => r.id === selectedReport.id)?.chatId
          }
        />
      )}
      {/* SAFETY (if chatId not loaded yet) */}
      {openChat && !selectedReport.chatId && (
        <div className="bg-white p-4 rounded shadow">
          Loading chat...
        </div>
      )}

    </div>
  );
}

export default Reports;