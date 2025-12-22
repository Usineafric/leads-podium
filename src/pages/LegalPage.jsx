import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Target,
  LineChart,
  BadgeCheck,
  FileText,
  ArrowRight,
  Scale,
  Gavel,
  ClipboardCheck,
  CalendarCheck2,
  MapPin,
  Lock,
  Briefcase,
  Building2,
  Users,
  Fingerprint,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Free-to-use external images (Unsplash). You can host locally later if needed.
 */
const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1800&q=80",
  office:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80",
  meeting:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80",
  contract:
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=80",
  city:
    "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1800&q=80",
avatar1: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=96&q=80",
  avatar2: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=96&q=80",
  avatar3: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=96&q=80",
  avatar4: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=96&q=80",

};

const COPY = {
  en: {
    seo: {
      title: "Legal Lead Generation (Case Inquiries & Consultations) | Leads Podium",
      description:
        "Exclusive legal leads delivered in real time: case inquiries, consultation requests, and high-intent prospects. Territory targeting, qualification forms, CRM routing, and outcome-based optimization.",
      keywords:
        "legal leads, attorney leads, law firm lead generation, personal injury leads, immigration leads, family law leads, bankruptcy leads, criminal defense leads, consultation requests",
      ogTitle: "Exclusive Legal Leads — Built for Qualified Consultations",
      ogDescription:
        "Qualification-first funnels + local acquisition + real-time delivery. Built for law firms focused on case quality.",
    },

    badge: "Legal",
    badgeSub: "Case inquiries • Consultations • High-intent prospects",

    heroTitle: "High-intent legal leads that turn into qualified consultations",
    heroSubtitle:
      "We build acquisition systems that generate exclusive consultation requests—optimized for qualification, case fit, and speed-to-lead (not vanity clicks).",
    heroBullets: [
      "100% exclusive leads (never resold).",
      "Smart intake to qualify by case type, urgency, and jurisdiction.",
      "Delivered instantly to CRM or email with clean, structured fields.",
    ],
    heroCtaPrimary: "Schedule a discovery call",
    heroCtaSecondary: "Talk to a specialist",

    trustLine: "Built for serious law firms",
    trustPill: "Exclusive leads • Real-time delivery • Weekly optimization",
    trustNote: "Start lean, validate quality together, then scale what works.",

    rightCard: {
      headerTitle: "Qualification & routing",
      headerPill: "Real-time",
      bannerTitle: "Live inquiry snapshot",
      bannerSubtitle: "Case inquiries matched to your practice areas",
      item1Title: "Immigration consult • Miami, FL",
      item1Text: "Case type captured • Eligibility notes • Timeline captured",
      item2Title: "Personal injury consult • Phoenix, AZ",
      item2Text: "Incident details • Medical status • Urgency captured",
      metric1Label: "Exclusivity",
      metric1Value: "100%",
      metric2Label: "Speed",
      metric2Value: "<5m",
      metric3Label: "Routing",
      metric3Value: "CRM/Email",
      button: "Schedule a discovery call",
    },

    sections: {
      offerBadge: "What you get",
      offerTitle: "A system designed to produce qualified case opportunities",
      offerSubtitle:
        "Everything is engineered around qualification depth, speed-to-lead, and predictable cost per qualified consult.",
      offers: [
        {
          title: "Consultation request funnels",
          text: "Conversion-optimized pages + trust elements + intent-based form flows.",
          icon: CalendarCheck2,
        },
        {
          title: "Case-type qualification",
          text: "Intake tailored to your areas: case type, jurisdiction, urgency, and fit thresholds.",
          icon: ClipboardCheck,
        },
        {
          title: "Local territory targeting",
          text: "ZIP/radius targeting with messaging aligned to city + intent signals.",
          icon: MapPin,
        },
        {
          title: "Reporting that matters",
          text: "We optimize for contact rate, consult booked, and case quality—not vanity CPC.",
          icon: LineChart,
        },
      ],

      howBadge: "How it works",
      howTitle: "A simple system: attract → qualify → route → improve",
      howSubtitle:
        "We don’t optimize for vanity metrics. We optimize for qualified consultations and downstream outcomes.",
      how: [
        {
          step: "01",
          title: "Alignment (areas + rules)",
          text: "Define practice areas, territories, intake rules, and case-fit thresholds.",
        },
        {
          step: "02",
          title: "Funnel build (trust + conversion)",
          text: "Landing pages + intake flows + trust elements + tracking setup.",
        },
        {
          step: "03",
          title: "Multi-channel acquisition",
          text: "Google / Meta / YouTube + retargeting to capture high intent locally.",
        },
        {
          step: "04",
          title: "Real-time delivery + weekly optimization",
          text: "Leads routed instantly; optimization based on outcomes and quality signals.",
        },
      ],

      visuals: {
        creativeTitle: "Trust-first creative that converts",
        targetingTitle: "Territory targeting & segmentation",
        extraTitle: "Case-fit filters",
        extraText:
          "Intake questions designed to reduce low-fit inquiries, so your team focuses on cases you can actually take.",
      },

      statsBadge: "Key levers",
      statsTitle: "What we track to improve inquiry → consultation",
      stats: [
        { label: "Lead exclusivity", value: "100%" },
        { label: "Speed-to-lead goal", value: "< 5 min" },
        { label: "Optimization cadence", value: "Weekly" },
      ],
      statsNote:
        "We track quality signals (call speed, contact rate, qualification rate, consult booking rate) to continuously improve lead-to-consult performance.",

      proofBadge: "Why us",
      proofTitle: "Why legal teams choose Leads Podium",
      proofBullets: [
        "Optimization tied to consults and case quality—not just CPC.",
        "Qualification tuned to your practice areas and thresholds.",
        "Volume aligned to your intake capacity and response speed.",
        "Transparent unit economics before scaling spend.",
      ],
      proofCta: "Book a discovery call",

      faqBadge: "FAQ",
      faqTitle: "Legal Services FAQ",
      faq: [
        {
          q: "Are leads exclusive?",
          a: "Yes. Leads we generate for you are 100% exclusive (not resold).",
        },
        {
          q: "Which practice areas can you support?",
          a: "Common segments include immigration, personal injury, family law, bankruptcy, and other local practices (market-dependent).",
        },
        {
          q: "Can you route leads into my CRM?",
          a: "In most cases yes. Otherwise we deliver structured lead fields via email with clear mapping.",
        },
        {
          q: "What impacts pricing?",
          a: "Competition, practice area, qualification depth, and volume. We validate unit economics before scaling.",
        },
      ],

      finalTitle: "Want a predictable pipeline of qualified consultations in your territory?",
      finalText:
        "Tell us your practice areas, coverage, intake rules, and capacity. We’ll map a viable plan before you scale spend.",
      finalPill: "Exclusive leads • Real-time delivery • Weekly optimization",
    },

    contact: {
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "What we’ll ask on the call",
      items: [
        "Territory + practice areas (case-type mix)",
        "Current intake capacity + response speed",
        "Ideal case-fit rules (what to filter out)",
        "CRM + disposition feedback loop (for optimization)",
      ],
      button: "Schedule a discovery call",
      note: "No commitment. We’ll tell you honestly if your unit economics make sense.",
    },

    testimonials: {
      badge: "Outcomes",
      title: "What teams typically improve when quality is the focus",
      items: [
        {
          name: "Managing Partner",
          role: "Multi-attorney firm",
          text: "Better intake quality and faster routing made a real difference. We spent time on real consults, not noise.",
          avatar: IMAGES.avatar1,
        },
        {
          name: "Intake Manager",
          role: "High-volume practice",
          text: "Qualification questions filtered low-fit inquiries. The team’s consult booking rate improved within weeks.",
          avatar: IMAGES.avatar2,
        },
        {
          name: "Operations Lead",
          role: "Local firm",
          text: "Weekly optimization based on outcomes—not clicks—kept quality stable as we scaled.",
          avatar: IMAGES.avatar3,
        },
        {
          name: "Marketing Lead",
          role: "Legal services",
          text: "Clean CRM mapping and consistent fields. Everyone finally trusted the data and process.",
          avatar: IMAGES.avatar4,
        },
      ],
    },

    compliance: {
      badge: "Trust & privacy",
      title: "Built with privacy-minded tracking and clean data handling",
      items: [
        {
          icon: Lock,
          title: "Data minimization",
          text: "We only collect what’s needed for qualification and routing. No unnecessary fields.",
        },
        {
          icon: FileText,
          title: "Clear consent language",
          text: "Intake flows designed with transparency so expectations stay aligned.",
        },
        {
          icon: ShieldCheck,
          title: "Clean CRM delivery",
          text: "Consistent field mapping and structured payloads reduce errors and improve speed-to-lead.",
        },
      ],
      note:
        "Reminder: Each firm has its own policies. We’ll align intake fields and routing to your internal requirements.",
    },
  },

  fr: {
    seo: {
      title: "Leads Juridique (demandes dossiers & consultations) | Leads Podium",
      description:
        "Leads juridiques exclusifs livrés en temps réel : demandes de dossier, consultations et prospects à forte intention. Ciblage local, qualification, routage CRM et optimisation orientée résultats.",
      keywords:
        "leads avocat, leads juridique, génération de leads cabinet d'avocats, leads immigration, leads préjudice corporel, leads droit de la famille, leads faillite, leads pénal, demandes consultation",
      ogTitle: "Leads Juridique exclusifs — pensés pour des consultations qualifiées",
      ogDescription:
        "Funnels orientés qualification + acquisition locale + livraison temps réel. Pour les cabinets qui priorisent la qualité.",
    },

    badge: "Legal",
    badgeSub: "Demandes dossier • Consultations • Forte intention",

    heroTitle: "Des leads juridiques à forte intention qui deviennent des consultations qualifiées",
    heroSubtitle:
      "Nous construisons des systèmes d’acquisition qui génèrent des demandes de consultation exclusives — optimisées pour la qualification, le fit dossier et la rapidité de rappel (pas les métriques de vanité).",
    heroBullets: [
      "100% leads exclusifs (jamais revendus).",
      "Intake intelligent : type de dossier, urgence, juridiction, fit.",
      "Livraison instantanée vers CRM ou email, avec champs structurés.",
    ],
    heroCtaPrimary: "Planifier un call de découverte",
    heroCtaSecondary: "Parler à un spécialiste",

    trustLine: "Conçu pour les cabinets sérieux",
    trustPill: "Leads exclusifs • Livraison temps réel • Optimisation hebdo",
    trustNote: "On démarre petit, on valide ensemble, puis on scale ce qui fonctionne.",

    rightCard: {
      headerTitle: "Qualification & routage",
      headerPill: "Temps réel",
      bannerTitle: "Aperçu d’une demande",
      bannerSubtitle: "Demandes alignées à vos domaines",
      item1Title: "Consult immigration • Miami, FL",
      item1Text: "Type capturé • Notes éligibilité • Délai capturé",
      item2Title: "Consult préjudice • Phoenix, AZ",
      item2Text: "Détails incident • État médical • Urgence capturée",
      metric1Label: "Exclusivité",
      metric1Value: "100%",
      metric2Label: "Vitesse",
      metric2Value: "<5m",
      metric3Label: "Routage",
      metric3Value: "CRM/Email",
      button: "Planifier un call de découverte",
    },

    sections: {
      offerBadge: "Ce que vous obtenez",
      offerTitle: "Un système conçu pour générer des opportunités dossiers qualifiées",
      offerSubtitle:
        "Tout est pensé autour de la profondeur de qualification, de la rapidité de rappel et d’un coût par consultation maîtrisé.",
      offers: [
        {
          title: "Funnels de demande de consultation",
          text: "Pages convertissantes + éléments de confiance + flows par intention.",
          icon: CalendarCheck2,
        },
        {
          title: "Qualification par type de dossier",
          text: "Intake adapté : type, juridiction, urgence et seuils de fit.",
          icon: ClipboardCheck,
        },
        {
          title: "Ciblage local",
          text: "Ciblage ZIP/rayon et messages alignés à la ville + signaux d’intention.",
          icon: MapPin,
        },
        {
          title: "Reporting utile",
          text: "Optimisation sur contact / consultation / qualité — pas le CPC.",
          icon: LineChart,
        },
      ],

      howBadge: "Process",
      howTitle: "Un système simple : attirer → qualifier → router → améliorer",
      howSubtitle:
        "On n’optimise pas les métriques de vanité. On optimise les consultations qualifiées et la performance réelle.",
      how: [
        {
          step: "01",
          title: "Alignement (domaines + règles)",
          text: "Domaines, zones, règles d’intake et seuils de fit dossier.",
        },
        {
          step: "02",
          title: "Construction du funnel (confiance + conversion)",
          text: "Landing pages + intake + confiance + tracking.",
        },
        {
          step: "03",
          title: "Acquisition multi-canal",
          text: "Google / Meta / YouTube + retargeting pour capter l’intention locale.",
        },
        {
          step: "04",
          title: "Livraison + optimisation hebdo",
          text: "Routage temps réel ; optimisations basées sur les résultats et signaux qualité.",
        },
      ],

      visuals: {
        creativeTitle: "Créa orientée confiance",
        targetingTitle: "Ciblage & segmentation",
        extraTitle: "Filtres de fit dossier",
        extraText:
          "Des questions d’intake pour réduire le bruit et concentrer l’équipe sur les dossiers réellement compatibles.",
      },

      statsBadge: "Essentiel",
      statsTitle: "Ce que nous suivons pour améliorer demande → consultation",
      stats: [
        { label: "Exclusivité lead", value: "100%" },
        { label: "Objectif rappel", value: "< 5 min" },
        { label: "Cadence d’optimisation", value: "Hebdo" },
      ],
      statsNote:
        "Nous suivons des signaux qualité (rapidité de rappel, taux de contact, qualification, taux de consultation) afin d’améliorer en continu.",

      proofBadge: "Pourquoi nous",
      proofTitle: "Pourquoi les équipes juridiques nous choisissent",
      proofBullets: [
        "Optimisation sur consultations et qualité — pas uniquement le CPC.",
        "Qualification alignée à vos domaines et seuils.",
        "Volume aligné à votre capacité d’intake et vitesse de réponse.",
        "Économie transparente avant de scaler le budget.",
      ],
      proofCta: "Planifier un call de découverte",

      faqBadge: "FAQ",
      faqTitle: "FAQ Legal",
      faq: [
        {
          q: "Les leads sont-ils exclusifs ?",
          a: "Oui. 100% des leads générés pour vous sont exclusifs (non revendus).",
        },
        {
          q: "Quels domaines pouvez-vous couvrir ?",
          a: "Exemples : immigration, préjudice corporel, droit de la famille, faillite, pénal… (selon marché).",
        },
        {
          q: "Pouvez-vous livrer dans mon CRM ?",
          a: "Dans la plupart des cas oui. Sinon livraison email structurée avec mapping clair.",
        },
        {
          q: "Qu’est-ce qui impacte le tarif ?",
          a: "Concurrence, domaine, profondeur de qualification et volume. On valide l’économie avant de scaler.",
        },
      ],

      finalTitle: "Envie d’un pipeline de consultations qualifiées sur votre zone ?",
      finalText:
        "Dites-nous vos domaines, zones, règles d’intake et capacité. On construit un plan viable avant de scaler.",
      finalPill: "Leads exclusifs • Livraison temps réel • Optimisation hebdo",
    },

    contact: {
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "Ce que nous aborderons lors de l’appel",
      items: [
        "Zones + domaines (mix dossiers)",
        "Capacité intake + vitesse de réponse",
        "Règles de fit dossier (à filtrer)",
        "CRM + boucle de feedback (dispositions)",
      ],
      button: "Planifier un call de découverte",
      note: "Sans engagement. On te dira honnêtement si l’économie est viable.",
    },

    testimonials: {
      badge: "Résultats",
      title: "Ce qui s’améliore quand on se concentre sur la qualité",
      items: [
        {
          name: "Associé",
          role: "Cabinet multi-avocats",
          text: "Meilleure qualité d’intake et routage plus rapide. Moins de bruit, plus de vraies consultations.",
          avatar: IMAGES.avatar1,
        },
        {
          name: "Responsable intake",
          role: "Cabinet volume",
          text: "Les questions ont filtré les demandes hors cible. Le taux de consultation a monté rapidement.",
          avatar: IMAGES.avatar2,
        },
        {
          name: "Ops",
          role: "Cabinet local",
          text: "Optimisation hebdo sur les résultats (pas les clics). La qualité reste stable en scalant.",
          avatar: IMAGES.avatar3,
        },
        {
          name: "Marketing",
          role: "Legal services",
          text: "Mapping CRM propre et champs cohérents. Tout le monde fait enfin confiance au process.",
          avatar: IMAGES.avatar4,
        },
      ],
    },

    compliance: {
      badge: "Confiance & confidentialité",
      title: "Tracking orienté confidentialité et données propres",
      items: [
        {
          icon: Lock,
          title: "Données minimales",
          text: "On collecte uniquement ce qui est nécessaire pour qualifier et router.",
        },
        {
          icon: FileText,
          title: "Consentement clair",
          text: "Formulations transparentes pour aligner les attentes.",
        },
        {
          icon: ShieldCheck,
          title: "Livraison CRM propre",
          text: "Mapping cohérent et payloads structurés pour réduire les erreurs et gagner en vitesse.",
        },
      ],
      note:
        "Rappel : chaque cabinet a ses propres politiques. On aligne les champs et le routage à vos exigences.",
    },
  },
};

function upsertMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertOg(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function LegalPage() {
  const { language } = useLanguage();
  const t = useMemo(() => COPY[language] ?? COPY.en, [language]);
  const p = t.sections;

  useEffect(() => {
    document.title = t.seo.title;
    upsertMeta("description", t.seo.description);
    upsertMeta("keywords", t.seo.keywords);
    upsertOg("og:title", t.seo.ogTitle);
    upsertOg("og:description", t.seo.ogDescription);
    upsertOg("og:type", "website");

    const id = "ld-json-legal";
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Leads Podium",
      description: t.seo.description,
      areaServed: ["US", "CA"],
      telephone: t.contact.phoneValue,
      url: window.location.href,
      serviceType: "Legal lead generation",
    });
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, [t]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-50 bg-white shadow-sm">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={IMAGES.hero}
            alt={t.badge}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/10" />
        </div>

        <div className="relative grid lg:grid-cols-2 gap-10 p-8 md:p-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 text-white border border-white/15 px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span>{t.badge}</span>
              <span className="opacity-70">•</span>
              <span className="opacity-90">{t.badgeSub}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-white/85 max-w-xl leading-relaxed">
              {t.heroSubtitle}
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/90">
              {t.heroBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex gap-3 flex-wrap">
              <Link
                to="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
              >
                {t.heroCtaPrimary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href="tel:15614760504"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-white/40 transition"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t.heroCtaSecondary}
              </a>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold text-white/80">{t.trustLine}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-white/90 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                  {t.trustPill}
                </span>
                <span className="text-xs text-white/70">{t.trustNote}</span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="rounded-3xl bg-white/90 backdrop-blur border border-white/20 shadow-xl overflow-hidden">
              <div className="relative h-40">
                <img
                  src={IMAGES.meeting}
                  alt={t.rightCard.bannerTitle}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <p className="text-xs font-semibold flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-emerald-300" />
                    {t.rightCard.bannerTitle}
                  </p>
                  <p className="text-[11px] text-white/80">
                    {t.rightCard.bannerSubtitle}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-slate-700">
                    {t.rightCard.headerTitle}
                  </div>
                  <span className="text-[11px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    {t.rightCard.headerPill}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="font-semibold text-slate-900">
                      {t.rightCard.item1Title}
                    </div>
                    <div className="text-slate-600 text-xs mt-1">
                      {t.rightCard.item1Text}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="font-semibold text-slate-900">
                      {t.rightCard.item2Title}
                    </div>
                    <div className="text-slate-600 text-xs mt-1">
                      {t.rightCard.item2Text}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="rounded-2xl bg-white border border-slate-100 p-3 text-center">
                    <div className="text-xs text-slate-500">
                      {t.rightCard.metric1Label}
                    </div>
                    <div className="font-extrabold text-slate-900">
                      {t.rightCard.metric1Value}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white border border-slate-100 p-3 text-center">
                    <div className="text-xs text-slate-500">
                      {t.rightCard.metric2Label}
                    </div>
                    <div className="font-extrabold text-slate-900">
                      {t.rightCard.metric2Value}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white border border-slate-100 p-3 text-center">
                    <div className="text-xs text-slate-500">
                      {t.rightCard.metric3Label}
                    </div>
                    <div className="font-extrabold text-slate-900">
                      {t.rightCard.metric3Value}
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 text-sm font-semibold transition"
                >
                  {t.rightCard.button}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold text-indigo-600">{p.offerBadge}</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold tracking-tight">
            {p.offerTitle}
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            {p.offerSubtitle}
          </p>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {p.offers.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <o.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="mt-4 font-bold">{o.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{o.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <img
              src={IMAGES.office}
              alt={p.visuals.creativeTitle}
              className="w-full h-[380px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <Target className="w-4 h-4" />
                {p.visuals.creativeTitle}
              </div>
              <p className="mt-3 text-sm text-white/85 max-w-lg">
                Trust elements + clear expectations + qualification prompts—designed to reduce low-fit noise.
              </p>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="font-bold">{p.visuals.targetingTitle}</div>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Territory segmentation by ZIP/radius, practice area, and urgency—so the right inquiries reach your intake team.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center">
                  <Fingerprint className="w-5 h-5 text-violet-600" />
                </div>
                <div className="font-bold">{p.visuals.extraTitle}</div>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.visuals.extraText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="rounded-3xl border border-gray-100 bg-white p-8 md:p-12 shadow-sm">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-indigo-600">{p.howBadge}</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold tracking-tight">
            {p.howTitle}
          </h2>
          <p className="mt-4 text-gray-600">{p.howSubtitle}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-4 gap-5">
          {p.how.map((s) => (
            <div key={s.step} className="rounded-2xl border border-gray-100 p-6">
              <div className="text-xs font-extrabold text-indigo-600">{s.step}</div>
              <div className="mt-2 font-bold">{s.title}</div>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white">
            <img
              src={IMAGES.contract}
              alt="Intake quality"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <p className="text-xs font-semibold flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-200" />
                Intake built for case fit
              </p>
              <p className="text-[12px] text-white/80 mt-1">
                Capture the details that matter so your team can qualify quickly.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white">
            <img
              src={IMAGES.city}
              alt="Local targeting"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <p className="text-xs font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-200" />
                Local intent capture
              </p>
              <p className="text-[12px] text-white/80 mt-1">
                Tailor messaging by city and urgency signals to improve consult quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + CHECKLIST + COMPLIANCE */}
      <section className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold text-indigo-600">{p.statsBadge}</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold tracking-tight">
            {p.statsTitle}
          </h2>
          <p className="mt-4 text-gray-600">{p.statsNote}</p>

          <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="font-bold flex items-center gap-2">
              <Gavel className="w-5 h-5 text-indigo-600" />
              {t.callChecklist.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {t.callChecklist.items.map((it, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3 flex-wrap">
              <Link
                to="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
              >
                {t.callChecklist.button}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:15614760504"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold text-slate-900 hover:border-gray-300 transition"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t.contact.phoneValue}
              </a>
            </div>

            <p className="mt-3 text-xs text-gray-500">{t.callChecklist.note}</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-3 gap-4">
            {p.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="text-xs text-gray-500">{s.label}</div>
                <div className="mt-2 text-2xl font-extrabold">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold text-indigo-600">{t.compliance.badge}</p>
            <h3 className="mt-2 text-xl md:text-2xl font-extrabold tracking-tight">
              {t.compliance.title}
            </h3>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {t.compliance.items.map((it) => (
                <div key={it.title} className="rounded-2xl border border-gray-100 p-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center">
                    <it.icon className="w-5 h-5 text-slate-800" />
                  </div>
                  <div className="mt-4 font-bold">{it.title}</div>
                  <p className="mt-2 text-sm text-gray-600">{it.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-2 text-sm text-gray-600">
              <ShieldCheck className="w-4 h-4 mt-0.5 text-emerald-600" />
              <span>{t.compliance.note}</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US + TESTIMONIALS (balanced layout like your Healthcare fix) */}
      <section className="rounded-3xl border border-gray-100 bg-white p-8 md:p-12 shadow-sm">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-indigo-600">{p.proofBadge}</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold tracking-tight">
            {p.proofTitle}
          </h2>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm space-y-3">
            {p.proofBullets.map((b, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-gray-700">{b}</p>
              </div>
            ))}

            <div className="pt-4">
              <Link
                to="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
              >
                {p.proofCta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-slate-50 p-6">
            <p className="text-xs font-semibold text-indigo-600">{t.testimonials.badge}</p>
            <h3 className="mt-2 text-lg font-extrabold">{t.testimonials.title}</h3>

            <div className="mt-5 grid md:grid-cols-2 gap-4">
              {t.testimonials.items.map((it) => (
                <div key={it.name} className="rounded-2xl bg-white border border-gray-100 p-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={it.avatar}
                      alt={it.name}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-sm">{it.name}</div>
                      <div className="text-xs text-gray-500">{it.role}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">“{it.text}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-3xl border border-gray-100 bg-white p-8 md:p-12 shadow-sm">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-indigo-600">{p.faqBadge}</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            {p.faqTitle}
          </h2>

          <div className="mt-7 space-y-4">
            {p.faq.map((f) => (
              <div key={f.q} className="rounded-2xl border border-gray-100 p-5">
                <p className="font-bold">{f.q}</p>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-slate-950 text-white shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/35 via-violet-600/15 to-transparent" />
        <div className="relative p-8 md:p-12">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            {p.finalTitle}
          </h2>
          <p className="mt-3 text-white/85 max-w-2xl">{p.finalText}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
            <CheckCircle2 className="w-4 h-4" />
            {p.finalPill}
          </div>

          <div className="mt-7 flex gap-3 flex-wrap">
            <Link
              to="/#pricing"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
            >
              {t.callChecklist.button}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:15614760504"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-white/40 transition"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.contact.phoneValue}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT ANCHOR */}
      <div id="contact" className="sr-only" />
    </div>
  );
}
