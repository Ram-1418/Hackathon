import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function MentalHealthAssessmentForm({ disableFields }) {
  const [formData, setFormData] = useState({
    mood: "",
    sleepQuality: "",
    stressLevel: "",
    anxietyLevel: "",
    energyLevel: "",
    appetite: "",
    suicidalThoughts: "",
    additionalNotes: "",
    appointment: false,
    appointmentDate: "",
    appointmentTime: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

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

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      alert("Please login first");
      return;
    }

    if (
      formData.appointment &&
      (!selectedDoctor ||
        !formData.appointmentDate ||
        !formData.appointmentTime)
    ) {
      alert("Please select doctor, date and time");
      return;
    }

    try {
      let appointmentDateTime = null;

      if (formData.appointment) {
        appointmentDateTime = new Date(
          `${formData.appointmentDate}T${formData.appointmentTime}`
        );
      }

      await addDoc(collection(db, "appointments"), {
        doctorId: selectedDoctor,
        patientId: user.uid,
        patientEmail: user.email,
        mood: formData.mood,
        sleepQuality: formData.sleepQuality,
        stressLevel: formData.stressLevel,
        anxietyLevel: formData.anxietyLevel,
        energyLevel: formData.energyLevel,
        appetite: formData.appetite,
        suicidalThoughts: formData.suicidalThoughts,
        additionalNotes: formData.additionalNotes,
        appointmentDateTime,
        status: "PENDING",
        createdAt: serverTimestamp(),
      });

      alert("Appointment submitted successfully!");

      setFormData({
        mood: "",
        sleepQuality: "",
        stressLevel: "",
        anxietyLevel: "",
        energyLevel: "",
        appetite: "",
        suicidalThoughts: "",
        additionalNotes: "",
        appointment: false,
        appointmentDate: "",
        appointmentTime: "",
      });

      setSelectedDoctor("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Mental Health Assessment
      </h2>

      <form onSubmit={handleSubmit}>
        <select
          name="mood"
          value={formData.mood}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Mood</option>
          <option value="Very Happy">Very Happy</option>
          <option value="Happy">Happy</option>
          <option value="Neutral">Neutral</option>
          <option value="Sad">Sad</option>
          <option value="Very Sad">Very Sad</option>
        </select>

        <select
          name="sleepQuality"
          value={formData.sleepQuality}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Sleep Quality</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Poor">Poor</option>
          <option value="Very Poor">Very Poor</option>
        </select>

        <select
          name="stressLevel"
          value={formData.stressLevel}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Stress Level</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
          <option value="Very High">Very High</option>
        </select>

        <select
          name="anxietyLevel"
          value={formData.anxietyLevel}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Anxiety Level</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
          <option value="Very High">Very High</option>
        </select>

        <select
          name="suicidalThoughts"
          value={formData.suicidalThoughts}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Have you had thoughts of self-harm?</option>
          <option value="None">None</option>
          <option value="Occasional">Occasional</option>
          <option value="Frequent">Frequent</option>
        </select>

        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          placeholder="Additional notes"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <div className="mb-4">
          <input
            type="checkbox"
            name="appointment"
            checked={formData.appointment}
            onChange={handleChange}
          />
          <label className="ml-2">Book Appointment?</label>
        </div>

        {formData.appointment && (
          <>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
              className="w-full p-3 border rounded-lg mb-4"
            >
              <option value="">Select Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.displayName}
                </option>
              ))}
            </select>

            <input
              type="date"
              name="appointmentDate"
              min={new Date().toISOString().split("T")[0]}
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MentalHealthAssessmentForm;