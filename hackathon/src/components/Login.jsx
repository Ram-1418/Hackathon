import  { useState } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function Login() {
  const navigate = useNavigate();

  const [isLoggingin, setLogging] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 Email & Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLogging(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Check if doctor
      const doctorDoc = await getDoc(doc(db, "doctors", user.uid));

      if (doctorDoc.exists()) {
        navigate("/dashboard/doctor");
      } else {
        // Save normal user if not exists
        await setDoc(
          doc(db, "users", user.uid),
          {
            uid: user.uid,
            email: user.email,
            role: "user",
            createdAt: new Date(),
          },
          { merge: true }
        );

        navigate("/dashboard/user");
      }

      setLogging(false);

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setLogging(false);
      alert("Invalid credentials");
    }
  };

  // 🔥 Google Login
  const handleGoogleLogin = async () => {
    setLogging(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const doctorDoc = await getDoc(doc(db, "doctors", user.uid));

      if (doctorDoc.exists()) {
        navigate("/dashboard/doctor");
      } else {
        await setDoc(
          doc(db, "users", user.uid),
          {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            role: "user",
            createdAt: new Date(),
          },
          { merge: true }
        );

        navigate("/dashboard/user");
      }

      setLogging(false);

    } catch (error) {
      setLogging(false);
      console.error(error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen px-10 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(./mesh.png)",
        backdropFilter: "blur(2px)",
      }}
    >
      {isLoggingin && <Loader>Logging In..</Loader>}

      <div className="bg-white p-9 max-w-[500px] w-full rounded-xl shadow-md ">
        <h1 className="text-4xl text-center font-bold text-blue-950 mb-10">
          HealthFirst
        </h1>

        {/* Email Login */}
        <form onSubmit={handleLogin}>
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
            disabled={isLoggingin}
          >
            {isLoggingin ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-500">
          OR
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-xl shadow hover:bg-gray-100"
        >
          <img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
