import React, { useState } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "../firebase";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase"; // Assuming you have a db instance for Firestore
import { useNavigate, useParams } from "react-router-dom";

function Login() {
  const { doctor } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for form errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // User is signed in
      console.log("User signed in:", user);
      navigate("/dashboard/doctor");
      // Redirect to the appropriate page or perform other actions
    } catch (error) {
      console.error("Error signing in:", error);
      alert("inavild credentials")
    }
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Validate form fields
    const validationErrors = validateForm({ email, password });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Submit form data (you can replace this with a call to your backend)
    
    // Reset form
    setEmail("");
    setPassword("");
    setErrors({});
    handleLogin(email, password);
    setIsSubmitting(false);
  };
  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };
  const isDoctor = doctor === "doctor";

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
        role: "user",
        // Add any other relevant user data you want to store
      });

      console.log("User signed in and data stored:", user);
      navigate("/dashboard/user");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  const loginUser = <div className="bg-white p-4 max-w-[500px] w-full rounded-xl shadow-md">
  <h1 className="text-5xl text-center font-bold text-blue-950 mb-10">
    HealthFirst
  </h1>
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
</div>;
const loginDoctor =  <div className=" p-8 rounded-lg shadow-lg max-w-[500px] w-full">
<h2 className="text-2xl font-bold mb-6 text-center">Login With Email</h2>
<form onSubmit={handleSubmit}>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
    <input
      type="email"
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
        errors.email ? 'border-red-500' : ''
      }`}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
    />
    {errors.email && (
      <p className="text-red-500 text-xs mt-2">{errors.email}</p>
    )}
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
    <input
      type="password"
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
        errors.password ? 'border-red-500' : ''
      }`}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
    />
    {errors.password && (
      <p className="text-red-500 text-xs mt-2">{errors.password}</p>
    )}
  </div>
  <button
    type="submit"
    className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
    disabled={isSubmitting}
  >
    {isSubmitting ? 'Registering...' : 'Register'}
  </button>
</form>
</div>
  
  
    return (
      <div
        className="flex flex-col items-center justify-center h-screen w-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(./mesh.png)",
          backdropFilter: "blur(2px)",
        }}
      >
        {isDoctor?loginDoctor:loginUser}
      </div>
    );
}

export default Login;
