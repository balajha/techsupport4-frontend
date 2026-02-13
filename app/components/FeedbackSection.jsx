"use client";
import { useState } from "react";

export default function FeedbackSection() {
  const [answer, setAnswer] = useState(null);
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-10 bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
        <h3 className="text-lg font-semibold text-blue-700">
          Thank you!
        </h3>
        <p className="text-sm text-slate-600 mt-2">
          While we are unable to respond directly to your feedback,
          but we will use this information to improve our online support.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 border-t pt-8">

      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        Was this information helpful?
      </h3>

      {/* YES / NO */}
      <div className="flex gap-8 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="helpful"
            value="yes"
            onChange={() => setAnswer("yes")}
            className="accent-blue-600"
          />
          Yes
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="helpful"
            value="no"
            onChange={() => setAnswer("no")}
            className="accent-blue-600"
          />
          No
        </label>
      </div>

      {/* IF YES */}
      {answer === "yes" && (
        <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
          <p className="text-green-700 font-medium">
            Thank you for your feedback.
          </p>
        </div>
      )}

      {/* IF NO */}
      {answer === "no" && (
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl animate-fade-in">

          <p className="font-medium mb-4 text-slate-700">
            Please select what best describes the issue:
          </p>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="reason"
                value="confusing"
                onChange={(e) => setReason(e.target.value)}
                className="accent-blue-600"
              />
              This information is confusing or wrong
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="reason"
                value="not-looking"
                onChange={(e) => setReason(e.target.value)}
                className="accent-blue-600"
              />
              This is not the information I was looking for
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="reason"
                value="dont-like"
                onChange={(e) => setReason(e.target.value)}
                className="accent-blue-600"
              />
              I do not like the refund policy
            </label>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!reason}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            Submit
          </button>

        </div>
      )}

    </div>
  );
}
