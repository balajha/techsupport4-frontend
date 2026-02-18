"use client";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex md:hidden z-50">
      <a
        href="tel:+1XXXXXXXXXX"
        className="w-1/2 bg-red-600 text-white text-center py-4 font-semibold"
      >
        🚨 Emergency Call
      </a>

      <a
        href="/contact"
        className="w-1/2 bg-blue-600 text-white text-center py-4 font-semibold"
      >
        🔐 Start Secure Session
      </a>
    </div>
  );
}
