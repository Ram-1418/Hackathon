import React, { useState } from "react";

import { database, auth } from "../../firebase"; // Ensure your firebase.js exports 'db'
import {ref, set } from "firebase/database";

const submitReportToRTDB = async (userId, reportData) => {
    try {
      // Generate a reference for the report (e.g., using userId)
      const reportRef = ref(database, `reports/${userId}/${Date.now()}`);
  
      // Push data to the reference in the RTDB
      await set(reportRef, {
        ...reportData,
        submittedAt: new Date().toISOString() // Add a timestamp
      });
      console.log("Report submitted successfully to RTDB!");
    } catch (error) {
      console.error("Error submitting report to RTDB:", error);
    }
  };

function MentalHealthAssessmentForm() {
  const [formData, setFormData] = useState({
    mood: "",
    sleepQuality: "",
    stressLevel: "",
    anxietyLevel: "",
    energyLevel: "",
    appetite: "",
    suicidalThoughts: "",
    additionalNotes: "",
    type:"mental-health"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const userId = user.uid;
    console.log(userId);
    // Submit form logic here (e.g., save to Firestore)
    submitReportToRTDB(userId, formData);
    console.log("Assessment Submitted:", formData);
    // Reset the form
    setFormData({
      mood: "",
      sleepQuality: "",
      stressLevel: "",
      anxietyLevel: "",
      energyLevel: "",
      appetite: "",
      suicidalThoughts: "",
      additionalNotes: "",
    });
    alert("Your assessment has been submitted successfully.");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Mental Health Assessment
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Mood */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How would you describe your overall mood today?
          </label>
          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select Mood</option>
            <option value="Very Happy">Very Happy</option>
            <option value="Happy">Happy</option>
            <option value="Neutral">Neutral</option>
            <option value="Sad">Sad</option>
            <option value="Very Sad">Very Sad</option>
          </select>
        </div>

        {/* Sleep Quality */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How would you rate your sleep quality last night?
          </label>
          <select
            name="sleepQuality"
            value={formData.sleepQuality}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select Sleep Quality</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
            <option value="Very Poor">Very Poor</option>
          </select>
        </div>

        {/* Stress Level */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How stressed do you feel today?
          </label>
          <select
            name="stressLevel"
            value={formData.stressLevel}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select Stress Level</option>
            <option value="Not Stressed">Not Stressed</option>
            <option value="Slightly Stressed">Slightly Stressed</option>
            <option value="Moderately Stressed">Moderately Stressed</option>
            <option value="Very Stressed">Very Stressed</option>
            <option value="Extremely Stressed">Extremely Stressed</option>
          </select>
        </div>

        {/* Anxiety Level */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How anxious do you feel today?
          </label>
          <select
            name="anxietyLevel"
            value={formData.anxietyLevel}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select Anxiety Level</option>
            <option value="Not Anxious">Not Anxious</option>
            <option value="Slightly Anxious">Slightly Anxious</option>
            <option value="Moderately Anxious">Moderately Anxious</option>
            <option value="Very Anxious">Very Anxious</option>
            <option value="Extremely Anxious">Extremely Anxious</option>
          </select>
        </div>

        {/* Energy Level */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How is your energy level today?
          </label>
          <select
            name="energyLevel"
            value={formData.energyLevel}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select Energy Level</option>
            <option value="Very Energetic">Very Energetic</option>
            <option value="Energetic">Energetic</option>
            <option value="Neutral">Neutral</option>
            <option value="Tired">Tired</option>
            <option value="Exhausted">Exhausted</option>
          </select>
        </div>

        {/* Appetite */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How is your appetite today?
          </label>
          <select
            name="appetite"
            value={formData.appetite}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select Appetite Level</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Normal">Normal</option>
            <option value="Poor">Poor</option>
            <option value="Very Poor">Very Poor</option>
          </select>
        </div>

        {/* Suicidal Thoughts */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Have you had any thoughts of self-harm or suicide recently?
          </label>
          <select
            name="suicidalThoughts"
            value={formData.suicidalThoughts}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring focus:ring-red-200"
            required
          >
            <option value="">Select an Option</option>
            <option value="No">No</option>
            <option value="Yes, Occasionally">Yes, Occasionally</option>
            <option value="Yes, Frequently">Yes, Frequently</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Is there anything else you'd like to share?
          </label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Feel free to share any additional thoughts or feelings."
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          >
            Submit Assessment
          </button>
        </div>
      </form>
    </div>
  );
}

export default MentalHealthAssessmentForm;
