"use client";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-40">
      <div className="flex">

        <a
          href="tel:+1XXXXXXXXXX"
          className="w-1/2 text-center py-4 font-semibold text-white bg-red-600 hover:bg-red-700 transition"
        >
          🚨 Emergency Call
        </a>

        <a
          href="/contact"
          className="w-1/2 text-center py-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
        >
          🔐 Start Secure Session
        </a>

      </div>
    </div>
  );
}
