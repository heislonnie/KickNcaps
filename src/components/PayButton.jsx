import React, { useState } from "react";
import Confetti from "react-confetti"; // <-- Import here at the top

export default function PayButton({ amount, name }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValidEmail = (value) => typeof value === "string" && value.includes("@");

  const handlePay = () => {
    if (!isValidEmail(email)) {
      return alert("Please enter a valid email to proceed.");
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      alert(`Payment simulated for ${name} (₦${amount}). Thank you!`);
      setEmail("");

      // Hide confetti after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="flex flex-col space-y-4 max-w-sm mx-auto relative">
      {success && <Confetti numberOfPieces={150} recycle={false} />}

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
      />

      <button
        onClick={handlePay}
        disabled={loading || success}
        className="relative bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 disabled:opacity-60"
      >
        {loading ? "Processing..." : success ? "Paid ✔" : `Pay ₦${amount}`}
      </button>
    </div>
  );
}
