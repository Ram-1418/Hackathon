import React, { useEffect, useRef, useState } from "react";
import model from "../chatbot";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Keep chat instance stable (IMPORTANT FIX)
  const chatRef = useRef(null);

  // ✅ Auto scroll reference
  const bottomRef = useRef(null);

  useEffect(() => {
    chatRef.current = model.startChat({
      history: [],
    });

    firstMessage();
  }, []);

  // ✅ Auto scroll when messages update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function firstMessage() {
    const result = await chatRef.current.sendMessage("Hi");

    setMessages([
      {
        role: "model",
        parts: [{ text: result.response.text() }],
      },
    ]);
  }

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = input;
    setInput(""); // ✅ Clear immediately
    setLoading(true);

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        parts: [{ text: userMessage }],
      },
    ]);

    try {
      const result = await chatRef.current.sendMessage(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: result.response.text() }],
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: "Something went wrong. Please try again." }],
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[450px] w-[320px] bg-white shadow-xl rounded-lg fixed bottom-12 right-12 z-50 border border-gray-200">

      {/* Header */}
      <div className="p-3 bg-green-500 text-white rounded-t-lg text-sm font-semibold">
        Rashmika - AI Assistant
      </div>

      {/* Messages */}
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-3 p-3 rounded-lg text-sm ${message.role === "user"
                ? "bg-green-100 text-right ml-auto"
                : "bg-gray-200"
              }`}
          >
            {message.parts[0].text}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      {/* Input */}
      <div className="flex items-center p-3 bg-gray-50 border-t border-gray-200">
        <input
          type="text"
          value={input}
          disabled={loading}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type a message..."
          className="w-full p-2 bg-gray-100 rounded-lg text-sm outline-none"
        />

        <button
          onClick={handleSendMessage}
          disabled={loading}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;