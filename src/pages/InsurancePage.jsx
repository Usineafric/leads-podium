import React, { useEffect, useMemo } from "react";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Target,
  Users,
  LineChart,
  BadgeCheck,
  FileText,
  RefreshCcw,
  ArrowRight,
  Car,
  HeartPulse,
  Home,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Free-to-use external images (Unsplash). You can download and host locally later if needed.
 */
const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80",
  meeting:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80",
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
  map:
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=80",
  avatar1:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=96&q=80",
  avatar2:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80",
  avatar3:
    "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=96&q=80",
  avatar4:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80",
};

const COPY = {
  en: {
    seo: {
      title: "Insurance Lead Generation (Quotes & Policy Inquiries) | Leads Podium",
      description:
        "Exclusive insurance leads delivered in real time: quote requests, renewals and high-intent inbound prospects. Funnels, multi-channel acquisition, compliance-minded tracking, CRM delivery.",
      keywords:
        "insurance leads, insurance quote leads, auto insurance leads, home insurance leads, life insurance leads, health insurance leads, policy renewal leads, lead generation",
      ogTitle: "Exclusive Insurance Leads — Built for Bind",
      ogDescription:
        "High-intent quote funnels + multi-channel traffic + real-time delivery. Built for agents and brokerages that care about quality.",
    },

    badge: "Insurance",
    badgeSub: "Quotes • Renewals • High-intent calls",

    heroTitle: "High-intent insurance leads that turn into bound policies",
    heroSubtitle:
      "We build acquisition funnels that generate exclusive quote requests and policy inquiries—optimized for call speed, qualification and bind rate (not vanity metrics).",
    heroBullets: [
      "100% exclusive leads (never resold).",
      "Smart intake forms to qualify by coverage, location, and timeline.",
      "Delivered instantly to your CRM or email, with clear data fields.",
    ],
    heroCtaPrimary: "Schedule a discovery call",
    heroCtaSecondary: "Talk to a specialist",

    trustLine: "Built for serious agencies",
    trustPill: "Quality-first, performance-driven",
    trustNote: "Start lean, validate quality together, then scale what works.",

    rightCard: {
      headerTitle: "Qualification & delivery",
      headerPill: "Real-time",
      bannerTitle: "Live lead snapshot",
      bannerSubtitle: "Quote requests matched to your appetite",
      item1Title: "Auto quote • Tampa, FL",
      item1Text: "Coverage: Full • Drivers: 2 • Timeline: 7 days",
      item2Title: "Home quote • Dallas, TX",
      item2Text: "Home type captured • Current insurer captured • Renewal window",
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
      offerTitle: "A lead system designed around bind rate",
      offerSubtitle:
        "Everything is engineered around lead intent, call speed and predictable cost per qualified opportunity.",
      offers: [
        {
          title: "Quote request funnels",
          text: "High-intent forms tuned for coverage type, location and urgency.",
          icon: FileText,
        },
        {
          title: "Call-first lead flow",
          text: "Real-time delivery + clear field mapping to help you respond fast.",
          icon: Phone,
        },
        {
          title: "Renewal & win-back",
          text: "Campaigns targeting shoppers and renewal windows to lift retention.",
          icon: RefreshCcw,
        },
        {
          title: "Segmentation & routing",
          text: "Route leads by product line, ZIP, carrier appetite, or office/team.",
          icon: Target,
        },
      ],

      productLinesBadge: "Product lines",
      productLinesTitle: "The insurance lines we can support",
      productLinesSubtitle:
        "We tailor messaging and qualification by line of business to maximize close probability.",
      productLines: [
        { title: "Auto", text: "Drivers, vehicles, coverage level, timeline.", icon: Car },
        { title: "Home", text: "Property type, occupancy, renewal window.", icon: Home },
        { title: "Life", text: "Coverage amount intent, timeline, consult request.", icon: Briefcase },
        { title: "Health", text: "Eligibility context + consult scheduling (where applicable).", icon: HeartPulse },
      ],

      processBadge: "How it works",
      processTitle: "From strategy to lead delivery in 4 steps",
      process: [
        {
          title: "Offer + appetite alignment",
          text: "We define ICP, territories, lines, and qualification rules that match your appetite.",
        },
        {
          title: "Funnel build (high conversion)",
          text: "Landing pages + intake questions + validation—built to produce clean, usable leads.",
        },
        {
          title: "Multi-channel acquisition",
          text: "Google / Meta / YouTube + retargeting, tuned to insurance-intent signals.",
        },
        {
          title: "Delivery + optimization loop",
          text: "Real-time delivery, speed-to-lead targets and weekly tuning to improve bind rate.",
        },
      ],

      visuals: {
        creativeTitle: "Creative & messaging built for trust",
        targetingTitle: "Territory targeting & segmentation",
      },

      statsBadge: "What matters",
      statsTitle: "Performance pillars we optimize",
      stats: [
        { label: "Exclusive leads", value: "100%" },
        { label: "Reply time target", value: "< 5 min" },
        { label: "Optimization cadence", value: "Weekly" },
      ],
      statsNote:
        "We monitor quality signals (call speed, qualification rate, appointment rate, bind feedback) to continuously improve lead-to-policy performance.",

      proofBadge: "Why Leads Podium",
      proofTitle: "Why insurance agencies choose us",
      proofBullets: [
        "Funnels engineered for qualified quote intent (not cheap form fills).",
        "Clear field mapping: coverage type, timeline, location, and context.",
        "Volume aligned to your team capacity and call speed targets.",
        "Radical transparency on what’s working and what’s not.",
      ],
      proofCta: "Schedule a discovery call",

      faqBadge: "FAQ",
      faqTitle: "Insurance FAQ",
      faq: [
        {
          q: "Are the leads exclusive?",
          a: "Yes. Leads generated for you are exclusive and not sold to competitors.",
        },
        {
          q: "What products can you run?",
          a: "We can support common lines like auto, home, life and health (depending on your market and appetite).",
        },
        {
          q: "How are pricing and volume defined?",
          a: "It depends on market competition, product line, qualification depth and monthly volume. We validate economics before scaling.",
        },
        {
          q: "Can you send leads to my CRM?",
          a: "In most cases, yes. Otherwise, we can deliver by email in a structured format with consistent fields.",
        },
      ],

      finalTitle: "Want a realistic lead plan that matches your appetite?",
      finalText:
        "Tell us your products, territories, close process and capacity. We’ll build a plan that makes sense before spending serious budget.",
      finalPill: "Exclusive leads • Real-time delivery • Weekly optimization",
    },

    contact: {
      phoneLabel: "Phone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "What we’ll ask on the call",
      items: [
        "Territory + product line mix (auto/home/life/health)",
        "Capacity (how many leads you can handle monthly) + speed-to-lead process",
        "Qualification rules (coverage, underwriting appetite, timeline)",
        "CRM or workflow for call handling + disposition feedback",
      ],
      button: "Schedule a discovery call",
      note:
        "No commitment. We’ll tell you honestly if your market economics make sense.",
    },
  },

  fr: {
    seo: {
      title: "Génération de leads assurance (devis & demandes) | Leads Podium",
      description:
        "Leads assurance exclusifs livrés en temps réel : demandes de devis, renouvellements, prospects à forte intention. Tunnels, acquisition multi-canal, tracking orienté performance, livraison CRM.",
      keywords:
        "leads assurance, leads devis assurance, leads auto, leads habitation, leads vie, leads santé, renouvellement assurance, génération de leads",
      ogTitle: "Leads Assurance Exclusifs — Pensés pour signer",
      ogDescription:
        "Tunnels à forte intention + acquisition multi-canal + livraison instantanée. Pour agents et courtiers orientés qualité.",
    },

    badge: "Assurance",
    badgeSub: "Devis • Renouvellements • Appels qualifiés",

    heroTitle: "Des leads assurance à forte intention qui se transforment en contrats",
    heroSubtitle:
      "Nous construisons des tunnels d’acquisition qui génèrent des demandes de devis et des prises de contact exclusives—optimisés pour la rapidité de rappel, la qualification et le taux de signature (pas des métriques de vanité).",
    heroBullets: [
      "Leads 100% exclusifs (jamais revendus).",
      "Formulaires intelligents : couverture, zone, échéance, urgence.",
      "Livraison instantanée dans votre CRM ou par email avec champs clairs.",
    ],
    heroCtaPrimary: "Planifier un call de découverte",
    heroCtaSecondary: "Parler à un spécialiste",

    trustLine: "Pensé pour les agences sérieuses",
    trustPill: "Qualité d’abord, performance ensuite",
    trustNote: "On démarre léger, on valide la qualité, puis on scale ce qui fonctionne.",

    rightCard: {
      headerTitle: "Qualification & livraison",
      headerPill: "Temps réel",
      bannerTitle: "Aperçu leads en direct",
      bannerSubtitle: "Demandes de devis alignées à votre appétence",
      item1Title: "Devis auto • Tampa, FL",
      item1Text: "Couverture : complète • Conducteurs : 2 • Délai : 7 jours",
      item2Title: "Devis habitation • Dallas, TX",
      item2Text: "Type de logement • Assureur actuel • Fenêtre de renouvellement",
      metric1Label: "Exclusivité",
      metric1Value: "100%",
      metric2Label: "Vitesse",
      metric2Value: "<5 min",
      metric3Label: "Routage",
      metric3Value: "CRM/Email",
      button: "Planifier un call de découverte",
    },

    sections: {
      offerBadge: "Ce que vous obtenez",
      offerTitle: "Un système de leads conçu pour le taux de signature",
      offerSubtitle:
        "Tout est pensé autour de l’intention, de la rapidité de rappel et d’un coût par opportunité qualifiée maîtrisé.",
      offers: [
        {
          title: "Tunnels “demande de devis”",
          text: "Formulaires à forte intention (couverture, zone, urgence).",
          icon: FileText,
        },
        {
          title: "Flux orienté appel",
          text: "Livraison temps réel + champs clairs pour rappeler vite.",
          icon: Phone,
        },
        {
          title: "Renouvellement & win-back",
          text: "Campagnes pour capter les shoppers et fenêtres d’échéance.",
          icon: RefreshCcw,
        },
        {
          title: "Segmentation & routage",
          text: "Routage par produit, ZIP, appétence assureur, équipe/office.",
          icon: Target,
        },
      ],

      productLinesBadge: "Lignes de produits",
      productLinesTitle: "Les produits assurance que nous pouvons activer",
      productLinesSubtitle:
        "Messages et qualification sont adaptés à chaque ligne pour maximiser la probabilité de signature.",
      productLines: [
        { title: "Auto", text: "Conducteurs, véhicules, niveau de couverture, échéance.", icon: Car },
        { title: "Habitation", text: "Type de bien, occupation, échéance / renouvellement.", icon: Home },
        { title: "Vie", text: "Intention sur montant, délai, demande de conseil.", icon: Briefcase },
        { title: "Santé", text: "Contexte + prise de RDV (selon cas et marché).", icon: HeartPulse },
      ],

      processBadge: "Méthode",
      processTitle: "De la stratégie à la livraison des leads en 4 étapes",
      process: [
        {
          title: "Alignement offre & appétence",
          text: "Définition ICP, zones, produits et règles de qualification.",
        },
        {
          title: "Construction du tunnel (conversion)",
          text: "Landing pages + questions + validation—pour des leads propres et exploitables.",
        },
        {
          title: "Acquisition multi-canal",
          text: "Google / Meta / YouTube + retargeting, orienté signaux d’intention assurance.",
        },
        {
          title: "Livraison + boucle d’optimisation",
          text: "Livraison temps réel, objectifs de rappel et optimisation hebdo pour améliorer le taux de signature.",
        },
      ],

      visuals: {
        creativeTitle: "Créa & messages pensés pour la confiance",
        targetingTitle: "Ciblage géographique & segmentation",
      },

      statsBadge: "Essentiel",
      statsTitle: "Les piliers que nous optimisons",
      stats: [
        { label: "Leads exclusifs", value: "100%" },
        { label: "Objectif de rappel", value: "< 5 min" },
        { label: "Rythme d’optimisation", value: "Hebdomadaire" },
      ],
      statsNote:
        "Nous suivons des indicateurs de qualité (rapidité de rappel, taux de qualification, taux de RDV, retours signature) afin d’améliorer en continu la conversion lead → contrat.",

      proofBadge: "Pourquoi nous",
      proofTitle: "Pourquoi les agences assurance nous choisissent",
      proofBullets: [
        "Tunnels conçus pour l’intention (pas des formulaires “cheap”).",
        "Champs exploitables : produit, échéance, zone, contexte.",
        "Volume aligné à votre capacité commerciale et votre vitesse de rappel.",
        "Transparence sur ce qui fonctionne et ce qui ne fonctionne pas.",
      ],
      proofCta: "Planifier un call de découverte",

      faqBadge: "FAQ",
      faqTitle: "FAQ Assurance",
      faq: [
        {
          q: "Les leads sont-ils exclusifs ?",
          a: "Oui. Les leads générés pour vous sont exclusifs et non revendus à des concurrents.",
        },
        {
          q: "Quels produits pouvez-vous activer ?",
          a: "Nous pouvons couvrir des lignes courantes : auto, habitation, vie, santé (selon marché et appétence).",
        },
        {
          q: "Comment sont fixés tarif et volume ?",
          a: "Selon concurrence, produit, profondeur de qualification et volume mensuel. On valide l’économie avant de scaler.",
        },
        {
          q: "Pouvez-vous envoyer les leads dans mon CRM ?",
          a: "Dans la plupart des cas oui. Sinon livraison email structurée avec champs cohérents.",
        },
      ],

      finalTitle: "Envie d’un plan de leads réaliste, aligné à votre appétence ?",
      finalText:
        "Parlez-nous de vos produits, zones, process de vente et capacité. On construit un plan viable avant d’engager un budget significatif.",
      finalPill: "Leads exclusifs • Livraison en temps réel • Optimisation hebdo",
    },

    contact: {
      phoneLabel: "Téléphone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "Ce que nous aborderons lors de l’appel",
      items: [
        "Zones + mix produits (auto/habitation/vie/santé)",
        "Capacité (volume mensuel) + process de rappel",
        "Règles de qualification (couverture, appétence, échéance)",
        "CRM / workflow d’appels + retours de disposition",
      ],
      button: "Planifier un call de découverte",
      note:
        "Sans engagement. On vous dira clairement si l’économie de votre marché tient la route.",
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

export default function InsurancePage() {
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

    const id = "ld-json-insurance";
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
      serviceType: "Insurance lead generation",
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
        <div className="absolute inset-0">
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

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${t.contact.phoneValue}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
              >
                <Phone className="w-4 h-4" />
                {t.heroCtaSecondary}
              </a>
              <a
                href="#discovery"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-700 transition"
              >
                {t.heroCtaPrimary}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8">
              <p className="text-white/85 text-sm font-semibold">{t.trustLine}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-white/10 text-white border border-white/15 px-3 py-1.5 rounded-full">
                  {t.trustPill}
                </span>
                <span className="text-xs font-semibold bg-white/10 text-white border border-white/15 px-3 py-1.5 rounded-full">
                  {t.trustNote}
                </span>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-white/95 backdrop-blur rounded-3xl border border-white/30 shadow-xl p-6 md:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900">{t.rightCard.headerTitle}</p>
                <p className="text-xs text-slate-500">{t.rightCard.headerPill}</p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 rounded-full">
                <BadgeCheck className="w-4 h-4" />
                Live
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 p-4">
              <p className="text-sm font-bold text-slate-900">{t.rightCard.bannerTitle}</p>
              <p className="text-xs text-slate-600 mt-1">{t.rightCard.bannerSubtitle}</p>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-white border border-gray-100 p-3">
                  <p className="text-sm font-semibold text-slate-900">{t.rightCard.item1Title}</p>
                  <p className="text-xs text-slate-600 mt-1">{t.rightCard.item1Text}</p>
                </div>
                <div className="rounded-xl bg-white border border-gray-100 p-3">
                  <p className="text-sm font-semibold text-slate-900">{t.rightCard.item2Title}</p>
                  <p className="text-xs text-slate-600 mt-1">{t.rightCard.item2Text}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: t.rightCard.metric1Label, value: t.rightCard.metric1Value },
                { label: t.rightCard.metric2Label, value: t.rightCard.metric2Value },
                { label: t.rightCard.metric3Label, value: t.rightCard.metric3Value },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-gray-100 bg-white p-3 text-center"
                >
                  <p className="text-xs text-slate-500">{m.label}</p>
                  <p className="text-sm font-extrabold text-slate-900 mt-1">{m.value}</p>
                </div>
              ))}
            </div>

            <a
              href="#discovery"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition"
            >
              {t.rightCard.button}
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-4 text-xs text-slate-500 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 mt-0.5 text-indigo-600" />
              <span>
                {language === "fr"
                  ? "Optimisé pour la qualité et la rapidité de rappel. Pas de leads partagés."
                  : "Optimized for quality and speed-to-lead. No shared leads."}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">{p.offerBadge}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{p.offerTitle}</h2>
          <p className="mt-3 text-gray-600 max-w-xl">{p.offerSubtitle}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {p.offers.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:border-indigo-200 transition"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 mb-3">
                    <Icon className="w-5 h-5 text-indigo-700" />
                  </div>
                  <h3 className="font-bold">{o.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{o.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <img
            src={IMAGES.meeting}
            alt="Insurance team"
            className="w-full h-72 md:h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-slate-950/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 text-white border border-white/15 px-3 py-1.5 rounded-full">
              <Users className="w-4 h-4" />
              {language === "fr" ? "Focus qualité" : "Quality-first"}
            </div>
            <p className="mt-3 text-white text-lg font-extrabold">
              {language === "fr"
                ? "Des leads exploitables, pas des formulaires vides."
                : "Usable leads — not empty form fills."}
            </p>
            <p className="mt-2 text-white/85 text-sm max-w-xl">
              {language === "fr"
                ? "On structure la qualification pour que vos équipes rappellent vite et signent plus."
                : "We structure qualification so your team can call fast and bind more."}
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT LINES */}
      <section className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
        <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
          {p.productLinesBadge}
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {p.productLinesTitle}
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl">{p.productLinesSubtitle}</p>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {p.productLines.map((pl) => {
            const Icon = pl.icon;
            return (
              <div
                key={pl.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:border-indigo-200 transition"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 mb-3">
                  <Icon className="w-5 h-5 text-indigo-700" />
                </div>
                <h3 className="font-bold">{pl.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{pl.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS + VISUALS */}
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">{p.processBadge}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{p.processTitle}</h2>

          <div className="mt-8 space-y-4">
            {p.process.map((step, idx) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex-none w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-extrabold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <img
              src={IMAGES.analytics}
              alt={p.visuals.creativeTitle}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-lg font-extrabold">{p.visuals.creativeTitle}</p>
              <p className="text-white/85 text-sm mt-1">
                {language === "fr"
                  ? "Des messages simples, crédibles et orientés demande de devis."
                  : "Simple, credible messaging built for quote intent."}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <img
              src={IMAGES.map}
              alt={p.visuals.targetingTitle}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-lg font-extrabold">{p.visuals.targetingTitle}</p>
              <p className="text-white/85 text-sm mt-1">
                {language === "fr"
                  ? "Segmentation par zones + par produits + par appétence."
                  : "Segmentation by territory + product line + appetite."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + PROOF */}
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">{p.statsBadge}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{p.statsTitle}</h2>

          <div className="mt-7 grid sm:grid-cols-3 gap-4">
            {p.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className="text-2xl font-extrabold text-slate-900 mt-2">{s.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-600">{p.statsNote}</p>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-900 font-semibold">
            <LineChart className="w-4 h-4 text-indigo-600" />
            {language === "fr" ? "Optimisation orientée signature" : "Bind-rate oriented optimization"}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">{p.proofBadge}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{p.proofTitle}</h2>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            {p.proofBullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#discovery"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-700 transition"
          >
            {p.proofCta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
        <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">{p.faqBadge}</p>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{p.faqTitle}</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {p.faq.map((qa) => (
            <div key={qa.q} className="rounded-2xl border border-gray-100 bg-white p-5">
              <p className="font-bold text-slate-900">{qa.q}</p>
              <p className="text-sm text-gray-600 mt-2">{qa.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DISCOVERY CTA */}
      <section
        id="discovery"
        className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 md:p-10 text-white shadow-sm"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {p.finalTitle}
            </h2>
            <p className="mt-3 text-indigo-100 max-w-2xl">{p.finalText}</p>

            <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold bg-white/10 text-white border border-white/15 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>{p.finalPill}</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/15 p-6 md:p-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold">{t.callChecklist.title}</p>
                <p className="text-sm text-indigo-100">
                  {language === "fr" ? "En 15 minutes, on voit si ça vaut le coup." : "In 15 minutes, we’ll see if it makes sense."}
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-indigo-50">
              {t.callChecklist.items.map((it, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-200" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${t.contact.phoneValue}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white text-indigo-700 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
              >
                <Phone className="w-4 h-4" />
                {t.callChecklist.button}
              </a>
            </div>

            <p className="mt-4 text-xs text-indigo-100">{t.callChecklist.note}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
