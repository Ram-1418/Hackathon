import React from "react";
import { auth, provider, signInWithPopup } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase"; // Assuming you have a db instance for Firestore
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        role:"user"
        // Add any other relevant user data you want to store
      });

      console.log("User signed in and data stored:", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-full bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(./mesh.png)",

        backdropFilter: "blur(2px)",
      }}
    >

      <div className="bg-white p-4 max-w-[500px] w-full rounded-xl shadow-md">                 
      <h1 className="text-5xl text-center font-bold text-blue-950 mb-10">HealthFirst</h1>
      <div className="flex flex-col min-h-[150px] justify-ceneter items-center mt-4 p-4 max-w-[500px] w-full">
        <h2 className="text-2xl font-bold mb-8">Login</h2>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-xl shadow hover:bg-gray-100"
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
    </div>
  );
}

export default Login;
