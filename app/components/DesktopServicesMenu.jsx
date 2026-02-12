"use client";

import { useState, useRef, useEffect } from "react";

export default function DesktopServicesMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {/* Services Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-blue-600 transition"
      >
        Services
        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {/* Vertical Dropdown */}
      {open && (
        <div className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg rounded-lg py-2 z-50 border border-slate-100">

          <a
            href="/internet-support-usa"
            className="block px-4 py-2 hover:bg-slate-100 transition"
          >
            🌐 Internet Support USA
          </a>

          <a
            href="/printer-support-usa"
            className="block px-4 py-2 hover:bg-slate-100 transition"
          >
            🖨 Printer Support USA
          </a>

          <a
            href="/wifi-router-support-usa"
            className="block px-4 py-2 hover:bg-slate-100 transition"
          >
            📶 Wi-Fi / Router Support USA
          </a>

          <a
            href="/smart-tv-support-usa"
            className="block px-4 py-2 hover:bg-slate-100 transition"
          >
            📺 Smart TV Support USA
          </a>

        </div>
      )}
    </div>
  );
}

