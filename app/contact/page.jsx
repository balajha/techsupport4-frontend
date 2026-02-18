"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success or error
  const [phoneError, setPhoneError] = useState(""); // phone validation error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Allow only digits and optional leading +
    if (value.startsWith("+")) {
      value = "+" + value.slice(1).replace(/\D/g, "");
    } else {
      value = value.replace(/\D/g, "");
    }

    // Limit to 11 digits (excluding +)
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length > 11) {
      if (value.startsWith("+")) {
        value = "+" + digitsOnly.slice(0, 11);
      } else {
        value = digitsOnly.slice(0, 11);
      }
    }

    setFormData({ ...formData, phone: value });
    setPhoneError(""); // clear error while typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone validation before submit
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (formData.phone && (!formData.phone.startsWith("+") || digitsOnly.length < 10)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-6 py-16">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-10 text-white">

        <h1 className="text-4xl font-bold text-center mb-2">
          Contact Support
        </h1>

        <p className="text-center text-white/80 mb-8">
          Our certified technicians will get back to you quickly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone (+12345678901)"
            value={formData.phone}
            onChange={handlePhoneChange}
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          {phoneError && <p className="text-red-500 mt-1">{phoneError}</p>}

          {/* Message */}
          <textarea
            name="message"
            placeholder="Describe your issue"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg transition duration-300 hover:bg-yellow-300 hover:scale-105 cursor-pointer shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success / Error Message */}
          {status === "success" && (
            <div className="bg-green-200/20 border border-green-200 text-green-90 p-3 rounded-lg text-center">
              <p>Thank you for contacting TechSupport4.</p>
              <p>Our support team will contact you shortly.</p>
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-500/20 border border-red-400 text-red-100 p-3 rounded-lg text-center">
              ❌ Something went wrong. Please try again.
            </div>
          )}

        </form>
      </div>
    </main>
  );
}
