"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl"
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-0 mt-4 bg-white shadow-lg rounded-lg w-64 p-4 space-y-4 font-medium text-slate-700 z-50">

          <a href="/" className="block hover:text-blue-600">Home</a>

          <a href="/internet-support-usa" className="block hover:text-blue-600">
            Internet Support
          </a>

          <a href="/printer-support-usa" className="block hover:text-blue-600">
            Printer Support
          </a>

          <a href="/wifi-router-support-usa" className="block hover:text-blue-600">
            Wi-Fi Support
          </a>

          <a href="/smart-tv-support-usa" className="block hover:text-blue-600">
            Smart TV Support
          </a>

          <a href="#reviews" className="block hover:text-blue-600">
            Reviews
          </a>

          <a href="/contact" className="block hover:text-blue-600">
            Contact
          </a>

        </div>
      )}
    </div>
  );
}

