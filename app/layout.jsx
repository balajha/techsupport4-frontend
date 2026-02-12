import "./globals.css";
import DesktopServicesMenu from "./components/DesktopServicesMenu";
import MobileMenu from "./components/MobileMenu";

export const metadata = {
  title: "TechSupport4",
  description: "Remote Tech Support USA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <header className="sticky top-0 z-50 bg-white shadow">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <div className="flex items-center gap-3">
              <img src="/logo" alt="Logo" className="h-10 w-10 rounded" />
              <span className="text-xl font-bold text-blue-600">
                TechSupport4
              </span>
            </div>

            <nav className="hidden md:flex gap-8 font-medium text-slate-700 items-center">

              <a href="/" className="hover:text-blue-600">Home</a>

              <DesktopServicesMenu />

              <a href="#reviews" className="hover:text-blue-600">Reviews</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>

            </nav>

            <MobileMenu />

          </div>
        </header>

        <main>{children}</main>

      </body>
    </html>
  );
}


