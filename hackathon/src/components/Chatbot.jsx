import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
        { text: "how i help you today", sender: "bot" }
      ]);
      setInput(""); // Clear input field after sending
    }
  };
  const genAI = new GoogleGenerativeAI("AIzaSyALDRZHkyT0HSVOIVdbK5XxghDWMsBx5ac");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


  const FetchData=async()=>{
    const prompt = "Tell me about virat kohile";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  }
  useEffect(() => {

   FetchData()
  }, []);
  
  return (
    <>
      <div className="flex flex-col h-[400px] w-[300px] bg-white shadow-xl rounded-lg fixed bottom-12 right-12 z-50 border border-gray-200  ">
        <div className="w-full max-w-md h-[500px] bg-white rounded-lg shadow-lg flex flex-col">
          {/* Messages Section */}
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Render messages dynamically */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 p-3 rounded-lg ${message.sender === "user" ? "bg-green-100 text-right" : "bg-gray-200"}`}
              >
                <span className="text-sm text-gray-700">{message.text}</span>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="flex items-center p-4 bg-gray-50 border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="w-full p-3 bg-gray-50 rounded-lg text-sm text-gray-700 border-none outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
