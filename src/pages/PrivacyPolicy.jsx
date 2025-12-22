import React, { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title =
      language === "fr"
        ? "Politique de confidentialité | Leads Podium"
        : "Privacy Policy | Leads Podium";
  }, [language]);

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdate: "Last updated: January 2025",

      intro:
        "Leads Podium values your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, store and protect your information when you use our website and services.",

      section1Title: "1. Information We Collect",
      section1Text: [
        "We may collect personal information when you fill out a form, request information, or contact us.",
        "This information may include: name, email address, phone number, company name, industry, and any information you voluntarily provide in a message.",
      ],

      section2Title: "2. How We Use Your Information",
      section2Text: [
        "To respond to your inquiries and contact you regarding our services.",
        "To evaluate whether our lead generation services are relevant to your business.",
        "To improve our website, marketing campaigns, and service quality.",
        "For internal analytics, reporting, and business development purposes.",
      ],

      section3Title: "3. Legal Basis for Processing (GDPR)",
      section3Text:
        "If you are located in the European Economic Area (EEA), we process your personal data based on your consent, our legitimate business interests, or the performance of pre-contractual measures.",

      section4Title: "4. Data Sharing",
      section4Text: [
        "We do not sell your personal data.",
        "Your information may be shared with trusted service providers (such as CRM, hosting, analytics or email tools) strictly for operational purposes.",
        "These providers are contractually bound to protect your data.",
      ],

      section5Title: "5. Data Retention",
      section5Text:
        "We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",

      section6Title: "6. Data Security",
      section6Text:
        "We implement reasonable technical and organizational measures to protect your personal data against unauthorized access, loss, misuse, or alteration.",

      section7Title: "7. Your Rights",
      section7Text: [
        "You have the right to access, correct, or delete your personal data.",
        "You may request restriction of processing or object to certain uses of your data.",
        "You may withdraw your consent at any time where processing is based on consent.",
      ],

      section8Title: "8. Cookies",
      section8Text:
        "Our website may use cookies or similar technologies for analytics and performance measurement. You can manage or disable cookies through your browser settings.",

      section9Title: "9. International Data Transfers",
      section9Text:
        "Your data may be processed outside of your country of residence, including in the United States. We take appropriate safeguards to ensure adequate protection.",

      section10Title: "10. Contact",
      section10Text:
        "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:",
      contactEmail: "sales@leadspodium.com",
    },

    fr: {
      title: "Politique de confidentialité",
      lastUpdate: "Dernière mise à jour : janvier 2025",

      intro:
        "Leads Podium attache une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez notre site et nos services.",

      section1Title: "1. Données collectées",
      section1Text: [
        "Nous pouvons collecter des données personnelles lorsque vous remplissez un formulaire, demandez des informations ou nous contactez.",
        "Ces données peuvent inclure : nom, adresse e-mail, numéro de téléphone, nom de l’entreprise, secteur d’activité et toute information transmise volontairement.",
      ],

      section2Title: "2. Utilisation des données",
      section2Text: [
        "Répondre à vos demandes et vous contacter au sujet de nos services.",
        "Évaluer la pertinence de nos solutions de génération de leads pour votre activité.",
        "Améliorer notre site, nos campagnes marketing et la qualité de nos services.",
        "Réaliser des analyses internes et du reporting.",
      ],

      section3Title: "3. Base légale du traitement (RGPD)",
      section3Text:
        "Si vous êtes situé dans l’Espace économique européen (EEE), vos données sont traitées sur la base de votre consentement, de notre intérêt légitime ou dans le cadre de mesures précontractuelles.",

      section4Title: "4. Partage des données",
      section4Text: [
        "Nous ne vendons jamais vos données personnelles.",
        "Vos informations peuvent être partagées avec des prestataires de confiance (CRM, hébergement, outils d’analyse ou d’emailing) uniquement à des fins opérationnelles.",
        "Ces prestataires sont tenus contractuellement de protéger vos données.",
      ],

      section5Title: "5. Durée de conservation",
      section5Text:
        "Les données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités décrites, sauf obligation légale contraire.",

      section6Title: "6. Sécurité des données",
      section6Text:
        "Nous mettons en place des mesures techniques et organisationnelles raisonnables afin de protéger vos données contre tout accès non autorisé, perte ou utilisation abusive.",

      section7Title: "7. Vos droits",
      section7Text: [
        "Vous disposez d’un droit d’accès, de rectification et de suppression de vos données.",
        "Vous pouvez demander la limitation du traitement ou vous opposer à certaines utilisations.",
        "Vous pouvez retirer votre consentement à tout moment lorsque le traitement est basé sur celui-ci.",
      ],

      section8Title: "8. Cookies",
      section8Text:
        "Notre site peut utiliser des cookies ou technologies similaires à des fins de mesure d’audience et de performance. Vous pouvez les gérer via les paramètres de votre navigateur.",

      section9Title: "9. Transferts internationaux",
      section9Text:
        "Vos données peuvent être traitées en dehors de votre pays de résidence, notamment aux États-Unis. Des garanties appropriées sont mises en place pour assurer leur protection.",

      section10Title: "10. Contact",
      section10Text:
        "Pour toute question concernant cette politique ou pour exercer vos droits, vous pouvez nous contacter à l’adresse suivante :",
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

      {[1,2,3,4,5,6,7,8,9,10].map((n) => {
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
            {n === 10 && (
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
