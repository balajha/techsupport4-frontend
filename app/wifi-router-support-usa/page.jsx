export const metadata = {
  title: "Wi-Fi & Router Support USA | Remote Network Help",
  description:
    "Remote Wi-Fi and router support for USA customers. Fix slow Wi-Fi, router setup and connectivity issues securely.",
};

export default function WifiRouterSupportUSA() {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Wi-Fi & Router Support for USA Customers
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Slow Wi-Fi, router disconnecting, or setup issues?  
              Get secure remote network support.
            </p>
          </div>

          <img
            src="/wifi.jpg"
            alt="Wi-Fi Router Support USA"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            📶 Wi-Fi & Router Issues We Fix
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>🐢 Slow Wi-Fi speed</li>
            <li>📡 Router setup & configuration</li>
            <li>🔐 Wi-Fi security issues</li>
            <li>📱 Devices not connecting</li>
            <li>⚠️ Frequent disconnections</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            🔒 Why Our Wi-Fi Support Works
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>🌎 USA-based remote help</li>
            <li>🔐 Privacy-first approach</li>
            <li>⚡ Fast diagnosis</li>
            <li>🧑‍💻 Network specialists</li>
            <li>📶 All router brands supported</li>
          </ul>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">
            Fix My Wi-Fi Now
          </h2>
          <p className="mt-3 text-blue-100">
            Get stable & secure internet today.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Get Wi-Fi Support
          </a>
        </div>
      </section>

    </main>
  );
}

