import React, { useState } from "react";

function ReportForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    symptoms: "",
    mood: "",
    sleepQuality: "",
    stressLevel: "",
    anxietyLevel: "",
    suicidalThoughts: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here (save to Firestore or other DB)
    console.log("Form Data Submitted", formData);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">New Report Submission</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Patient Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Enter Patient's Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Age and Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Patient's Age"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Symptoms */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Symptoms</label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Describe symptoms or issues (e.g., insomnia, anxiety, etc.)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            rows="3"
          />
        </div>

        {/* Mood Assessment */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Mood</label>
          <textarea
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            placeholder="Describe the patient's current mood (e.g., anxious, depressed, neutral)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            rows="2"
          />
        </div>

        {/* Sleep Quality, Stress Level, Anxiety Level */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Sleep Quality</label>
            <select
              name="sleepQuality"
              value={formData.sleepQuality}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="">Select Sleep Quality</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Poor">Poor</option>
              <option value="Very Poor">Very Poor</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Stress Level</label>
            <select
              name="stressLevel"
              value={formData.stressLevel}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="">Select Stress Level</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Anxiety Level</label>
            <select
              name="anxietyLevel"
              value={formData.anxietyLevel}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="">Select Anxiety Level</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
          </div>
        </div>

        {/* Suicidal Thoughts */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Suicidal Thoughts</label>
          <select
            name="suicidalThoughts"
            value={formData.suicidalThoughts}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="">Select</option>
            <option value="None">None</option>
            <option value="Occasional">Occasional</option>
            <option value="Frequent">Frequent</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Any additional observations or comments"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReportForm;
