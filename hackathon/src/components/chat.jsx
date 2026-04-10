import React, { useEffect, useState } from "react";
import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebase";

function Chat({ chatId }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");


    if (!chatId) {
        return <p className="p-4 text-center">Loading chat...</p>;
    }

    useEffect(() => {
        if (!chatId) return;

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

    const sendMessage = async () => {
        if (!text.trim()) return;

        await addDoc(collection(db, "chats", chatId, "messages"), {
            text,
            senderId: auth.currentUser.uid,
            createdAt: serverTimestamp(),
        });

        setText("");
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
            <div className="bg-white w-full max-w-md p-4 rounded-lg">

                <h2 className="text-xl font-bold mb-3">Chat</h2>

                {/* Messages */}
                <div className="h-64 overflow-y-auto mb-4 border p-2 rounded">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={
                                msg.senderId === auth.currentUser.uid
                                    ? "text-right"
                                    : "text-left"
                            }
                        >
                            <span className="inline-block bg-gray-200 p-2 rounded mb-2">
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="flex-1 border p-2 rounded"
                        placeholder="Type message..."
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 text-white px-4 rounded"
                    >
                        Send
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Chat;