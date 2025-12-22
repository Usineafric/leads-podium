import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const STORAGE_KEY = "lp_cookie_consent_v1";

function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

function getSavedConsent() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw ? safeJsonParse(raw) : null;
}

function saveConsent(consent) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function getCookieConsent() {
  return getSavedConsent();
}

/**
 * Optional helper:
 * call this after consent to conditionally load scripts.
 * Replace the placeholders with your real integrations (GA/Meta/etc).
 */
function applyConsent(consent) {
  // Example: expose a global you can read elsewhere
  window.__LP_COOKIE_CONSENT__ = consent;

  // IMPORTANT: This component does NOT automatically install analytics pixels.
  // You must wire your scripts here (or elsewhere) based on consent.analytics / consent.marketing.
  //
  // Example pseudo:
  // if (consent.analytics) loadGoogleAnalytics();
  // if (consent.marketing) loadMetaPixel();
}

export default function CookieBanner() {
  const { language } = useLanguage();

  const copy = useMemo(
    () => ({
      en: {
        title: "We use cookies",
        desc:
          "We use cookies to improve your experience, analyze site performance, and support marketing. You can accept all, reject non-essential cookies, or customize your preferences.",
        acceptAll: "Accept all",
        reject: "Reject",
        customize: "Customize",
        save: "Save preferences",
        essential: "Essential",
        essentialDesc: "Required for the website to function (always on).",
        analytics: "Analytics",
        analyticsDesc: "Helps us understand traffic and improve performance.",
        marketing: "Marketing",
        marketingDesc: "Used to measure and optimize ad campaigns.",
        privacyLink: "Privacy Policy",
        cookiesLink: "Cookie Policy",
      },
      fr: {
        title: "Nous utilisons des cookies",
        desc:
          "Nous utilisons des cookies pour améliorer votre expérience, analyser les performances du site et soutenir le marketing. Vous pouvez tout accepter, refuser les cookies non essentiels ou personnaliser vos choix.",
        acceptAll: "Tout accepter",
        reject: "Refuser",
        customize: "Personnaliser",
        save: "Enregistrer",
        essential: "Essentiels",
        essentialDesc: "Nécessaires au fonctionnement du site (toujours actifs).",
        analytics: "Analyse / Mesure",
        analyticsDesc: "Nous aide à comprendre le trafic et améliorer les performances.",
        marketing: "Marketing",
        marketingDesc: "Permet de mesurer et optimiser les campagnes publicitaires.",
        privacyLink: "Politique de confidentialité",
        cookiesLink: "Politique de cookies",
      },
    }),
    []
  );

  const t = copy[language] ?? copy.en;

  const [isOpen, setIsOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  const [prefs, setPrefs] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const existing = getSavedConsent();
    if (!existing) {
      setIsOpen(true);
      return;
    }

    // Keep a safe shape
    const normalized = {
      essential: true,
      analytics: !!existing.analytics,
      marketing: !!existing.marketing,
      timestamp: existing.timestamp || new Date().toISOString(),
      version: existing.version || 1,
    };

    applyConsent(normalized);
    setPrefs({
      essential: true,
      analytics: normalized.analytics,
      marketing: normalized.marketing,
    });
    setIsOpen(false);
  }, []);

  const acceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: 1,
    };
    saveConsent(consent);
    applyConsent(consent);
    setIsOpen(false);
  };

  const rejectNonEssential = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: 1,
    };
    saveConsent(consent);
    applyConsent(consent);
    setIsOpen(false);
  };

  const saveCustom = () => {
    const consent = {
      essential: true,
      analytics: !!prefs.analytics,
      marketing: !!prefs.marketing,
      timestamp: new Date().toISOString(),
      version: 1,
    };
    saveConsent(consent);
    applyConsent(consent);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
        onClick={() => setShowCustomize(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full sm:max-w-2xl m-3 sm:m-6 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-900">
                {t.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.desc}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="/privacy-policy" className="text-indigo-600 hover:underline">
              {t.privacyLink}
            </a>
            <a href="/cookies" className="text-indigo-600 hover:underline">
              {t.cookiesLink}
            </a>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={rejectNonEssential}
              className="w-full sm:w-auto inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-gray-200 text-slate-800 hover:bg-gray-50 transition"
            >
              {t.reject}
            </button>

            <button
              type="button"
              onClick={() => setShowCustomize((v) => !v)}
              className="w-full sm:w-auto inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition"
            >
              {t.customize}
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="w-full sm:w-auto inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm"
            >
              {t.acceptAll}
            </button>
          </div>

          {/* Customize */}
          {showCustomize && (
            <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-4 sm:p-5">
              <div className="space-y-4">
                {/* Essential */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-slate-900">{t.essential}</div>
                    <div className="text-sm text-slate-600">{t.essentialDesc}</div>
                  </div>
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                    ON
                  </span>
                </div>

                {/* Analytics */}
                <label className="flex items-start justify-between gap-4 cursor-pointer">
                  <div>
                    <div className="font-semibold text-slate-900">{t.analytics}</div>
                    <div className="text-sm text-slate-600">{t.analyticsDesc}</div>
                  </div>
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 accent-indigo-600"
                    checked={prefs.analytics}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                    }
                  />
                </label>

                {/* Marketing */}
                <label className="flex items-start justify-between gap-4 cursor-pointer">
                  <div>
                    <div className="font-semibold text-slate-900">{t.marketing}</div>
                    <div className="text-sm text-slate-600">{t.marketingDesc}</div>
                  </div>
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 accent-indigo-600"
                    checked={prefs.marketing}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, marketing: e.target.checked }))
                    }
                  />
                </label>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={saveCustom}
                    className="inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition"
                  >
                    {t.save}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom bar accent */}
        <div className="h-1 w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500" />
      </div>
    </div>
  );
}
