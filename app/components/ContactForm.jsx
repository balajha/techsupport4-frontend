"use client";

import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import Lottie from "lottie-react";
import successAnimation from "../public/success.json"; // download lottie file

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="relative w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl text-white">

      <h2 className="text-3xl font-bold text-center mb-6">
        TechSupport4 Contact
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div className="relative">
          <FaUser className="absolute left-3 top-4 text-white/70" />
          <input
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="peer w-full pl-10 p-3 bg-white/20 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Name"
          />
          <label className="absolute left-10 top-3 text-white/70 text-sm transition-all 
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-yellow-400">
            Full Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-4 text-white/70" />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="peer w-full pl-10 p-3 bg-white/20 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Email"
          />
          <label className="absolute left-10 top-3 text-white/70 text-sm transition-all 
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-yellow-400">
            Email Address
          </label>
        </div>

        {/* Phone */}
        <div className="relative">
          <FaPhone className="absolute left-3 top-4 text-white/70" />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="peer w-full pl-10 p-3 bg-white/20 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Phone"
          />
          <label className="absolute left-10 top-3 text-white/70 text-sm transition-all 
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-yellow-400">
            Phone (Optional)
          </label>
        </div>

        {/* Message */}
        <textarea
          name="message"
          required
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your issue"
          className="w-full p-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          disabled={loading}
          className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 hover:scale-105 transition cursor-pointer"
        >
          {loading ? "Sending..." : "Send Secure Message"}
        </button>

        {/* Success Animation */}
        {status === "success" && (
          <div className="text-center mt-4">
            <Lottie animationData={successAnimation} style={{ height: 120 }} />
            <p className="text-green-300 font-semibold">
              Message Sent Successfully!
            </p>
          </div>
        )}

        {status === "error" && (
          <p className="text-red-300 text-center mt-4">
            Something went wrong.
          </p>
        )}
      </form>
    </div>
  );
}
