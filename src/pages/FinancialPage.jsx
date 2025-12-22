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
  DollarSign,
  TrendingUp,
  Building2,
  PieChart,
  Calculator,
  Landmark,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Free-to-use external images (Unsplash).
 * You can download and host locally later if needed.
 */
const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=2000&q=80",
  meeting:
    "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=2000&q=80",
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
  map:
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2000&q=80",
   avatar1: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=96&q=80",
  avatar2: "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=96&q=80",
  avatar3: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=96&q=80",
  avatar4: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=96&q=80",
};

const COPY = {
  en: {
    seo: {
      title: "Financial Lead Generation (Advisors, Brokers & Firms) | Leads Podium",
      description:
        "Exclusive, high-intent financial leads delivered in real time: consultation requests, audits, retirement planning and inbound demand for advisory services.",
      keywords:
        "financial leads, financial advisor leads, wealth management leads, mortgage broker leads, tax leads, accounting leads, retirement planning leads, lead generation",
      ogTitle: "Exclusive Financial Leads — Built for Qualified Consultations",
      ogDescription:
        "High-intent inbound funnels + multi-channel acquisition + real-time delivery. Built for advisors and firms that care about quality.",
    },

    badge: "Financial",
    badgeSub: "Advisors • Brokers • Firms",

    heroTitle: "High-intent financial leads that turn into qualified consultations",
    heroSubtitle:
      "We build acquisition funnels that generate exclusive consultation requests and inbound demand—optimized for trust, qualification and client lifetime value (not vanity metrics).",
    heroBullets: [
      "100% exclusive leads (never resold).",
      "Smart intake forms to qualify by goals, urgency, and fit.",
      "Delivered instantly to your CRM or email, with clear data fields.",
    ],
    heroCtaPrimary: "Schedule a discovery call",
    heroCtaSecondary: "Talk to a specialist",

    trustLine: "Built for serious advisory teams",
    trustPill: "Quality-first, performance-driven",
    trustNote: "Start lean, validate quality together, then scale what works.",

    rightCard: {
      headerTitle: "Qualification & delivery",
      headerPill: "Real-time",
      bannerTitle: "Live inquiry snapshot",
      bannerSubtitle: "Consultations matched to your services",
      item1Title: "Retirement consult • Phoenix, AZ",
      item1Text: "Timeline: 30 days • Goals captured • Household context",
      item2Title: "Mortgage refi • Tampa, FL",
      item2Text: "Rate goal captured • Property type • Decision window",
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
      offerTitle: "A lead system designed around trust and conversion",
      offerSubtitle:
        "Financial services require credibility and intent. Everything is engineered to produce clean, workable inquiries—not cheap form fills.",
      offers: [
        {
          title: "Consultation request funnels",
          text: "High-intent forms tuned for goals, assets (range), timeline, and service fit.",
          icon: FileText,
        },
        {
          title: "Call-first lead flow",
          text: "Real-time delivery + clear field mapping so your team can respond fast.",
          icon: Phone,
        },
        {
          title: "Nurture & win-back",
          text: "Retargeting + reactivation sequences to convert ‘not now’ prospects later.",
          icon: RefreshCcw,
        },
        {
          title: "Segmentation & routing",
          text: "Route leads by service line, ZIP, advisor/team, or qualification tier.",
          icon: Target,
        },
      ],

      productLinesBadge: "Service lines",
      productLinesTitle: "Financial segments we can support",
      productLinesSubtitle:
        "We tailor messaging and qualification by segment because the close path isn’t the same.",
      productLines: [
        {
          title: "Wealth & advisory",
          text: "Goals, investable assets (range), timeline, consult intent.",
          icon: PieChart,
        },
        {
          title: "Retirement planning",
          text: "401(k)/IRA context, milestones, timeline, consult request.",
          icon: Landmark,
        },
        {
          title: "Mortgage & lending",
          text: "Purchase/refi intent, rate goals, property context, urgency.",
          icon: Building2,
        },
        {
          title: "Tax & accounting",
          text: "Business/personal needs, deadlines, complexity signals, consult intent.",
          icon: Calculator,
        },
      ],

      processBadge: "How it works",
      processTitle: "From strategy to lead delivery in 4 steps",
      process: [
        {
          title: "Offer + ICP alignment",
          text: "We define your target client, services, territories and qualification rules that match your business model.",
        },
        {
          title: "High-trust funnel build",
          text: "Landing pages + intake questions + trust elements—built to produce clean, usable inquiries.",
        },
        {
          title: "Multi-channel acquisition",
          text: "Google / Meta / YouTube + retargeting, tuned to financial-intent signals.",
        },
        {
          title: "Delivery + optimization loop",
          text: "Real-time delivery, speed-to-lead targets and weekly tuning to improve consult-to-client rate.",
        },
      ],

      visuals: {
        creativeTitle: "Trust-first creative & messaging",
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
        "We monitor quality signals (call speed, qualification rate, appointment rate, downstream feedback) to continuously improve consult-to-client performance.",

      proofBadge: "Why Leads Podium",
      proofTitle: "Why financial teams choose us",
      proofBullets: [
        "Funnels engineered for qualified intent—not cheap form fills.",
        "Clear field mapping: goals, timeline, fit signals and context.",
        "Volume aligned to your team capacity and speed-to-lead targets.",
        "Radical transparency on what’s working and what’s not.",
      ],
      proofCta: "Schedule a discovery call",

      faqBadge: "FAQ",
      faqTitle: "Financial leads FAQ",
      faq: [
        {
          q: "Are the leads exclusive?",
          a: "Yes. Leads generated for you are exclusive and not sold to competitors.",
        },
        {
          q: "Which financial services can you support?",
          a: "We can support wealth/advisory, retirement planning, mortgage & lending, and tax/accounting—depending on your market and positioning.",
        },
        {
          q: "How are pricing and volume defined?",
          a: "It depends on market competition, qualification depth and monthly volume. We validate economics before scaling.",
        },
        {
          q: "Can you send leads to my CRM?",
          a: "In most cases, yes. Otherwise we can deliver by email in a structured format with consistent fields.",
        },
      ],

      finalTitle: "Want a realistic lead plan that matches your advisory capacity?",
      finalText:
        "Tell us your services, territories, conversion process and capacity. We’ll build a plan that makes sense before spending serious budget.",
      finalPill: "Exclusive leads • Real-time delivery • Weekly optimization",
    },

    contact: {
      phoneLabel: "Phone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "What we’ll ask on the call",
      items: [
        "Territory + service line mix (wealth/retirement/mortgage/tax)",
        "Capacity (how many inquiries you can handle monthly) + speed-to-lead process",
        "Qualification rules (fit signals, minimum thresholds, timeline)",
        "CRM or workflow for call handling + disposition feedback",
      ],
      button: "Schedule a discovery call",
      note: "No commitment. We’ll tell you honestly if your economics make sense.",
    },
  },

  fr: {
    seo: {
      title: "Génération de leads finance (conseillers & cabinets) | Leads Podium",
      description:
        "Leads finance exclusifs livrés en temps réel : demandes de consultation, audits, retraite, crédit & services financiers. Tunnels, acquisition multi-canal, optimisation.",
      keywords:
        "leads finance, leads conseiller financier, leads gestion de patrimoine, leads courtier, leads crédit, leads comptable, leads fiscalité, génération de leads",
      ogTitle: "Leads Finance Exclusifs — Pensés pour des consultations qualifiées",
      ogDescription:
        "Tunnels à forte intention + acquisition multi-canal + livraison instantanée. Pour conseillers et cabinets orientés qualité.",
    },

    badge: "Finance",
    badgeSub: "Conseillers • Courtiers • Cabinets",

    heroTitle: "Des leads finance à forte intention qui deviennent des consultations qualifiées",
    heroSubtitle:
      "Nous construisons des tunnels d’acquisition qui génèrent des demandes de consultation exclusives—optimisées pour la confiance, la qualification et la conversion en clients (pas des métriques de vanité).",
    heroBullets: [
      "Leads 100% exclusifs (jamais revendus).",
      "Formulaires intelligents : objectifs, urgence, signaux de fit.",
      "Livraison instantanée dans votre CRM ou par email avec champs clairs.",
    ],
    heroCtaPrimary: "Planifier un call de découverte",
    heroCtaSecondary: "Parler à un spécialiste",

    trustLine: "Pensé pour les équipes conseil sérieuses",
    trustPill: "Qualité d’abord, performance ensuite",
    trustNote: "On démarre léger, on valide la qualité, puis on scale ce qui fonctionne.",

    rightCard: {
      headerTitle: "Qualification & livraison",
      headerPill: "Temps réel",
      bannerTitle: "Aperçu demandes en direct",
      bannerSubtitle: "Consultations alignées à vos services",
      item1Title: "Retraite • Phoenix, AZ",
      item1Text: "Délai : 30 jours • Objectifs renseignés • Contexte foyer",
      item2Title: "Refinancement • Tampa, FL",
      item2Text: "Objectif taux • Type de bien • Fenêtre décision",
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
      offerTitle: "Un système de leads conçu pour la confiance et la conversion",
      offerSubtitle:
        "Les services financiers exigent crédibilité et intention. Tout est pensé pour produire des demandes propres et exploitables.",
      offers: [
        {
          title: "Tunnels “demande de consultation”",
          text: "Formulaires à forte intention (objectifs, timeline, signaux de fit).",
          icon: FileText,
        },
        {
          title: "Flux orienté appel",
          text: "Livraison temps réel + champs clairs pour rappeler vite.",
          icon: Phone,
        },
        {
          title: "Nurture & win-back",
          text: "Retargeting + relances pour convertir les prospects ‘pas maintenant’.",
          icon: RefreshCcw,
        },
        {
          title: "Segmentation & routage",
          text: "Routage par service, ZIP, équipe/conseiller, ou niveau de qualification.",
          icon: Target,
        },
      ],

      productLinesBadge: "Segments",
      productLinesTitle: "Segments finance que nous pouvons activer",
      productLinesSubtitle:
        "Message et qualification sont adaptés à chaque segment pour maximiser la conversion.",
      productLines: [
        {
          title: "Patrimoine & conseil",
          text: "Objectifs, assets (fourchette), timeline, intention de RDV.",
          icon: PieChart,
        },
        {
          title: "Retraite",
          text: "Contexte, échéances, besoins, demande de consultation.",
          icon: Landmark,
        },
        {
          title: "Crédit & hypothèque",
          text: "Achat/refi, objectifs taux, contexte bien, urgence.",
          icon: Building2,
        },
        {
          title: "Fiscalité & comptabilité",
          text: "Besoins pro/perso, deadlines, complexité, intention RDV.",
          icon: Calculator,
        },
      ],

      processBadge: "Méthode",
      processTitle: "De la stratégie à la livraison des leads en 4 étapes",
      process: [
        {
          title: "Alignement offre & cible",
          text: "Définition ICP, services, zones et règles de qualification.",
        },
        {
          title: "Tunnel à forte crédibilité",
          text: "Landing pages + questions + éléments de confiance—pour des demandes propres.",
        },
        {
          title: "Acquisition multi-canal",
          text: "Google / Meta / YouTube + retargeting, orienté signaux d’intention finance.",
        },
        {
          title: "Livraison + boucle d’optimisation",
          text: "Livraison temps réel, objectifs de rappel et optimisation hebdo pour améliorer la conversion en clients.",
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
        "Nous suivons des indicateurs de qualité (rapidité de rappel, taux de qualification, taux de RDV, retours terrain) afin d’améliorer en continu la conversion consultation → client.",

      proofBadge: "Pourquoi nous",
      proofTitle: "Pourquoi les équipes finance nous choisissent",
      proofBullets: [
        "Tunnels conçus pour l’intention (pas des formulaires “cheap”).",
        "Champs exploitables : objectifs, délai, signaux de fit, contexte.",
        "Volume aligné à votre capacité commerciale et votre vitesse de rappel.",
        "Transparence sur ce qui fonctionne et ce qui ne fonctionne pas.",
      ],
      proofCta: "Planifier un call de découverte",

      faqBadge: "FAQ",
      faqTitle: "FAQ Finance",
      faq: [
        {
          q: "Les leads sont-ils exclusifs ?",
          a: "Oui. Les leads générés pour vous sont exclusifs et non revendus à des concurrents.",
        },
        {
          q: "Quels métiers pouvez-vous activer ?",
          a: "Patrimoine/conseil, retraite, crédit/hypothèque, fiscalité & comptabilité—selon marché et positionnement.",
        },
        {
          q: "Comment sont fixés tarif et volume ?",
          a: "Selon concurrence, profondeur de qualification et volume mensuel. On valide l’économie avant de scaler.",
        },
        {
          q: "Pouvez-vous envoyer les leads dans mon CRM ?",
          a: "Dans la plupart des cas oui. Sinon livraison email structurée avec champs cohérents.",
        },
      ],

      finalTitle: "Envie d’un plan de leads finance réaliste, aligné à votre capacité ?",
      finalText:
        "Parlez-nous de vos services, zones, process et capacité. On construit un plan viable avant d’engager un budget significatif.",
      finalPill: "Leads exclusifs • Livraison temps réel • Optimisation hebdo",
    },

    contact: {
      phoneLabel: "Téléphone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "Ce que nous aborderons lors de l’appel",
      items: [
        "Zones + mix services (patrimoine/retraite/crédit/fiscalité)",
        "Capacité (volume mensuel) + process de rappel",
        "Règles de qualification (fit, seuils minimum, timeline)",
        "CRM / workflow d’appels + retours de disposition",
      ],
      button: "Planifier un call de découverte",
      note: "Sans engagement. On vous dira clairement si l’économie tient la route.",
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

export default function FinancialPage() {
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

    // JSON-LD (pattern like Solar page)
    const id = "ld-json-financial";
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Financial Lead Generation",
      provider: {
        "@type": "Organization",
        name: "Leads Podium",
      },
      areaServed: "US",
      serviceType: "Lead generation for financial services",
    });
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, [t]);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Financial lead generation"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/55 to-gray-950/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/90 text-sm backdrop-blur">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">{t.badge}</span>
                <span className="text-white/70">•</span>
                <span className="text-white/80">{t.badgeSub}</span>
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white">
                {t.heroTitle}
              </h1>

              <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-xl">
                {t.heroSubtitle}
              </p>

              <ul className="mt-7 space-y-3 text-white/85">
                {t.heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 mt-0.5" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 transition"
                >
                  {t.heroCtaPrimary}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href={`tel:${t.contact.phoneValue.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-semibold backdrop-blur hover:bg-white/15 transition"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t.heroCtaSecondary}
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/85">
                  <BadgeCheck className="w-4 h-4 mr-2 text-indigo-300" />
                  {t.trustPill}
                </span>
                <span className="text-sm text-white/75">{t.trustNote}</span>
              </div>
            </div>

            {/* Right card */}
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70">{t.rightCard.headerTitle}</p>
                    <p className="text-white font-semibold">{t.rightCard.headerPill}</p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <LineChart className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-white/10 p-5 border border-white/10">
                  <p className="text-white font-semibold">{t.rightCard.bannerTitle}</p>
                  <p className="text-white/75 text-sm mt-1">{t.rightCard.bannerSubtitle}</p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl bg-white/10 p-4 border border-white/10">
                      <p className="text-white font-semibold text-sm">{t.rightCard.item1Title}</p>
                      <p className="text-white/75 text-sm mt-1">{t.rightCard.item1Text}</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4 border border-white/10">
                      <p className="text-white font-semibold text-sm">{t.rightCard.item2Title}</p>
                      <p className="text-white/75 text-sm mt-1">{t.rightCard.item2Text}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-white/10 p-3 border border-white/10 text-center">
                      <p className="text-xs text-white/70">{t.rightCard.metric1Label}</p>
                      <p className="text-white font-semibold">{t.rightCard.metric1Value}</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-3 border border-white/10 text-center">
                      <p className="text-xs text-white/70">{t.rightCard.metric2Label}</p>
                      <p className="text-white font-semibold">{t.rightCard.metric2Value}</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-3 border border-white/10 text-center">
                      <p className="text-xs text-white/70">{t.rightCard.metric3Label}</p>
                      <p className="text-white font-semibold">{t.rightCard.metric3Value}</p>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700 transition"
                  >
                    {t.rightCard.button}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-violet-500/20 blur-3xl rounded-full" />
            </div>
          </div>

          <div className="mt-10 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <TrendingUp className="w-4 h-4 text-indigo-300" />
              {t.trustLine}
            </span>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600">{p.offerBadge}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-gray-900">
              {p.offerTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{p.offerSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {p.offers.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-gray-900">{o.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{o.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT LINES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600">{p.productLinesBadge}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-gray-900">
              {p.productLinesTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{p.productLinesSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {p.productLines.map((pl) => {
              const Icon = pl.icon;
              return (
                <div key={pl.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-gray-900">{pl.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{pl.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600">{p.processBadge}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-gray-900">
              {p.processTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {p.process.map((step) => (
              <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="mt-5 font-display font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Visuals (same vibe as other pages) */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2 items-center">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <img src={IMAGES.meeting} alt="Advisory meeting" className="w-full h-80 object-cover" loading="lazy" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-extrabold text-gray-900">{p.visuals.creativeTitle}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We build credible pages and messaging that reduce low-quality inquiries and increase consult intent.
              </p>

              <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <img src={IMAGES.analytics} alt="Analytics" className="w-full h-64 object-cover" loading="lazy" />
              </div>

              <h3 className="mt-8 text-2xl font-display font-extrabold text-gray-900">{p.visuals.targetingTitle}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Route leads by service line and territory so the right advisor sees the right inquiry fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600">{p.statsBadge}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-gray-900">
              {p.statsTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{p.statsNote}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {p.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <p className="text-gray-600">{s.label}</p>
                <p className="mt-2 text-3xl font-display font-extrabold text-gray-900">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <p className="text-sm font-semibold text-indigo-600">{p.proofBadge}</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-gray-900">
                {p.proofTitle}
              </h2>

              <ul className="mt-6 space-y-3 text-gray-700">
                {p.proofBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 transition"
              >
                {p.proofCta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Testimonials card style */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900">Quality-first process</p>
                  <p className="text-gray-600 text-sm">Built for consultation rate and downstream conversion</p>
                </div>
              </div>

              <div className="mt-7 space-y-5">
                {[
                  { a: IMAGES.avatar1, n: "Operations Lead", t: "Cleaner inquiries and better consult intent." },
                  { a: IMAGES.avatar2, n: "Managing Partner", t: "Transparent optimization, no fluff." },
                  { a: IMAGES.avatar3, n: "Advisor Team Lead", t: "Volume aligned to our capacity—quality improved." },
                ].map((x) => (
                  <div key={x.n} className="flex items-start gap-3">
                    <img src={x.a} alt={x.n} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-gray-900 font-semibold">{x.n}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">{x.t}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-xl bg-gray-50 p-5 border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  We focus on qualification depth, response speed and feedback loops—so you close more with the same effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600">{p.faqBadge}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-gray-900">
              {p.faqTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {p.faq.map((f) => (
              <div key={f.q} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <p className="font-display font-bold text-gray-900">{f.q}</p>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl bg-gray-900 text-white overflow-hidden">
            <div className="grid gap-10 lg:grid-cols-2 p-10 lg:p-14 items-start">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/85">
                  <Sparkles className="w-4 h-4 text-indigo-300" />
                  {p.finalPill}
                </p>
                <h2 className="mt-6 text-3xl md:text-4xl font-display font-extrabold">
                  {p.finalTitle}
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed text-lg">{p.finalText}</p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${t.contact.phoneValue.replace(/[^0-9]/g, "")}`}
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {t.contact.phoneValue}
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 transition"
                  >
                    {t.heroCtaPrimary}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Checklist */}
              <div className="rounded-2xl bg-white/10 border border-white/10 p-8 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-display font-bold">{t.callChecklist.title}</p>
                    <p className="text-white/70 text-sm">{t.callChecklist.note}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-white/85">
                  {t.callChecklist.items.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-300 mt-0.5" />
                      <span className="leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
                >
                  {t.callChecklist.button}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
