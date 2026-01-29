import { GoogleGenerativeAI } from "@google/generative-ai";
import instruction from "./components/Instruction";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEN_AI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" , systemInstruction:instruction });
export default model;
