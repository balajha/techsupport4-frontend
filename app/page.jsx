import Script from "next/script";

export const metadata = {
  title: "Premium Remote Tech Support USA, UK & Canada | TechSupport4",
  description:
    "Certified remote technical support for Internet, Printer, Wi-Fi Router & Smart TV issues across USA, UK & Canada.",
};

export default function Home() {
  return (
    <>
      {/* SCHEMA */}
      <Script
  id="local-business-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "TechSupport4",
      url: "https://techsupport4.com",
      logo: "https://techsupport4.com/logo.png",
      description:
        "Certified remote technical support for Internet, Printer, Wi-Fi Router and Smart TV issues.",
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Canada" }
      ],
      serviceOffered: [
        { "@type": "Service", name: "Internet Support" },
        { "@type": "Service", name: "Printer Support" },
        { "@type": "Service", name: "WiFi Router Support" },
        { "@type": "Service", name: "Smart TV Support" }
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "128"
      }
    })
  }}
/>

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
          name: "Is remote support secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we use encrypted and secure remote support sessions."
          }
        },
        {
          "@type": "Question",
          name: "Do you support USA, UK and Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide certified remote tech support across USA, UK and Canada."
          }
        },
        {
          "@type": "Question",
          name: "How fast can my issue be resolved?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most issues are resolved within 30 to 60 minutes."
          }
        }
      ]
    })
  }}
/>


      <main className="bg-slate-50 text-slate-800">

        {/* HERO */}

       <section
  className="bg-gradient-to-r 
             from-blue-400 
             to-purple-900 from-slate-800 text-white py-24 relative overflow-hidden"
>

          <div className="absolute top-10 right-10 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg animate-bounce">
         🔥 Limited Time: 20% Off First Session
        </div>

       

          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Secure Remote Tech Support for USA, UK & Canada
            </h1>
            
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Secure & Certified Technical Support for Internet, Printer,
              Wi-Fi Router & Smart TV.
            </p>
            <p className="mt-6 text-lg text-blue-100">
            Internet • Printer • Wi-Fi • Router • Smart TV
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-8 py-4 font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              🔐 Start Secure Remote Session
            </a>

            <p className="mt-4 text-sm text-green-200 font-semibold">
              ✔ Encrypted • ✔ Certified Experts • ✔ 24/7 Available
            </p>
          </div>
          

            <div className="mt-10 flex justify-center gap-6">
              <a
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
              >
                Get Instant Help
              </a>
              

              <a
                href="tel:+1XXXXXXXXXX"
                className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Call Now
              </a>
            </div>
            
            
          </div>
          
           
          
        </section>
        
        <section className="bg-red-50 border-t border-b border-red-200 py-6 text-center">

        {/* INTERNET NOT WORKING BANNER */}

    <p className="text-red-700 font-semibold text-lg">
    🚨 Internet Down? Work Stopped?  
    Immediate Priority Support Available.
    </p>
</section>

          
        {/* SERVICES */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">
              Our Technical Support Services
            </h2>

            <div className="mt-12 grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Internet Support",
                  link: "/internet-support-usa",
                },
                {
                  title: "Printer Support",
                  link: "/printer-support-usa",
                },
                {
                  title: "Wi-Fi / Router Support",
                  link: "/wifi-router-support-usa",
                },
                {
                  title: "Smart TV Support",
                  link: "/smart-tv-support-usa",
                },
              ].map((service, i) => (
                <a
                  key={i}
                  href={service.link}
                  className="bg-white p-8 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition"
                >
                  <h3 className="text-xl font-semibold text-blue-600">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-slate-600">
                    Fast & secure remote troubleshooting by certified experts.
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

 <section className="py-8 text-center bg-white dark:bg-slate-800">
  <p className="text-sm text-slate-600 dark:text-slate-300">
    Serving customers across major cities including{" "}
    <a
      href="/location/internet-support-new-york"
      className="text-blue-600 underline hover:text-blue-800 font-semibold"
    >
      New York
    </a>,{" "}
    <a
      href="/location/internet-support-california"
      className="text-blue-600 underline hover:text-blue-800 font-semibold"
    >
      California
    </a>,{" "}
    <a
      href="/location/printer-support-london"
      className="text-blue-600 underline hover:text-blue-800 font-semibold"
    >
      London
    </a>,{" "}
    <a
      href="/location/wifi-support-toronto"
      className="text-blue-600 underline hover:text-blue-800 font-semibold"
    >
      Toronto
    </a>.
  </p>
</section>



              {/* ================= TRUST SECTION ================= */}
<section className="bg-white py-15 border-b">
  <div className="max-w-7xl mx-auto px-2 grid md:grid-cols-4 gap-12 text-center">

    <div>
      <h3 className="text-xl font-bold text-blue-600">
        24/7 Support Coverage
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        Available across US Eastern (EST) & Pacific (PST) time zones.
      </p>
      
    </div>

    <div>
      <h3 className="text-xl font-bold text-blue-600">
        Secure Remote Assistance
      </h3>
      
      <p className="mt-2 text-slate-600 text-sm">
        Encrypted remote sessions with privacy-first approach.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-blue-600">
      Independent Service Provider
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        We are a third-party technical support provider and not affiliated
        with any brand.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-blue-600">
        Global Support Team
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        Operated internationally with dedicated USA, UK & Canada customer support.
      </p>
    </div>

  </div>
</section>
         {/* ================= TRUST BADGES ================= */}
<section className="bg-slate-50 py-10">
  <div className="max-w-6xl mx-auto px-6 text-center">
              
    <p className="text-sm text-slate-500 mb-6">
      Secure Payments & Data Protection
    </p>
    

    <div className="flex justify-center items-center gap-3 flex-wrap opacity-85">

      <img src="/visa.png" alt="Visa" className="h-20" />
      <img src="/mastercard.png" alt="Mastercard" className="h-18" />
      <img src="/paypal.png" alt="PayPal" className="h-20" />
      <img src="/ssl.png" alt="SSL Secure" className="h-20" />

    </div>
   
  </div>
   <div className="flex justify-center items-center gap-3 flex-wrap opacity-100">
 
   </div>
 
</section>

        {/* WHY US */}
        <section className="bg-slate-400 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">
              Why Choose TechSupport4?
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="font-semibold text-lg">
                  Experienced Technicians
                </h3>
                <p className="mt-3 text-slate-600">
                  Skilled experts with years of remote support experience.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Secure Remote Assistance
                </h3>
                <p className="mt-3 text-slate-600">
                  Encrypted connections & privacy-first troubleshooting.
                </p>
                
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Fast Resolution
                </h3>
                <p className="mt-3 text-slate-600">
                  Most issues resolved within minutes.
                </p>
              </div>
            </div>
            
            
          </div>
          
        </section>

      </main>
    </>
  );
}
