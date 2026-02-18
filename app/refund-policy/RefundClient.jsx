"use client";
import { useState } from "react";

export default function RefundClient() {
  const [answer, setAnswer] = useState(null);
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-6 bg-white p-10 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Refund Policy
        </h1>

        <p className="text-slate-600 mb-6">
          Customer satisfaction is our priority. Refunds may be granted
          if the issue was not resolved and no partial service was delivered.
        </p>

        <div className="border-t pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-4">
            Was this information helpful?
          </h3>

          {!submitted && (
            <>
              <div className="flex gap-6 mb-6">
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

              {answer === "yes" && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                  Thank you for your feedback.
                </div>
              )}

              {answer === "no" && (
                <div className="bg-slate-100 p-6 rounded-lg">

                  <p className="mb-4 font-medium">
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
                        value="notlooking"
                        onChange={(e) => setReason(e.target.value)}
                        className="accent-blue-600"
                      />
                      This is not the information I was looking for
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="reason"
                        value="dontlike"
                        onChange={(e) => setReason(e.target.value)}
                        className="accent-blue-600"
                      />
                      I do not like the policy
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
            </>
          )}

          {submitted && (
            <div className="bg-blue-50 text-blue-700 p-6 rounded-lg mt-6">
              <p className="font-semibold">Thank you!</p>
              <p className="mt-2 text-sm">
                While we are unable to respond directly to your feedback,
                we will use this information to improve our online Help.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
