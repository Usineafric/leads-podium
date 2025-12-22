import React, { useEffect, useMemo, useState } from "react";
import { Target, Phone, ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { pathname } = useLocation();

  const [navScrolled, setNavScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // "company" | "industries" | "legal" | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState(null);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close menus on route change
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileOpenSection(null);
  }, [pathname]);

  useEffect(() => {
    // lock body scroll when mobile menu is open
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Close desktop dropdowns when clicking outside the nav (no overlay that blocks clicks)
  useEffect(() => {
    const onDown = (e) => {
      if (!openMenu) return;
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (!target.closest("nav")) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [openMenu]);

  const isHome = pathname === "/";
  const hrefOrHomeHash = (hash) => (isHome ? hash : `/${hash}`);

  const t = useMemo(
    () => ({
      fr: {
        company: "Entreprise",
        industries: "Industries",
        legal: "Légal",
        home: "Accueil",
        how: "Comment ça marche",
        realEstate: "Immobilier",
        insurance: "Assurance",
        solar: "Solaire & Énergie",
        homeServices: "Services à domicile",
        financial: "Finance",
        healthcare: 'Santé',
        legalIndustry: "Juridique",
        education: "Education",
        privacy: "Politique de confidentialité",
        cookies: "Politique de cookies",
        terms: "Conditions d’utilisation",
        phoneLabel: "+1 561 476 0504",
        getStarted: "Get Started",
        menu: "Menu",
        close: "Fermer",
        callNow: "Appeler",
        langAria: "Changer la langue",
      },
      en: {
        company: "Company",
        industries: "Industries",
        legal: "Legal",
        home: "Home",
        how: "How it works",
        realEstate: "Real Estate",
        insurance: "Insurance",
        solar: "Solar & Energy",
        homeServices: "Home Services",
        financial: "Financial",
        healthcare: "Healthcare",
        legalIndustry: "Legal",
        education: "Education",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy",
        terms: "Terms of Service",
        phoneLabel: "+1 561 476 0504",
        getStarted: "Get Started",
        menu: "Menu",
        close: "Close",
        callNow: "Call",
        langAria: "Change language",
      },
    }),
    []
  );

  const tt = t[language] ?? t.en;

  const toggleDesktopDropdown = (key) =>
    setOpenMenu((curr) => (curr === key ? null : key));

  const toggleMobileSection = (key) =>
    setMobileOpenSection((curr) => (curr === key ? null : key));

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileOpenSection(null);
  };

  // ✅ Logic: show CURRENT language flag (not the "other" one)
  const currentFlagSrc = language === "en" ? "https://flagcdn.com/us.svg" : "https://flagcdn.com/fr.svg";
  const currentFlagAlt = language === "en" ? "English" : "Français";

  return (
    <>
      {/* HEADER */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          navScrolled ? "bg-white/95 backdrop-blur-lg shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo: 2 lines everywhere */}
            <Link
              to="/"
              className="flex items-center gap-3 min-w-0"
              onClick={() => setOpenMenu(null)}
            >
              <div className="w-11 h-11 shrink-0 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Target className="w-5 h-5 text-white" />
              </div>

              <div className="leading-[1.05] min-w-0">
                <div className="text-[17px] sm:text-[18px] font-display font-extrabold text-gray-900 truncate">
                  Leads
                </div>
                <div className="text-[17px] sm:text-[18px] font-display font-extrabold text-gray-900 truncate">
                  Podium
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Company */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDesktopDropdown("company")}
                  className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm tracking-wide"
                  aria-expanded={openMenu === "company"}
                >
                  {tt.company}
                  <ChevronDown className={`w-4 h-4 transition ${openMenu === "company" ? "rotate-180" : ""}`} />
                </button>

                {openMenu === "company" && (
                  <div className="absolute left-0 mt-3 w-56 rounded-2xl border border-gray-100 bg-white shadow-xl p-2">
                    <Link
                      to="/"
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.home}
                    </Link>
                    <a
                      href={hrefOrHomeHash("#how-it-works")}
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.how}
                    </a>
                  </div>
                )}
              </div>

              {/* Industries */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDesktopDropdown("industries")}
                  className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm tracking-wide"
                  aria-expanded={openMenu === "industries"}
                >
                  {tt.industries}
                  <ChevronDown className={`w-4 h-4 transition ${openMenu === "industries" ? "rotate-180" : ""}`} />
                </button>

                {openMenu === "industries" && (
                  <div className="absolute left-0 mt-3 w-60 rounded-2xl border border-gray-100 bg-white shadow-xl p-2">
                    <Link
                      to="/real-estate"
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.realEstate}
                    </Link>
                    <Link
                      to="/insurance"
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.insurance}
                    </Link>
                    <Link
                      to="/solar-energy"
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.solar}
                    </Link>
                    <Link
                      to="/home-services"
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.homeServices}
                    </Link>
                    <Link
                      to="/financial"
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.financial}
                    </Link>
                    <Link
                      to="/healthcare"
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.healthcare}
                    </Link>
                    <Link
                      to="/legal"
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.legalIndustry}
                    </Link>
                    <Link
                      to="/education"
                      onClick={closeAll}
                      className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {tt.education}
                    </Link>



                  </div>
                )}
              </div>

              {/* Legal */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDesktopDropdown("legal")}
                  className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm tracking-wide"
                  aria-expanded={openMenu === "legal"}
                >
                  {tt.legal}
                  <ChevronDown className={`w-4 h-4 transition ${openMenu === "legal" ? "rotate-180" : ""}`} />
                </button>

                {openMenu === "legal" && (
                  <div className="absolute left-0 mt-3 w-72 rounded-2xl border border-gray-100 bg-white shadow-xl p-2">
                    <Link to="/privacy-policy" onClick={closeAll} className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50">
                      {tt.privacy}
                    </Link>
                    <Link to="/cookies" onClick={closeAll} className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50">
                      {tt.cookies}
                    </Link>
                    <Link to="/terms" onClick={closeAll} className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-50">
                      {tt.terms}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right actions (desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
                aria-label={tt.langAria}
              >
                <img src={currentFlagSrc} alt={currentFlagAlt} className="w-6 h-6 rounded-full" />
              </button>

              <a
                href="tel:15614760504"
                className="hidden xl:flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-700 transition"
              >
                <Phone className="w-4 h-4" />
                {tt.phoneLabel}
              </a>

              <a
                href={hrefOrHomeHash("#contact")}
                className="btn-primary text-white px-5 py-2 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition"
              >
                {tt.getStarted}
              </a>
            </div>

            {/* Right actions (mobile/tablet) — aligned and never cut */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3 shrink-0">
              {/* flag: always visible (and small) */}
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
                aria-label={tt.langAria}
              >
                <img src={currentFlagSrc} alt={currentFlagAlt} className="w-6 h-6 rounded-full" />
              </button>

              {/* Get Started: only from sm and up (prevents hamburger being cut on very small widths) */}
              <a
                href={hrefOrHomeHash("#contact")}
                className="hidden sm:inline-flex btn-primary text-white px-4 py-2 rounded-full font-semibold text-sm shadow-sm"
              >
                {tt.getStarted}
              </a>

              {/* hamburger: fixed size + shrink-0 => aligned & never clipped */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white hover:border-indigo-300 transition"
                aria-label={tt.menu}
              >
                <Menu className="w-5 h-5 text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU — ABOVE header to avoid overlap */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Close overlay"
            onClick={closeAll}
          />

          <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div className="leading-tight">
                  <div className="text-base font-display font-extrabold text-gray-900">Leads</div>
                  <div className="text-base font-display font-extrabold text-gray-900">Podium</div>
                  <p className="text-xs text-gray-500 mt-0.5">{tt.menu}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeAll}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white hover:border-indigo-300 transition"
                aria-label={tt.close}
              >
                <X className="w-5 h-5 text-gray-900" />
              </button>
            </div>

            <div className="px-5 py-6 space-y-4 overflow-auto h-[calc(100%-88px)]">
              {/* COMPANY */}
              <div className="rounded-2xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("company")}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900"
                >
                  {tt.company}
                  <ChevronDown className={`w-4 h-4 transition ${mobileOpenSection === "company" ? "rotate-180" : ""}`} />
                </button>
                {mobileOpenSection === "company" && (
                  <div className="px-4 pb-4 space-y-2">
                    <Link to="/" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                      {tt.home}
                    </Link>
                    <a href={hrefOrHomeHash("#how-it-works")} onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                      {tt.how}
                    </a>
                  </div>
                )}
              </div>

              {/* INDUSTRIES */}
              <div className="rounded-2xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("industries")}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900"
                >
                  {tt.industries}
                  <ChevronDown className={`w-4 h-4 transition ${mobileOpenSection === "industries" ? "rotate-180" : ""}`} />
                </button>
                {mobileOpenSection === "industries" && (
                  <div className="px-4 pb-4 space-y-2">
                    <Link to="/real-estate" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                      {tt.realEstate}
                    </Link>
                    <Link to="/insurance" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                      {tt.insurance}
                    </Link>
                    <Link to="/solar-energy" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                      {tt.solar}
                  </Link>
                  <Link to="/home-services" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                    {tt.homeServices}
                  </Link>
                  <Link to="/financial" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                    {tt.financial}
                  </Link>
                  <Link to="/healthcare" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                    {tt.healthcare}
                  </Link>
                  <Link to="/legal" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                    {tt.legalIndustry}
                  </Link>
                  <Link to="/education" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                    {tt.education}
                  </Link>  

                  </div>
                )}
              </div>

              {/* LEGAL */}
              <div className="rounded-2xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("legal")}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900"
                >
                  {tt.legal}
                  <ChevronDown className={`w-4 h-4 transition ${mobileOpenSection === "legal" ? "rotate-180" : ""}`} />
                </button>
                {mobileOpenSection === "legal" && (
                  <div className="px-4 pb-4 space-y-2">
                    <Link to="/privacy-policy" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                      {tt.privacy}
                    </Link>
                    <Link to="/cookies" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                      {tt.cookies}
                    </Link>
                    <Link to="/terms" onClick={closeAll} className="block text-sm text-gray-700 hover:text-indigo-700">
                      {tt.terms}
                    </Link>
                  </div>
                )}
              </div>

              {/* CONTACT */}
              <div className="rounded-2xl border border-gray-100 p-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">{tt.phoneLabel}</p>
                <a href="tel:15614760504" className="inline-flex items-center gap-2 text-sm text-indigo-700 font-semibold hover:underline">
                  <Phone className="w-4 h-4" />
                  {tt.callNow}
                </a>

                <a
                  href={hrefOrHomeHash("#contact")}
                  onClick={closeAll}
                  className="mt-4 inline-flex w-full justify-center btn-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm"
                >
                  {tt.getStarted}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
