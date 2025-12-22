import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
