import React, { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function CookiesPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title =
      language === "fr"
        ? "Politique de cookies | Leads Podium"
        : "Cookie Policy | Leads Podium";
  }, [language]);

  const content = {
    en: {
      title: "Cookie Policy",
      lastUpdate: "Last updated: January 2025",

      intro:
        "This Cookie Policy explains how Leads Podium uses cookies and similar technologies when you visit our website.",

      section1Title: "1. What Are Cookies?",
      section1Text:
        "Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. They help websites function properly, improve user experience, and collect analytical information.",

      section2Title: "2. Types of Cookies We Use",
      section2Text: [
        "Strictly necessary cookies: required for the website to function correctly (security, navigation, form submission).",
        "Performance & analytics cookies: used to understand how visitors interact with our site (pages visited, traffic sources, conversion events).",
        "Marketing cookies: may be used to measure campaign effectiveness or retarget visitors with relevant ads.",
      ],

      section3Title: "3. Cookies We May Use",
      section3Text: [
        "Analytics tools (e.g., Google Analytics or equivalent).",
        "Advertising and tracking pixels (e.g., Meta / Google Ads), if enabled.",
        "CRM or form tracking tools to measure lead generation performance.",
      ],

      section4Title: "4. Legal Basis (GDPR)",
      section4Text:
        "For users located in the European Economic Area (EEA), non-essential cookies are used only after obtaining your explicit consent. Essential cookies are processed based on our legitimate interest in ensuring proper website functionality.",

      section5Title: "5. Managing Cookies",
      section5Text: [
        "You can manage or disable cookies at any time through your browser settings.",
        "Please note that disabling certain cookies may affect website functionality and performance.",
      ],

      section6Title: "6. Third-Party Cookies",
      section6Text:
        "Some cookies may be placed by third-party services integrated into our website. We do not control these cookies and recommend reviewing the respective providers’ privacy policies.",

      section7Title: "7. Data Retention",
      section7Text:
        "Cookies are stored for a limited duration depending on their purpose. Session cookies expire when you close your browser, while persistent cookies are retained for a defined period unless deleted earlier.",

      section8Title: "8. Updates to This Policy",
      section8Text:
        "We may update this Cookie Policy from time to time to reflect legal, technical, or business changes. Any updates will be posted on this page.",

      section9Title: "9. Contact",
      section9Text:
        "If you have any questions about our use of cookies, please contact us at:",
      contactEmail: "sales@leadspodium.com",
    },

    fr: {
      title: "Politique de cookies",
      lastUpdate: "Dernière mise à jour : janvier 2025",

      intro:
        "Cette politique de cookies explique comment Leads Podium utilise les cookies et technologies similaires lorsque vous visitez notre site.",

      section1Title: "1. Qu’est-ce qu’un cookie ?",
      section1Text:
        "Un cookie est un petit fichier texte enregistré sur votre appareil (ordinateur, smartphone, tablette) lors de la consultation d’un site web. Il permet notamment d’assurer le bon fonctionnement du site et d’en améliorer l’expérience utilisateur.",

      section2Title: "2. Types de cookies utilisés",
      section2Text: [
        "Cookies strictement nécessaires : indispensables au bon fonctionnement du site (sécurité, navigation, formulaires).",
        "Cookies de performance et d’analyse : permettent d’analyser la fréquentation et l’utilisation du site.",
        "Cookies marketing : utilisés pour mesurer l’efficacité des campagnes ou proposer des publicités pertinentes.",
      ],

      section3Title: "3. Cookies susceptibles d’être utilisés",
      section3Text: [
        "Outils d’analyse (ex : Google Analytics ou équivalent).",
        "Pixels publicitaires (ex : Meta, Google Ads) si activés.",
        "Outils CRM ou de suivi des formulaires pour mesurer la performance commerciale.",
      ],

      section4Title: "4. Base légale (RGPD)",
      section4Text:
        "Pour les utilisateurs situés dans l’Espace économique européen (EEE), les cookies non essentiels sont déposés uniquement après recueil du consentement. Les cookies essentiels reposent sur notre intérêt légitime.",

      section5Title: "5. Gestion des cookies",
      section5Text: [
        "Vous pouvez gérer ou supprimer les cookies via les paramètres de votre navigateur.",
        "La désactivation de certains cookies peut affecter le fonctionnement ou les performances du site.",
      ],

      section6Title: "6. Cookies tiers",
      section6Text:
        "Certains cookies peuvent être déposés par des services tiers intégrés à notre site. Nous vous invitons à consulter leurs politiques de confidentialité respectives.",

      section7Title: "7. Durée de conservation",
      section7Text:
        "Les cookies sont conservés pour une durée limitée selon leur finalité. Les cookies de session expirent à la fermeture du navigateur, tandis que les cookies persistants restent actifs pour une durée déterminée.",

      section8Title: "8. Modifications",
      section8Text:
        "Cette politique de cookies peut être mise à jour afin de refléter des évolutions légales, techniques ou commerciales. Toute modification sera publiée sur cette page.",

      section9Title: "9. Contact",
      section9Text:
        "Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter à l’adresse suivante :",
      contactEmail: "sales@leadspodium.com",
    },
  };

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-display font-extrabold mb-2">
        {t.title}
      </h1>
      <p className="text-sm text-gray-500 mb-8">{t.lastUpdate}</p>

      <p className="mb-8">{t.intro}</p>

      {[1,2,3,4,5,6,7,8,9].map((n) => {
        const title = t[`section${n}Title`];
        const text = t[`section${n}Text`];

        return (
          <section key={n} className="mb-8">
            <h2 className="text-xl font-bold mb-3">{title}</h2>
            {Array.isArray(text) ? (
              <ul className="list-disc pl-6 space-y-2">
                {text.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{text}</p>
            )}
            {n === 9 && (
              <p className="mt-2 font-medium">
                <a
                  href={`mailto:${t.contactEmail}`}
                  className="text-indigo-600 hover:underline"
                >
                  {t.contactEmail}
                </a>
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
