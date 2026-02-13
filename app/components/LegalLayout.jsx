"use client";
import { useState, useEffect } from "react";

export default function LegalLayout({
  title,
  sections,
  version = "v1.0.0",
}) {
  const [openSection, setOpenSection] = useState(null);
  const [active, setActive] = useState(null);

  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Smooth scroll + active tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          if (
            scrollPosition >= el.offsetTop &&
            scrollPosition < el.offsetTop + el.offsetHeight
          ) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <section className="bg-slate-50 py-20 print:bg-white">
      <div className="max-w-7xl mx-auto px-6 flex gap-10">

        {/* ===== SIDEBAR ===== */}
        <aside className="hidden lg:block w-1/4 sticky top-32 h-fit print:hidden">
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="font-semibold mb-4 text-blue-700">
              On This Page
            </h3>

            <ul className="space-y-3 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`block transition ${
                      active === section.id
                        ? "text-blue-600 font-semibold"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => window.print()}
              className="mt-6 w-full text-sm bg-slate-200 px-4 py-2 rounded-lg hover:bg-slate-300 transition"
            >
              Print Page
            </button>
          </div>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <div className="w-full lg:w-3/4">
          <div className="bg-white p-10 rounded-2xl shadow border print:shadow-none print:border-none">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
              <h1 className="text-3xl font-bold text-blue-700">
                {title}
              </h1>

              <div className="flex items-center gap-3 mt-4 md:mt-0 text-sm">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {version}
                </span>
                <span className="text-slate-500">
                  Last Updated: {lastUpdated}
                </span>
              </div>
            </div>

            {/* Accordion Sections */}
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="mb-6 border rounded-lg overflow-hidden scroll-mt-32"
              >
                <button
                  onClick={() =>
                    setOpenSection(
                      openSection === section.id ? null : section.id
                    )
                  }
                  className="w-full text-left p-5 bg-slate-100 hover:bg-slate-200 transition font-semibold flex justify-between items-center"
                >
                  {section.title}
                  <span>
                    {openSection === section.id ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openSection === section.id
                      ? "max-h-[500px] p-6 bg-white"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
