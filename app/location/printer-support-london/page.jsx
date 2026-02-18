import Script from "next/script";

export const metadata = {
  title: "Printer Support London | Remote Printer Help UK",
  description:
    "Professional remote printer troubleshooting services in London, UK.",
  alternates: {
    canonical: "https://techsupport4.com/printer-support-london",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="london-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Printer Support in London",
            areaServed: {
              "@type": "City",
              name: "London",
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
            Printer Support in London
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Printer offline or not printing in London?
            We provide fast & secure remote printer troubleshooting.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Get Printer Help in London
          </a>

        </div>
      </main>
    </>
  );
}
