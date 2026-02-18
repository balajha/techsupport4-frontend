import "./globals.css";
import MobileMenu from "./components/MobileMenu";

export const metadata = {
  title: "Premium Remote Tech Support USA, UK & Canada | TechSupport4",
  description:
    "Certified remote technical support for Internet, Printer, Wi-Fi Router & Smart TV issues across USA, UK & Canada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* ================= NAVBAR ================= */}
        <header className="sticky top-0 z-50 bg-white shadow">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo" alt="Logo" className="h-10 w-10 rounded" />
              <span className="text-xl font-bold text-blue-600">
                TechSupport4
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 font-medium text-slate-700 items-center">

              <a href="/" className="hover:text-blue-600">
                Home
              </a>

              <div className="relative group">
                <span className="cursor-pointer hover:text-blue-600">
                  Services ▾
                </span>

                <div className="absolute left-0 mt-3 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">

                  <a href="/internet-support-usa" className="block px-4 py-3 hover:bg-slate-100">
                    🌐 Internet Support USA
                  </a>

                  <a href="/printer-support-usa" className="block px-4 py-3 hover:bg-slate-100">
                    🖨 Printer Support USA
                  </a>

                  <a href="/wifi-router-support-usa" className="block px-4 py-3 hover:bg-slate-100">
                    📶 Wi-Fi Support USA
                  </a>

                  <a href="/smart-tv-support-usa" className="block px-4 py-3 hover:bg-slate-100">
                    📺 Smart TV Support USA
                  </a>

                </div>
              </div>

              <a href="#reviews" className="hover:text-blue-600">
                Reviews
              </a>

              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>

            </nav>

            {/* Mobile Menu */}
            <MobileMenu />

          </div>
        </header>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}

