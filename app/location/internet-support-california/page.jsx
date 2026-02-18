import Script from "next/script";

export const metadata = {
  title: "Internet Support California | Remote WiFi Help",
  description:
    "Remote internet troubleshooting & router setup services across California.",
  alternates: {
    canonical: "https://techsupport4.com/internet-support-california",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="california-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Internet Support in California",
            areaServed: {
              "@type": "State",
              name: "California",
            },
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
            },
          }),
        }}
      />

      <main className="bg-slate-50 text-slate-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold text-blue-700">
            Internet Support in California
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Facing Wi-Fi or router problems in California?
            Our certified technicians provide instant remote support.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Get Help in California
          </a>

        </div>
      </main>
    </>
  );
}
