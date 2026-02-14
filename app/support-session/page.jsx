export const metadata = {
  title: "Start Secure Support Session | TechSupport4",
  description:
    "Start a secure remote support session with certified technical experts.",
};

export default function SupportSessionPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-8">
        Start Secure Support Session
      </h1>

      <div className="bg-white p-8 rounded-xl shadow space-y-6">

        <p className="text-slate-600 text-lg">
          Before starting your remote support session, please review the
          session details below.
        </p>

        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Encrypted & secure remote connection</li>
          <li>You can end session anytime</li>
          <li>Certified technical expert assistance</li>
          <li>Support available 24/7</li>
        </ul>

        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Continue to Secure Session
          </a>
        </div>

      </div>

    </main>
  );
}
