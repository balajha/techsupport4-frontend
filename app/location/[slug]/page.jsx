import Script from "next/script";

const cities = {
  "internet-support-new-york": {
    city: "New York",
    service: "Internet Support",
    country: "USA",
  },
  "internet-support-california": {
    city: "California",
    service: "Internet Support",
    country: "USA",
  },
  "printer-support-london": {
    city: "London",
    service: "Printer Support",
    country: "UK",
  },
  "wifi-support-toronto": {
    city: "Toronto",
    service: "WiFi Support",
    country: "Canada",
  },
};

export async function generateMetadata({ params }) {
  const data = cities[params.slug];

  if (!data) return {};

  return {
    title: `${data.service} in ${data.city} | TechSupport4`,
    description: `Professional ${data.service.toLowerCase()} services in ${data.city}, ${data.country}. Secure remote troubleshooting by certified experts.`,
    alternates: {
      canonical: `https://techsupport4.com/location/${params.slug}`,
    },
  };
}

export default function LocationPage({ params }) {
  const data = cities[params.slug];

  if (!data) {
    return (
      <main className="py-20 text-center">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
      </main>
    );
  }

  return (
    <>
      {/* SERVICE SCHEMA */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${data.service} in ${data.city}`,
            areaServed: {
              "@type": "City",
              name: data.city,
            },
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `Do you provide ${data.service} in ${data.city}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, we provide fast and secure remote ${data.service.toLowerCase()} services in ${data.city}.`,
                },
              },
              {
                "@type": "Question",
                name: "Is remote support secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all sessions are encrypted and secure.",
                },
              },
            ],
          }),
        }}
      />

      {/* BREADCRUMB SCHEMA */}
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
                item: "https://techsupport4.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: data.city,
                item: `https://techsupport4.com/location/${params.slug}`,
              },
            ],
          }),
        }}
      />

      <main className="bg-slate-50 text-slate-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold text-blue-700">
            {data.service} in {data.city}
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Get professional {data.service.toLowerCase()} services in {data.city}, {data.country}.
            Secure, certified & remote assistance available instantly.
          </p>

          <ul className="mt-8 space-y-3 text-slate-600">
            <li>✔ Fast resolution</li>
            <li>✔ Secure remote session</li>
            <li>✔ Certified technicians</li>
            <li>✔ No home visit required</li>
          </ul>

          <a
            href="/contact"
            className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Help Now
          </a>

        </div>
      </main>
    </>
  );
}
