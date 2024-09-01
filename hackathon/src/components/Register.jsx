import React, { useEffect, useState } from 'react';
import { auth, signInWithEmailAndPassword } from "../firebase";


const Register = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for form errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // User is signed in
      console.log("User signed in:", user);
      // Redirect to the appropriate page or perform other actions
    } catch (error) {
      console.error("Error signing in:", error);
      // Handle login errors (e.g., invalid credentials)
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
    handleLogin(email, password)
    // Reset form
    setEmail('');
    setPassword('');
    setErrors({});
    setIsSubmitting(false);
  };

  // Form validation function
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

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
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
    </div>
  );
};

export default Register;
