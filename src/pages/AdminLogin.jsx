import React, { useState } from "react";
import { login } from "../auth";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/admin/orders");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="bg-[#111827] p-6 rounded shadow-md w-80">
        <h2 className="mb-4 text-2xl font-bold text-white">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <button className="w-full py-2 text-black bg-white rounded hover:bg-gray-200">Login</button>
      </form>
    </div>
  );
}
