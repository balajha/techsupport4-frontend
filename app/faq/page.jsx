export const metadata = {
  title: "Frequently Asked Questions | TechSupport4",
  description:
    "Find answers to common questions about remote technical support services.",
};

export default function FAQPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            How does remote support work?
          </h2>
          <p className="mt-3 text-slate-600">
            Our technician securely connects to your device using encrypted
            remote software and fixes the issue in real time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Is remote support safe?
          </h2>
          <p className="mt-3 text-slate-600">
            Yes. All sessions are encrypted and you can end the session anytime.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Do you support USA, UK and Canada?
          </h2>
          <p className="mt-3 text-slate-600">
            Yes, we provide remote support services across these regions.
          </p>
        </div>

      </div>
    </main>
  );
}
