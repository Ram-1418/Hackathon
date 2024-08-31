import React, { useState } from "react";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

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
    {
      text: "How often have you had trouble concentrating on tasks, such as reading or watching TV?",
      options: [
        { id: 0, text: "Not at all", value: 0 },
        { id: 1, text: "Several days", value: 1 },
        { id: 2, text: "More than half the days", value: 2 },
        { id: 3, text: "Nearly every day", value: 3 },
      ],
    },
    {
      text: "How often have you been feeling nervous, anxious, or on edge?",
      options: [
        { id: 0, text: "Not at all", value: 0 },
        { id: 1, text: "Several days", value: 1 },
        { id: 2, text: "More than half the days", value: 2 },
        { id: 3, text: "Nearly every day", value: 3 },
      ],
    },
    {
      text: "How often have you had trouble falling asleep, staying asleep, or sleeping too much?",
      options: [
        { id: 0, text: "Not at all", value: 0 },
        { id: 1, text: "Several days", value: 1 },
        { id: 2, text: "More than half the days", value: 2 },
        { id: 3, text: "Nearly every day", value: 3 },
      ],
    },
    {
      text: "How often have you felt bad about yourself, or felt that you are a failure or have let yourself or your family down?",
      options: [
        { id: 0, text: "Not at all", value: 0 },
        { id: 1, text: "Several days", value: 1 },
        { id: 2, text: "More than half the days", value: 2 },
        { id: 3, text: "Nearly every day", value: 3 },
      ],
    },
];

  const handleAnswerOptionClick = (value) => {
    setScore(score + value);

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
  };

 return (
  <div className="bg-white p-8 pt-[100px] rounded shadow-md">
    {showResults ? (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Results</h1>
        <p className="text-lg mb-6">Your score: {score}</p>
        {/* You can add more detailed results and recommendations based on the score here */}
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
        <p className="text-lg mb-6">{questions[currentQuestion].text}</p>
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
