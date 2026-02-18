"use client";
import { useState } from "react";

export default function AcceptTerms() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-xl border">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="accent-blue-600"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        I agree to the Terms and Conditions
      </label>

      <button
        disabled={!checked}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
      >
        Continue
      </button>
    </div>
  );
}
