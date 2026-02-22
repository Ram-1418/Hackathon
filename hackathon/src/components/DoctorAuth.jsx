import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function DoctorAuth() {
  const navigate = useNavigate();

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔐 LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const doctorDoc = await getDoc(doc(db, "doctors", user.uid));

      if (!doctorDoc.exists()) {
        alert("Doctor not registered. Please register first.");
        setIsLoginMode(false);
        setLoading(false);
        return;
      }

      navigate("/dashboard/doctor");
    } catch (error) {
      alert("Invalid credentials");
    }

    setLoading(false);
  };

  // 📝 REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "doctors", user.uid), {
        uid: user.uid,
        displayName,
        email,
        role: "doctor",
        createdAt: new Date(),
      });

      alert("Doctor Registered Successfully!");
      navigate("/dashboard/doctor");

    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {isLoading && <Loader>Processing...</Loader>}

      <div className="bg-white p-8 rounded-xl shadow-md w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLoginMode ? "Doctor Login" : "Doctor Registration"}
        </h2>

        <form onSubmit={isLoginMode ? handleLogin : handleRegister}>

          {!isLoginMode && (
            <input
              type="text"
              placeholder="Doctor Name"
              className="w-full p-2 border mb-4 rounded"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            {isLoginMode ? "Login" : "Register"}
          </button>
        </form>

        <div className="mt-4 text-center">
          {isLoginMode ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsLoginMode(false)}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsLoginMode(true)}
              >
                Login
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorAuth;