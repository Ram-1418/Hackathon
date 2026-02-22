import { useState } from "react";
import {
  auth,
  provider,
  signInWithPopup,
} from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function Login() {
  const navigate = useNavigate();
  const [isLoggingin, setLogging] = useState(false);

  const handleGoogleLogin = async () => {
    setLogging(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ✅ Save user in Firestore
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
      setLogging(false);

    } catch (error) {
      setLogging(false);
      console.error("Google login error:", error);
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

      <div className="bg-white p-9 max-w-[500px] w-full rounded-xl shadow-md">
        <h1 className="text-4xl text-center font-bold text-blue-950 mb-10">
          HealthFirst
        </h1>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-3 px-4 rounded-xl shadow hover:bg-gray-100"
        >
          <img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;