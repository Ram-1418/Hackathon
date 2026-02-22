import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

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
  });

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // 🔥 Fetch doctors from Firestore
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const snapshot = await getDocs(collection(db, "doctors"));
        const doctorList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoctors(doctorList);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
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

    if (formData.appointment && !selectedDoctor) {
      alert("Please select a doctor");
      return;
    }

    try {
      await addDoc(
        collection(db, "doctors", selectedDoctor, "patients"),
        {
          userId: user.uid,
          userEmail: user.email,
          ...formData,
          submittedAt: new Date(),
          status: formData.appointment ? "pending" : "none", 
        }
      );

      alert("Assessment submitted successfully!");

      // Reset form
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
      });

      setSelectedDoctor("");

    } catch (error) {
      console.error("Error submitting:", error);
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
          disabled={disableFields}
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
          disabled={disableFields}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Sleep Quality</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
          <option value="Very Poor">Very Poor</option>
        </select>

        {/* Stress */}
        <select
          name="stressLevel"
          value={formData.stressLevel}
          onChange={handleChange}
          required
          disabled={disableFields}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Stress Level</option>
          <option value="Not Stressed">Not Stressed</option>
          <option value="Slightly Stressed">Slightly Stressed</option>
          <option value="Moderately Stressed">Moderately Stressed</option>
          <option value="Very Stressed">Very Stressed</option>
          <option value="Extremely Stressed">Extremely Stressed</option>
        </select>

        {/* Anxiety */}
        <select
          name="anxietyLevel"
          value={formData.anxietyLevel}
          onChange={handleChange}
          required
          disabled={disableFields}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Anxiety Level</option>
          <option value="Not Anxious">Not Anxious</option>
          <option value="Slightly Anxious">Slightly Anxious</option>
          <option value="Moderately Anxious">Moderately Anxious</option>
          <option value="Very Anxious">Very Anxious</option>
          <option value="Extremely Anxious">Extremely Anxious</option>
        </select>

        {/* Energy */}
        <select
          name="energyLevel"
          value={formData.energyLevel}
          onChange={handleChange}
          required
          disabled={disableFields}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Energy Level</option>
          <option value="Very Energetic">Very Energetic</option>
          <option value="Energetic">Energetic</option>
          <option value="Neutral">Neutral</option>
          <option value="Tired">Tired</option>
          <option value="Exhausted">Exhausted</option>
        </select>

        {/* Appetite */}
        <select
          name="appetite"
          value={formData.appetite}
          onChange={handleChange}
          required
          disabled={disableFields}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Select Appetite Level</option>
          <option value="Very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Normal">Normal</option>
          <option value="Poor">Poor</option>
          <option value="Very Poor">Very Poor</option>
        </select>

        {/* Suicidal Thoughts */}
        <select
          name="suicidalThoughts"
          value={formData.suicidalThoughts}
          onChange={handleChange}
          required
          disabled={disableFields}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="">Have you had thoughts of self-harm?</option>
          <option value="No">No</option>
          <option value="Yes, Occasionally">Yes, Occasionally</option>
          <option value="Yes, Frequently">Yes, Frequently</option>
        </select>

        {/* Additional Notes */}
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          disabled={disableFields}
          placeholder="Is there anything else you'd like to share?"
          className="w-full p-3 border rounded-lg mb-4"
          rows="4"
        />

        {/* Appointment Checkbox */}
        <div className="mb-4">
          <input
            type="checkbox"
            name="appointment"
            checked={formData.appointment}
            onChange={handleChange}
            disabled={disableFields}
          />
          <label className="ml-2 font-semibold">
            Do you want to book an appointment?
          </label>
        </div>

        {/* Doctor Dropdown */}
        {formData.appointment && (
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
        )}

        {!disableFields && (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg"
          >
            Submit Assessment
          </button>
        )}
      </form>
    </div>
  );
}

export default MentalHealthAssessmentForm;
