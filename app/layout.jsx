import "./globals.css";
import DesktopServicesMenu from "./components/DesktopServicesMenu";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import CookieBanner from "./components/CookieBanner";


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
        <header className="
          sticky top-0 z-50
          backdrop-blur-xl
          bg-white/70
          border-b border-slate-200
          shadow-sm
">

          <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

    
              {/* {================  LOGO BLOCK ======================} */}
         {/* PREMIUM LOGO */}
      <Link href="/" className="relative group flex items-center">

       <div className="relative">

        <img
         src="/logo.png"
         alt="TechSupport4 Logo"
          className="
           h-20 md:h-25 w-auto
           cursor-pointer
             transition-all duration-100
             group-hover:scale-110
             group-hover:rotate-1
            drop-shadow-xl
      "
    />

             {/* Glow Effect */}
              <div className="
              absolute inset-0
              rounded-full
              opacity-0
               group-hover:opacity-60
               blur-2xl
               transition duration-500
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500
    ">

    </div>

  </div>

</Link>



            <nav className="hidden md:flex gap-8 font-medium text-slate-700 items-center">
              <a href="/" className="hover:text-blue-600">Home</a>
              <DesktopServicesMenu />
              <a href="#reviews" className="hover:text-blue-600">Reviews</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </nav>

            <MobileMenu />
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main>{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">

            

          <p className="font-semibold text-white text-lg">
              TechSupport4
            </p>

            <p className="mt-4 text-sm max-w-3xl mx-auto">
              We are an independent third-party technical support provider
              serving customers across USA, UK, and Canada.
            </p>

                    <p className="text-xs text-slate-400 mt-4 max-w-4xl mx-auto">
                    TechSupport4 is an independent third-party technical support service provider.
                    We are not affiliated with or endorsed by any brand unless explicitly stated.
                    All trademarks belong to their respective owners.
                    </p>
    

            {/* LEGAL LINKS */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="/refund-policy" className="hover:underline">
                Refund Policy
              </a>
              <a href="/disclaimer" className="hover:underline">
                Disclaimer
              </a>
              <a href="/cookie-policy" className="hover:underline">
                Cookie Policy
              </a>
              <a href="/accessibility" className="hover:underline">
                Accessibility
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              © 2026 TechSupport4. All Rights Reserved.
            </p>

          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}
