export const metadata = {
  title: "Smart TV Support USA | Remote TV Help",
  description:
    "Remote smart TV support for USA customers. Fix streaming, Wi-Fi and app issues on Smart TVs securely.",
};

export default function SmartTVSupportUSA() {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Smart TV Support for USA Customers
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Netflix not loading? TV not connecting to Wi-Fi?  
              Get fast remote Smart TV support.
            </p>
          </div>

          <img
            src="/smart-tv.jpg"
            alt="Smart TV Support USA"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            📺 Smart TV Issues We Fix
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>📡 TV not connecting to Wi-Fi</li>
            <li>🎬 Streaming apps not working</li>
            <li>⬇️ App installation & updates</li>
            <li>📱 Screen casting problems</li>
            <li>⚙️ Smart TV setup issues</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            🔒 Why Customers Trust Us
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>🌎 Support across all US states</li>
            <li>🔐 Secure remote troubleshooting</li>
            <li>⚡ Fast problem resolution</li>
            <li>📺 All major TV brands</li>
            <li>🏠 No home visit required</li>
          </ul>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">
            Need Smart TV Help?
          </h2>
          <p className="mt-3 text-blue-100">
            Enjoy uninterrupted streaming today.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Get Smart TV Support
          </a>
        </div>
      </section>

    </main>
  );
}

