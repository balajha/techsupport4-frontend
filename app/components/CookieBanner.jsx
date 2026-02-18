"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-slate-900 text-white p-6 flex flex-col md:flex-row justify-between items-center gap-4 z-50">
      <p className="text-sm">
        We use cookies to improve your experience. By continuing, you agree to our Cookie Policy.
      </p>

      <button
        onClick={accept}
        className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Accept
      </button>
    </div>
  );
}
