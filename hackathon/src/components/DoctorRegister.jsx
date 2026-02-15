import  { useState } from "react";
import { registerDoctor } from "../Services/doctorService";
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await registerDoctor(email, password, displayName);

    if (result.success) {
      alert("Doctor Registered Successfully!");
      navigate("/login/doctor");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Doctor Registration
        </h2>

        <input
          type="text"
          placeholder="Doctor Name"
          className="w-full p-2 border mb-4 rounded"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />

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

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default DoctorRegister;
