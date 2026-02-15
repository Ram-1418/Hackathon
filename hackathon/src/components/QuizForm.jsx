import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function QuizForm() {
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // 🔥 Fetch doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      const snapshot = await getDocs(collection(db, "doctors"));
      const doctorList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDoctors(doctorList);
    };

    fetchDoctors();
  }, []);

  const submitQuizResponses = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        alert("Please login first");
        return;
      }

      if (!selectedDoctor) {
        alert("Please select a doctor");
        return;
      }

      await addDoc(
        collection(db, "doctors", selectedDoctor, "patients"),
        {
          userId: user.uid,
          userEmail: user.email,
          responses: responses,
          submittedAt: new Date(),
        }
      );

      alert("Quiz responses submitted to doctor successfully!");

      // Reset form
      setResponses({
        question1: "",
        question2: "",
      });
      setSelectedDoctor("");

    } catch (error) {
      console.error("Error submitting quiz responses:", error);
    }
  };

  const handleChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitQuizResponses();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      {/* Question 1 */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Question 1:
        </label>
        <input
          type="text"
          name="question1"
          value={responses.question1}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>

      {/* Question 2 */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Question 2:
        </label>
        <input
          type="text"
          name="question2"
          value={responses.question2}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>

      {/* Doctor Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Doctor:
        </label>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          className="border rounded w-full py-2 px-3"
        >
          <option value="">Select Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.displayName}
            </option>
          ))}
        </select>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default QuizForm;
