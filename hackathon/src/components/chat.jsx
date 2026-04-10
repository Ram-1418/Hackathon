import { useEffect, useState, useRef } from "react";
import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebase";


// eslint-disable-next-line react/prop-types
function Chat({ chatId, onClose, patientName, doctorName }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const bottomRef = useRef(null);

    if (!chatId) {
        return <p className="p-4 text-center">Loading chat...</p>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const q = query(
            collection(db, "chats", chatId, "messages"),
            orderBy("createdAt", "asc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data());
            setMessages(data);
        });

        return () => unsubscribe();
    }, [chatId]);

    // Auto scroll
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // ESC to close
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const sendMessage = async () => {
        if (!text.trim()) return;

        await addDoc(collection(db, "chats", chatId, "messages"), {
            text,
            senderId: auth.currentUser.uid,
            createdAt: serverTimestamp(),
        });

        setText("");
    };

    console.log("Patient:", patientName);
console.log("Doctor:", doctorName);

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center backdrop-blur-sm z-50">
            <div className="bg-white w-full max-w-md h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">

                {/* HEADER */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 flex justify-between items-center">
                    <div>
                        <div className="font-semibold text-lg">💬 Chat Room</div>
                       <div className="text-xs opacity-80 truncate">
  {patientName || "Patient"} ↔ {doctorName || "Doctor"}
</div>
                    </div>

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={onClose}
                        className="text-white text-xl font-bold hover:scale-110"
                    >
                        ✖
                    </button>
                </div>

                {/* MESSAGES */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
                    {messages.map((msg, i) => {
                        const isMe = msg.senderId === auth.currentUser.uid;

                        return (
                            <div
                                key={i}
                                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow
                                    ${
                                        isMe
                                            ? "bg-blue-500 text-white rounded-br-none"
                                            : "bg-white text-gray-800 rounded-bl-none border"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        );
                    })}
                    <div ref={bottomRef}></div>
                </div>

                {/* INPUT */}
                <div className="p-3 border-t flex gap-2 bg-white">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="flex-1 border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Type a message..."
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full"
                    >
                        Send
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Chat;