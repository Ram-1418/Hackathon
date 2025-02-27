import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEN_AI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" , systemInstruction:`Your name is Rashmika, Ai mental health assistant for HealthFirst` });
export default model;