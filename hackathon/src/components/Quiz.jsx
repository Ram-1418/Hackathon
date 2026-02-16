import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // 🔥 Fetch doctors
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

  const questions = [
    {
      text: "How often have you been feeling down or hopeless in the past two weeks?",
      options: [
        { id: 0, text: "Not at all", value: 0 },
        { id: 1, text: "Several days", value: 1 },
        { id: 2, text: "More than half the days", value: 2 },
        { id: 3, text: "Nearly every day", value: 3 },
      ],
    },
    {
      text: "Have you had little interest or pleasure in doing things you usually enjoy?",
      options: [
        { id: 0, text: "Not at all", value: 0 },
        { id: 1, text: "Several days", value: 1 },
        { id: 2, text: "More than half the days", value: 2 },
        { id: 3, text: "Nearly every day", value: 3 },
      ],
    },
    {
      text: "How often have you felt tired or had little energy over the past two weeks?",
      options: [
        { id: 0, text: "Not at all", value: 0 },
        { id: 1, text: "Several days", value: 1 },
        { id: 2, text: "More than half the days", value: 2 },
        { id: 3, text: "Nearly every day", value: 3 },
      ],
    },
  ];

  const handleAnswerOptionClick = (value) => {
    setScore((prev) => prev + value);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setSelectedDoctor("");
  };

  // 🔥 Submit quiz to selected doctor
  const submitToDoctor = async () => {
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
          score: score,
          submittedAt: new Date(),
        }
      );

      alert("Quiz submitted to doctor successfully!");
      restartQuiz();

    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  return (
    <div className="bg-white p-8 pt-[100px] rounded shadow-md max-w-xl mx-auto">
      {showResults ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Results</h1>
          <p className="text-lg mb-6">Your score: {score}</p>

          {/* Doctor Dropdown */}
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="border p-2 mb-4 w-full"
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.displayName}
              </option>
            ))}
          </select>

          <button
            onClick={submitToDoctor}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3"
          >
            Submit To Doctor
          </button>

          <br />

          <button
            onClick={restartQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-card p-6 bg-gray-100 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Question {currentQuestion + 1}/{questions.length}
          </h2>

          <p className="text-lg mb-6">
            {questions[currentQuestion].text}
          </p>

          <ul className="list-none">
            {questions[currentQuestion].options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleAnswerOptionClick(option.value)}
                className="cursor-pointer bg-white hover:bg-gray-200 p-4 rounded-md shadow-sm mb-4"
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
