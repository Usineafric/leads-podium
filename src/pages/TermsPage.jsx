import React, { useEffect, useMemo } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title =
      language === "fr"
        ? "Conditions d’utilisation | Leads Podium"
        : "Terms of Service | Leads Podium";
  }, [language]);

  const content = useMemo(
    () => ({
      en: {
        title: "Terms of Service",
        lastUpdate: "Last updated: January 2025",
        intro:
          "These Terms of Service (“Terms”) govern your access to and use of the Leads Podium website and services (the “Service”). By accessing or using the Service, you agree to these Terms.",

        s1t: "1. Who We Are",
        s1:
          "Leads Podium provides lead generation and marketing services for businesses. Our website may present service information, allow you to request contact, and submit forms.",

        s2t: "2. Eligibility",
        s2:
          "You must be at least 18 years old and have the authority to enter into these Terms on behalf of yourself or your company.",

        s3t: "3. Scope of Service",
        s3a: [
          "Leads Podium may provide marketing strategy, funnel building, traffic acquisition, lead qualification, and lead delivery services.",
          "Specific deliverables, pricing, volume, lead definitions, replacement rules (if any), and timelines are defined in a separate agreement, proposal, or written confirmation.",
          "No information on this website constitutes a binding offer unless explicitly stated in writing.",
        ],

        s4t: "4. No Guarantee of Results",
        s4a: [
          "Marketing performance depends on many factors outside our control (market conditions, offer quality, sales process, speed-to-lead, competition, etc.).",
          "We do not guarantee a specific number of leads, conversion rate, revenue, or business outcome unless expressly agreed in writing.",
        ],

        s5t: "5. Client Responsibilities",
        s5a: [
          "You agree to provide accurate information when submitting forms or working with us.",
          "You are responsible for your internal sales process (including contacting leads promptly) and compliance with applicable laws in your jurisdiction.",
          "You are responsible for using leads ethically and in compliance with anti-spam, consumer protection, and privacy laws.",
        ],

        s6t: "6. Prohibited Use",
        s6a: [
          "You may not use the Service for unlawful purposes, harassment, fraud, or to violate the rights of others.",
          "You may not attempt to disrupt, reverse engineer, or compromise the security of the website or systems.",
        ],

        s7t: "7. Intellectual Property",
        s7a: [
          "All website content (text, branding, design, logos, visuals) is owned by Leads Podium or its licensors and protected by applicable intellectual property laws.",
          "You may not copy, reproduce, distribute, or create derivative works without prior written permission.",
        ],

        s8t: "8. Third-Party Services",
        s8:
          "We may use third-party providers (hosting, analytics, CRM, communication tools). Your use of third-party services may be subject to their own terms and policies.",

        s9t: "9. Privacy",
        s9:
          "Your use of the Service is also governed by our Privacy Policy and Cookie Policy. Please review them for details on how we collect and use data.",

        s10t: "10. Disclaimers",
        s10a: [
          "The Service is provided on an “as is” and “as available” basis.",
          "To the maximum extent permitted by law, we disclaim all warranties, express or implied, including fitness for a particular purpose and non-infringement.",
        ],

        s11t: "11. Limitation of Liability",
        s11a: [
          "To the maximum extent permitted by law, Leads Podium shall not be liable for indirect, incidental, special, consequential, or punitive damages.",
          "Our total liability for any claim related to the Service shall not exceed the amount paid to us for the relevant service in the three (3) months preceding the event giving rise to the claim (unless a different limitation is required by law).",
        ],

        s12t: "12. Indemnification",
        s12:
          "You agree to defend and indemnify Leads Podium against claims arising from your misuse of the Service, your violation of these Terms, or your violation of applicable laws.",

        s13t: "13. Termination",
        s13:
          "We may suspend or terminate access to the Service if we reasonably believe there has been a violation of these Terms or misuse of the Service.",

        s14t: "14. Changes to the Terms",
        s14:
          "We may update these Terms from time to time. The updated version will be posted on this page with an updated “Last updated” date.",

        s15t: "15. Contact",
        s15:
          "If you have questions about these Terms, contact us at: sales@leadspodium.com",
      },

      fr: {
        title: "Conditions d’utilisation",
        lastUpdate: "Dernière mise à jour : janvier 2025",
        intro:
          "Les présentes Conditions d’utilisation (« Conditions ») régissent l’accès et l’utilisation du site et des services Leads Podium (le « Service »). En accédant au Service, vous acceptez ces Conditions.",

        s1t: "1. Qui sommes-nous ?",
        s1:
          "Leads Podium propose des services de génération de leads et de marketing pour entreprises. Le site présente nos services et peut permettre de nous contacter via des formulaires.",

        s2t: "2. Éligibilité",
        s2:
          "Vous devez avoir au moins 18 ans et disposer de l’autorité nécessaire pour accepter ces Conditions pour vous-même ou pour votre société.",

        s3t: "3. Périmètre du Service",
        s3a: [
          "Leads Podium peut fournir : stratégie marketing, création de tunnels, acquisition de trafic, qualification et livraison de leads.",
          "Les livrables, tarifs, volumes, définitions de lead, règles de remplacement (si applicables) et délais sont précisés dans une proposition, un devis ou un accord séparé.",
          "Aucune information sur ce site ne constitue une offre ferme sauf mention écrite explicite.",
        ],

        s4t: "4. Absence de garantie de résultats",
        s4a: [
          "Les performances marketing dépendent de facteurs hors de notre contrôle (marché, concurrence, offre, process commercial, rapidité de rappel, etc.).",
          "Nous ne garantissons pas un volume de leads, un taux de conversion, un chiffre d’affaires ou un résultat, sauf accord écrit spécifique.",
        ],

        s5t: "5. Responsabilités du Client",
        s5a: [
          "Vous vous engagez à fournir des informations exactes dans les formulaires et échanges.",
          "Vous êtes responsable de votre processus commercial (notamment la rapidité de contact) et de votre conformité légale.",
          "Vous êtes responsable de l’utilisation des leads dans le respect des lois (anti-spam, protection du consommateur, vie privée, etc.).",
        ],

        s6t: "6. Utilisations interdites",
        s6a: [
          "Il est interdit d’utiliser le Service à des fins illégales, frauduleuses, de harcèlement, ou portant atteinte aux droits d’autrui.",
          "Il est interdit de tenter de perturber, contourner, rétroconcevoir ou compromettre la sécurité du site.",
        ],

        s7t: "7. Propriété intellectuelle",
        s7a: [
          "Les contenus du site (textes, marque, design, logos, visuels) sont la propriété de Leads Podium ou de ses concédants et sont protégés par la loi.",
          "Toute reproduction, distribution ou création de contenus dérivés est interdite sans autorisation écrite préalable.",
        ],

        s8t: "8. Services tiers",
        s8:
          "Nous pouvons utiliser des prestataires (hébergement, analytique, CRM, outils de communication). Votre utilisation de services tiers peut être soumise à leurs conditions.",

        s9t: "9. Données personnelles",
        s9:
          "Votre utilisation du Service est également régie par notre Politique de confidentialité et notre Politique de cookies.",

        s10t: "10. Exclusions de garantie",
        s10a: [
          "Le Service est fourni « en l’état » et « selon disponibilité ».",
          "Dans la limite permise par la loi, nous excluons toute garantie, expresse ou implicite, notamment d’adéquation à un usage particulier et de non-contrefaçon.",
        ],

        s11t: "11. Limitation de responsabilité",
        s11a: [
          "Dans la limite permise par la loi, Leads Podium ne pourra être tenu responsable des dommages indirects, spéciaux, consécutifs ou punitifs.",
          "Notre responsabilité totale au titre d’un litige lié au Service est limitée au montant payé pour le service concerné sur les trois (3) mois précédant l’événement à l’origine de la réclamation (sauf disposition légale impérative contraire).",
        ],

        s12t: "12. Indemnisation",
        s12:
          "Vous acceptez d’indemniser Leads Podium en cas de réclamation liée à votre utilisation du Service, à une violation des présentes Conditions ou des lois applicables.",

        s13t: "13. Suspension / résiliation",
        s13:
          "Nous pouvons suspendre ou résilier l’accès au Service en cas de violation des Conditions ou d’usage abusif.",

        s14t: "14. Modifications",
        s14:
          "Nous pouvons modifier ces Conditions. La version à jour sera publiée sur cette page avec une date de mise à jour.",

        s15t: "15. Contact",
        s15:
          "Pour toute question : sales@leadspodium.com",
      },
    }),
    []
  );

  const t = content[language] ?? content.en;

  const renderListOrParagraph = (val) => {
    if (Array.isArray(val)) {
      return (
        <ul className="list-disc pl-6 space-y-2">
          {val.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{val}</p>;
  };

  const sections = [
    { title: t.s1t, body: t.s1 },
    { title: t.s2t, body: t.s2 },
    { title: t.s3t, body: t.s3a },
    { title: t.s4t, body: t.s4a },
    { title: t.s5t, body: t.s5a },
    { title: t.s6t, body: t.s6a },
    { title: t.s7t, body: t.s7a },
    { title: t.s8t, body: t.s8 },
    { title: t.s9t, body: t.s9 },
    { title: t.s10t, body: t.s10a },
    { title: t.s11t, body: t.s11a },
    { title: t.s12t, body: t.s12 },
    { title: t.s13t, body: t.s13 },
    { title: t.s14t, body: t.s14 },
    { title: t.s15t, body: t.s15 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-display font-extrabold mb-2">{t.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{t.lastUpdate}</p>

      <p className="mb-10">{t.intro}</p>

      <div className="space-y-10">
        {sections.map((s, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-bold mb-3">{s.title}</h2>
            <div className="text-gray-700">{renderListOrParagraph(s.body)}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
