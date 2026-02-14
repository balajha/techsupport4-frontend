import Script from "next/script";
export const metadata = {
  title: "Printer Support USA | Remote Printer Help",
  description:
    "Remote printer support for USA customers. Fix printer offline, driver errors, Wi-Fi printer issues securely.",
alternates: {
    canonical: "https://techsupport4.com/printer-support-usa",
  },
  openGraph: {
    title: "Printer Support USA | TechSupport4",
    description:
      "Remote printer troubleshooting & setup support across USA, UK & Canada.",
    url: "https://techsupport4.com/printer-support-usa",
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "Printer Support USA | TechSupport4",
  description: "Remote printer troubleshooting & setup support across USA, UK & Canada.",
},

};


export default function PrinterSupportUSA() {
  return (
    
    <>
    {/* ✅ SERVICE SCHEMA */}
      <Script
        id="printer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Remote Printer Support",
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
            areaServed: ["United States", "United Kingdom", "Canada"],
            description:
              "Remote troubleshooting for printer offline, driver errors, setup & network issues.",
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA */}
      <Script
        id="printer-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why is my printer offline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Printer offline errors occur due to network or driver issues. Our remote experts fix it instantly.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support wireless printer setup?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide complete Wi-Fi printer setup and troubleshooting remotely.",
                },
              },
            ],
          }),
        }}
      />
    
    <main className="bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Printer Support for USA Customers
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Printer offline, not printing, or driver issues?  
              Get fast & secure remote printer support.
            </p>
          </div>

          <img
            src="/printer.jpg"
            alt="Printer Support USA"
            className="rounded-xl shadow-lg"
          />
         
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            🖨️ Printer Issues We Fix
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>⚠️ Printer offline error</li>
            <li>📄 Not printing / stuck queue</li>
            <li>💻 Driver install & update</li>
            <li>📡 Wi-Fi printer connection</li>
            <li>❌ Printer not detected</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            🔒 Why Choose Us?
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>🌎 USA-focused support</li>
            <li>🔐 Secure remote access</li>
            <li>⚡ Same-day resolution</li>
            <li>🧑‍💻 Certified technicians</li>
            <li>🏠 No technician visit</li>
          </ul>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">
            Need Printer Help Now?
          </h2>
          <p className="mt-3 text-blue-100">
            Talk to a printer expert instantly.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Get Printer Support
          </a>
        </div>
      </section>

    </main>
    </>
  );
}

