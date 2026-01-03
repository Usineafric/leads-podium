import React from "react";
import { Target, MessageCircle, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const WHATSAPP_URL =
  import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/972587990022";


  const t = {
    fr: {
      description:
        "Services premium de génération de leads pour les entreprises ambitieuses. Nous construisons des systèmes d’acquisition rentables, orientés qualité et performance réelle.",
      tagline: "Nous privilégions vos résultats, pas les métriques de vanité.",
      company: "Entreprise",
      industries: "Industries",
      legal: "Légal",
      contact: "Contact",
      home: "Accueil",
      how: "Comment ça marche",
      realEstate: "Immobilier",
      insurance: "Assurance",
      solar: "Solaire & Énergie",
      homeServices: "Services à domicile",
      proServices: "Services professionnels",
      financial: "Finance",
      healthcare: "Santé",
      legalIndustry: "Juridique",
      education: "Education",
      privacy: "Politique de confidentialité",
      terms: "Conditions d’utilisation",
      cookies: "Politique de cookies",
      copyright: "© 2025 Leads Podium. Tous droits réservés.",
    },
    en: {
      description:
        "Premium lead generation services for ambitious businesses. We build profitable acquisition systems focused on quality and real performance.",
      tagline: "We care more about your results than vanity metrics.",
      company: "Company",
      industries: "Industries",
      legal: "Legal",
      contact: "Contact",
      home: "Home",
      how: "How it works",
      realEstate: "Real Estate",
      insurance: "Insurance",
      solar: "Solar & Energy",
      homeServices: "Home Services",
      proServices: "Professional Services",
      healthcare: "Healthcare",
      legalIndustry: "Legal",
      education: "Education",
      financial: "Financial",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      copyright: "© 2025 Leads Podium. All rights reserved.",
    },
  }[language];
  
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                Leads Podium
              </span>
            </div>

            <p className="max-w-md leading-relaxed mb-4">
              {t.description}
            </p>

            <p className="text-sm text-gray-500 italic">
              {t.tagline}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-display font-bold mb-5">
              {t.company}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition">
                  {t.home}
                </Link>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-white transition">
                  {t.how}
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-display font-bold mb-5">
              {t.industries}
            </h4>

            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/real-estate" className="hover:text-white transition">
                  {t.realEstate}
                </Link>
              </li>

              <li>
                <Link to="/insurance" className="hover:text-white transition">
                  {t.insurance}
                </Link>
              </li>

              <li>
                <Link to="/solar-energy" className="hover:text-white transition">
                  {t.solar}
                </Link>
              </li>

              <li>
                <Link to="/home-services" className="hover:text-white transition">
                  {t.homeServices}
                </Link>
              </li>
            </ul>
          </div>

          {/* Financial */}
          <div>
            <h4 className="text-white font-display font-bold mb-5">
              {t.proServices}
            </h4>

            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/financial" className="hover:text-white transition">
                  {t.financial}
                </Link>
              </li>
              <li>
              <Link to="/healthcare" className="hover:text-white transition">
                {t.healthcare}
              </Link>
            </li>
            <li>
              <Link to="/legal" className="hover:text-white transition">
                {t.legalIndustry}
              </Link>
            </li>
            <li>
              <Link to="/education" className="hover:text-white transition">
                {t.education}
              </Link>
            </li>

            </ul>
          </div>


        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-14" />

        {/* Bottom */}
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold mb-4">
              {t.contact}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-indigo-400" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>


              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a
                  href="mailto:sales@leadspodium.com"
                  className="hover:text-white transition"
                >
                  sales@leadspodium.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                New York, NY
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm text-gray-500">
              {t.copyright}
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-white transition">
                {t.privacy}
              </Link>
              <Link to="/terms" className="hover:text-white transition">
                {t.terms}
              </Link>
              <Link to="/cookies" className="hover:text-white transition">
                {t.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
