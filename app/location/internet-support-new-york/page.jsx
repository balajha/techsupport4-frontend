import Script from "next/script";

export const metadata = {
  title: "Internet Support New York | Remote WiFi Help NYC",
  description:
    "Professional remote internet support services in New York. Fix Wi-Fi issues, slow internet & router problems instantly.",
  alternates: {
    canonical: "https://techsupport4.com/internet-support-new-york",
  },
  openGraph: {
    title: "Internet Support New York | TechSupport4",
    description:
      "Fast & secure remote internet troubleshooting in New York.",
    url: "https://techsupport4.com/internet-support-new-york",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="ny-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Internet Support in New York",
            areaServed: {
              "@type": "City",
              name: "New York",
            },
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
          }),
        }}
      />

      <main className="bg-slate-50 text-slate-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold text-blue-700">
            Internet Support in New York
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Get fast and secure remote internet troubleshooting services
            across New York City. We fix Wi-Fi, router and speed issues instantly.
          </p>

          <ul className="mt-8 space-y-3 text-slate-600">
            <li>✔ Slow internet speed</li>
            <li>✔ No connection issues</li>
            <li>✔ Router configuration</li>
            <li>✔ DNS & IP errors</li>
          </ul>

          <a
            href="/contact"
            className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Help in New York
          </a>

        </div>
      </main>
    </>
  );
}
