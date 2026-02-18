import Script from "next/script";

export const metadata = {
  title: "WiFi Support Toronto | Router Help Canada",
  description:
    "Secure remote WiFi and router troubleshooting services in Toronto, Canada.",
  alternates: {
    canonical: "https://techsupport4.com/wifi-support-toronto",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="toronto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "WiFi Support in Toronto",
            areaServed: {
              "@type": "City",
              name: "Toronto",
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
            WiFi Support in Toronto
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Router or Wi-Fi not working in Toronto?
            Our experts provide instant remote troubleshooting.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Get WiFi Help in Toronto
          </a>

        </div>
      </main>
    </>
  );
}
