import React, { useState } from "react";
import { auth, db } from "../firebase"; // Import your Firebase setup
import { doc, setDoc } from "firebase/firestore";

function QuizForm() {
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    // Add more questions as needed
  });
  const submitQuizResponses = async () => {
    try {
      const user = auth.currentUser; // Get the currently logged-in user
      if (user) {
        const userId = user.uid; // Get the user's ID
        const timestamp = new Date().toISOString(); // Get current timestamp

        // Create a document in the 'quizResponses' collection
        await setDoc(doc(db, "quizResponses", userId), {
          userId,
          timestamp,
          responses,
        });

        // Optionally, display a success message or redirect the user
        alert("Quiz responses submitted successfully!");
        console.log("Quiz responses submitted successfully!");
      } else {
        // Handle the case where the user is not logged in
        console.error("User is not logged in.");
      }
    } catch (error) {
      console.error("Error submitting quiz responses:", error);
    }
  };

  const handleChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitQuizResponses(responses);
    e.targetreset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="question1"
        >
          Question 1:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="question1"
          type="text"
          name="question1"
          value={responses.question1}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="question2"
        >
          Question 2:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="question2"
          type="text"
          name="question2"
          value={responses.question2}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
export default QuizForm;
