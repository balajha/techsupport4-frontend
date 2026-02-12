"use client";
import { useState, useEffect } from "react";

export default function Home() {

  const reviews = [
    {
      name: "Michael Turner",
      city: "California, USA",
      text: "Outstanding remote tech support. My internet issue was fixed within minutes. Extremely professional and secure service.",
      rating: 5,
    },
    {
      name: "Emily Carter",
      city: "Texas, USA",
      text: "Printer troubleshooting was handled smoothly. Clear communication and fast resolution.",
      rating: 5,
    },
    {
      name: "David Johnson",
      city: "New York, USA",
      text: "Reliable and trustworthy team. They optimized my Wi-Fi network instantly.",
      rating: 4,
    },
  ];

  const faqs = [
    {
      q: "Is remote tech support secure?",
      a: "Yes. We use encrypted and secure remote access tools. Your privacy and data safety are our priority."
    },
    {
      q: "How quickly can you fix my issue?",
      a: "Most internet and printer issues are resolved within 15–30 minutes."
    },
    {
      q: "Do you support all USA states?",
      a: "Yes. We provide remote technical support across all 50 U.S. states."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden">

        {/* Animated Background Glow */}
        <div className="absolute w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl animate-pulse -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-3xl animate-pulse bottom-0 right-0"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Premium Remote Tech Support <br /> Across the USA
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Internet • Printer • Wi-Fi • Router • Smart TV —
            Certified Experts Fixing Issues Securely & Remotely.
          </p>

          {/* Conversion CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
            >
              Get Instant Help
            </a>
            <a
              href="tel:+1XXXXXXXXXX"
              className="border border-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-blue-200">
            ⭐ 4.9 Rating | 10,000+ Happy USA Customers
          </p>

        </div>
      </section>

      {/* ================= GLASS SERVICES ================= */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {[
            "Internet Support",
            "Printer Support",
            "Wi-Fi & Router Setup",
            "Smart TV Support"
          ].map((title, i) => (
            <div
              key={i}
              className="backdrop-blur-lg bg-white/70 p-8 rounded-2xl shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {title}
              </h3>
              <p className="mt-4 text-slate-600">
                Fast and secure remote troubleshooting by certified experts.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">
          What Our Customers Say
        </h2>

        <div className="mt-10 max-w-3xl mx-auto bg-slate-50 p-10 rounded-2xl shadow-lg">
          <p className="text-lg italic text-slate-600">
            “{reviews[index].text}”
          </p>

          <div className="mt-4 text-yellow-500 text-xl">
            {"★".repeat(reviews[index].rating)}
          </div>

          <p className="mt-4 font-semibold text-blue-700">
            {reviews[index].name}
          </p>
          <p className="text-sm text-slate-500">
            {reviews[index].city}
          </p>

          <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            ✔ Verified Customer
          </span>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="py-16 bg-slate-100 text-center">
        <h3 className="text-2xl font-bold mb-8">
          Secure & Trusted Payments
        </h3>
        <div className="flex flex-wrap justify-center gap-10 text-slate-600 font-semibold">
          <span>🔒 SSL Secured</span>
          <span>💳 Visa</span>
          <span>💳 MasterCard</span>
          <span>🅿 PayPal</span>
          <span>🏆 100% Secure</span>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl shadow">
                <h4 className="font-semibold text-blue-700">
                  {faq.q}
                </h4>
                <p className="mt-3 text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-300 py-12 text-center">
        <p className="font-semibold text-white text-lg">
          TechSupport4.com
        </p>
        <p className="mt-2 text-sm">
          Secure Remote IT Support for USA Customers
        </p>
        <p className="mt-4 text-xs text-slate-400">
          © 2026 TechSupport4. All Rights Reserved.
        </p>
      </footer>

      {/* ================= LIVE CHAT BUTTON ================= */}
      <a
        href="/contact"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        💬 Chat With Us
      </a>

    </main>
  );
}
