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
  const [specialization, setSpecialization] = useState("");

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
      alert("Please select specialization, doctor, date and time");
      return;
    }

    try {
      let appointmentDateTime = null;

      if (formData.appointment) {
        appointmentDateTime = new Date(
          `${formData.appointmentDate}T${formData.appointmentTime}`
        );
      }

      // ✅ Save in appointments collection
      await addDoc(collection(db, "appointments"), {
        doctorId: selectedDoctor,
        specialization: specialization,
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

      // ✅ 🔥 Save in doctor → patients subcollection
      if (formData.appointment && selectedDoctor) {
        await addDoc(
          collection(db, "doctors", selectedDoctor, "patients"),
          {
            patientId: user.uid,
            patientEmail: user.email,
            mood: formData.mood,
            sleepQuality: formData.sleepQuality,
            stressLevel: formData.stressLevel,
            anxietyLevel: formData.anxietyLevel,
            energyLevel: formData.energyLevel,
            appetite: formData.appetite,
            additionalNotes: formData.additionalNotes,
            appointmentDateTime,
            createdAt: serverTimestamp(),
          }
        );
      }

      alert("Appointment submitted successfully!");

      // reset form
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
      setSpecialization("");
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
        {/* Mood */}
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

        {/* Sleep */}
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

        {/* Stress */}
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

        {/* Anxiety */}
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

        {/* ✅ Energy Level */}
        <select
          name="energyLevel"
          value={formData.energyLevel}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Energy Level</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>

        {/* ✅ Appetite */}
        <select
          name="appetite"
          value={formData.appetite}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Appetite</option>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>

        {/* Suicidal Thoughts */}
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

        {/* Notes */}
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          placeholder="Additional notes"
          className="w-full p-3 border rounded-lg mb-4"
        />

        {/* Appointment */}
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
              value={specialization}
              onChange={(e) => {
                setSpecialization(e.target.value);
                setSelectedDoctor("");
              }}
              required
              className="w-full p-3 border rounded-lg mb-4"
            >
              <option value="">Select Specialization</option>
              <option value="Psychiatrist">Psychiatrist</option>
              <option value="Clinical Psychologist">
                Clinical Psychologist
              </option>
              <option value="Counseling Psychologist">
                Counseling Psychologist
              </option>
              <option value="Child Psychologist">Child Psychologist</option>
              <option value="Addiction Specialist">
                Addiction Specialist
              </option>
            </select>

            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
              className="w-full p-3 border rounded-lg mb-4"
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter(
                  (doctor) => doctor.specialization === specialization
                )
                .map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.displayName} ({doctor.specialization})
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