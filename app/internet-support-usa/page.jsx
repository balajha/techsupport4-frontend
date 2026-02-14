import Script from "next/script";

export const metadata = {
  title: "Internet Support USA | Remote Internet Fix",
  description:
    "Professional remote internet support for USA customers. Fix slow internet, no connection, DNS and Wi-Fi issues securely.",
     keywords: [
    "Internet not working USA",
    "Fix internet issues remotely",
    "Router troubleshooting USA",
    "WiFi not connecting fix"
  ],
  alternates: {
    canonical: "https://techsupport4.com/internet-support-usa"
  }

};

export default function InternetSupportUSA() {
  return (
    <main className="bg-slate-50 text-slate-800">

      <Script
  id="breadcrumb-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://techsupport4.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Internet Support USA",
          item: "https://techsupport4.com/internet-support-usa"
        }
      ]
    })
  }}
/>
<Script
  id="service-faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is my internet not working?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Internet issues may be caused by router errors, ISP outages or DNS problems."
          }
        },
        {
          "@type": "Question",
          name: "Can internet problems be fixed remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, most internet issues can be diagnosed and resolved remotely."
          }
        }
      ]
    })
  }}
/>


      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Internet Support for USA Customers
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Fix slow internet, no connection & Wi-Fi issues remotely.
            </p>
          </div>

          <img
            src="/internet.jpg"
            alt="Internet Support USA"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            🌐 Internet Issues We Fix
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>⚠️ No internet connection</li>
            <li>🐢 Slow speed & buffering</li>
            <li>🔧 DNS & IP configuration</li>
            <li>📶 Wi-Fi connected but no internet</li>
            <li>📡 Router & modem setup</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            🔒 Why Choose Us?
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>🌎 USA-focused remote service</li>
            <li>🔐 Secure & privacy-first</li>
            <li>⚡ Same-day resolution</li>
            <li>🧑‍💻 Certified technicians</li>
            <li>🏠 No home visit needed</li>
          </ul>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">
            Need Immediate Internet Help?
          </h2>
          <p className="mt-3 text-blue-100">
            Talk to a certified technician now.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Get Help Now
          </a>
        </div>
      </section>

    </main>
  );
}

