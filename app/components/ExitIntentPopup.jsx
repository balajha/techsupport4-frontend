"use client";
import { useEffect, useState } from "react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10) {
        setShow(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md text-center">

        <h3 className="text-xl font-bold mb-4">
          Wait! Need Immediate Help?
        </h3>

        <p className="text-slate-600 mb-6">
          Get priority remote support within minutes.
        </p>

        <a
          href="tel:+1XXXXXXXXXX"
          className="block bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
        >
          🚨 Call Now
        </a>

        <button
          onClick={() => setShow(false)}
          className="mt-4 text-sm text-slate-500"
        >
          Continue Browsing
        </button>

      </div>
    </div>
  );
}
