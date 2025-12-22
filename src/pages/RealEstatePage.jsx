import React, { useEffect, useMemo } from "react";
import {
  Target,
  Users,
  Home,
  MapPin,
  LineChart,
  ShieldCheck,
  ArrowRight,
  Phone,
  CheckCircle2,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Images externes (Unsplash). Remarque: tu peux aussi les télécharger en local si tu préfères.
 */
const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80",
  meeting:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
  interior:
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1800&q=80",
  map:
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=80",
  testimonialAvatar1:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80",
  testimonialAvatar2:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80",
  testimonialAvatar3:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=96&q=80",
  testimonialAvatar4:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80",
};

const COPY = {
  en: {
    seo: {
      title: "Real Estate Lead Generation for Agents & Brokerages | Leads Podium",
      description:
        "Exclusive seller, buyer and investor leads delivered in real time. High-intent funnels, multi-channel acquisition, CRM integration, and transparent performance tracking.",
      keywords:
        "real estate leads, seller leads, buyer leads, investor leads, lead generation, real estate marketing, brokerage leads, realtors leads",
      ogTitle: "Exclusive Real Estate Leads — Built for Closing",
      ogDescription:
        "High-intent funnels + multi-channel traffic + real-time delivery. Built for agents, teams and brokerages.",
    },
    badge: "Real Estate",
    badgeSub: "Sellers • Buyers • Investors",

    heroTitle: "High-intent real estate leads for your pipeline",
    heroSubtitle:
      "We build and run acquisition funnels that deliver exclusive seller, buyer and investor leads in your target areas—optimized for qualified appointments, not vanity metrics.",
    heroBullets: [
      "100% exclusive leads (never resold).",
      "Pre-qualification filters: location, timeline, budget, property type.",
      "Delivered instantly to your CRM or email.",
    ],
    heroCtaPrimary: "Schedule a discovery call",
    heroCtaSecondary: "Talk to a specialist",

    trustLine: "Trusted by growth-focused teams",
    trustPill: "Transparent CPL & per-deal visibility",
    trustNote: "Start lean, validate quality together, then scale what works.",

    rightCard: {
      headerTitle: "Qualification & delivery",
      headerPill: "Real-time",
      bannerTitle: "Live pipeline snapshot",
      bannerSubtitle: "Seller, buyer & investor leads in your territory",
      item1Title: "Seller lead • Miami, FL",
      item1Text:
        "Timeline: 90 days • Pre-qualified on minimum asking price",
      item2Title: "Buyer lead • Austin, TX",
      item2Text: "Budget confirmed • Financing status captured",
      metric1Label: "Exclusivity",
      metric1Value: "100%",
      metric2Label: "Speed",
      metric2Value: "<5m",
      metric3Label: "Markets",
      metric3Value: "US/CA",
      button: "Schedule a discovery call",
    },

    sections: {
      offerBadge: "What you get",
      offerTitle: "A system designed to produce closable opportunities",
      offerSubtitle:
        "Everything is engineered around speed-to-lead, qualification and predictable cost per opportunity.",
      offers: [
        {
          title: "Seller lead funnels",
          text: "Motivated homeowners + intent signals (timeline, equity, reason to sell).",
          icon: Home,
        },
        {
          title: "Buyer & relocation funnels",
          text: "Budget & financing context, area preferences, timeframe and next steps.",
          icon: Users,
        },
        {
          title: "Investor funnels",
          text: "Cash buyers, BRRRR profiles, rental investors—segmented by strategy.",
          icon: LineChart,
        },
        {
          title: "Territory targeting",
          text: "ZIP codes, cities, radius targeting and market-based messaging.",
          icon: MapPin,
        },
      ],

      processBadge: "How it works",
      processTitle: "From strategy to lead delivery in 4 steps",
      process: [
        {
          title: "Market & offer alignment",
          text: "We define your ICP, territory, lead types and qualification rules.",
        },
        {
          title: "Funnel build (high conversion)",
          text: "Landing pages + forms + intent questions + tracking—built to convert.",
        },
        {
          title: "Multi-channel acquisition",
          text: "Google / Meta / YouTube + retargeting, tuned to high-intent signals.",
        },
        {
          title: "Delivery + optimization loop",
          text: "Real-time delivery, call-speed targets, and weekly performance tuning.",
        },
      ],

      visuals: {
        creativeTitle: "Listing-ready creative that converts",
        targetingTitle: "Territory targeting & segmentation",
      },

      statsBadge: "What matters",
      statsTitle: "Performance pillars we optimize",
      stats: [
        { label: "Exclusive leads", value: "100%" },
        { label: "Reply time target", value: "< 5 min" },
        { label: "Primary markets", value: "US & Canada" },
      ],
      statsNote:
        "We track quality signals (call speed, qualification rate, appointment rate) to continuously improve lead-to-deal performance.",

      proofBadge: "Why Leads Podium",
      proofTitle: "Why real estate teams choose us",
      proofBullets: [
        "Optimized for qualified appointments—not clicks.",
        "Full visibility on CPL and cost per deal.",
        "Lead volume aligned with your real sales capacity.",
        "Start small, validate quality, then scale.",
      ],
      proofCta: "Schedule a discovery call",

      faqBadge: "FAQ",
      faqTitle: "Real estate FAQ",
      faq: [
        {
          q: "Are the leads exclusive?",
          a: "Yes. All leads we generate for you are 100% exclusive and never resold.",
        },
        {
          q: "Which markets do you cover?",
          a: "We can target specific cities, ZIP codes or broader regions in the US and Canada.",
        },
        {
          q: "How is pricing structured?",
          a: "Pricing depends on your market competitiveness, lead type (seller/buyer/investor) and monthly volume.",
        },
        {
          q: "Can you integrate with my CRM?",
          a: "In most cases, yes. Otherwise we deliver leads instantly by email in a structured format.",
        },
      ],

      finalTitle: "Want a realistic, data-based lead plan for your market?",
      finalText:
        "Tell us your territory, average commission and current closing rates. We’ll design a plan that makes financial sense before you spend a single dollar on ads.",
      finalPill:
        "Exclusive leads • Real-time delivery • Weekly optimization",
    },

    contact: {
      phoneLabel: "Phone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "What we’ll ask on the call",
      items: [
        "Territory + lead type mix (seller/buyer/investor)",
        "Avg commission + current close rates",
        "CRM + speed-to-lead process",
        "Capacity (how many leads you can absorb monthly)",
      ],
      button: "Schedule a discovery call",
      note:
        "No commitment. We’ll tell you honestly if your market economics make sense.",
    },
  },

  fr: {
    seo: {
      title: "Génération de leads immobilier (vendeurs/acheteurs) | Leads Podium",
      description:
        "Leads exclusifs vendeurs, acheteurs et investisseurs livrés en temps réel. Tunnels à forte conversion, acquisition multi-canal, intégration CRM, suivi et optimisation.",
      keywords:
        "leads immobilier, leads vendeurs, leads acheteurs, leads investisseurs, génération de leads, marketing immobilier, leads agents, leads agences",
      ogTitle: "Leads Immobilier Exclusifs — Pensés pour signer",
      ogDescription:
        "Tunnels à forte intention + acquisition multi-canal + livraison instantanée. Pour agents, équipes et agences.",
    },
    badge: "Immobilier",
    badgeSub: "Vendeurs • Acheteurs • Investisseurs",

    heroTitle: "Des leads immobilier à forte intention pour votre pipeline",
    heroSubtitle:
      "Nous construisons et pilotons des tunnels d’acquisition qui vous apportent des leads vendeurs, acheteurs et investisseurs exclusifs sur vos zones—optimisés pour des rendez-vous qualifiés, pas des métriques de vanité.",
    heroBullets: [
      "Leads 100% exclusifs (jamais revendus).",
      "Filtres de pré-qualification : zone, délai, budget, type de bien.",
      "Livraison instantanée dans votre CRM ou par email.",
    ],
    heroCtaPrimary: "Planifier un call de découverte",
    heroCtaSecondary: "Parler à un spécialiste",

    trustLine: "Adopté par des équipes orientées croissance",
    trustPill: "Transparence sur le CPL & le coût par affaire",
    trustNote:
      "On démarre léger, on valide la qualité ensemble, puis on scale ce qui fonctionne.",

    rightCard: {
      headerTitle: "Qualification & livraison",
      headerPill: "Temps réel",
      bannerTitle: "Aperçu pipeline en direct",
      bannerSubtitle: "Leads vendeurs, acheteurs & investisseurs sur vos zones",
      item1Title: "Lead vendeur • Miami, FL",
      item1Text:
        "Délai : 90 jours • Pré-qualifié sur le prix minimum",
      item2Title: "Lead acheteur • Austin, TX",
      item2Text: "Budget confirmé • Statut de financement renseigné",
      metric1Label: "Exclusivité",
      metric1Value: "100%",
      metric2Label: "Vitesse",
      metric2Value: "<5 min",
      metric3Label: "Marchés",
      metric3Value: "USA/CA",
      button: "Planifier un call de découverte",
    },

    sections: {
      offerBadge: "Ce que vous obtenez",
      offerTitle: "Un système conçu pour générer des opportunités signables",
      offerSubtitle:
        "Tout est pensé autour de la rapidité de rappel, de la qualification et d’un coût par opportunité maîtrisé.",
      offers: [
        {
          title: "Tunnels vendeurs",
          text: "Propriétaires motivés + signaux d’intention (délai, equity, motif).",
          icon: Home,
        },
        {
          title: "Tunnels acheteurs",
          text: "Budget & financement, zones souhaitées, délai et prochaines étapes.",
          icon: Users,
        },
        {
          title: "Tunnels investisseurs",
          text: "Cash buyers, profils locatifs, segmentation par stratégie.",
          icon: LineChart,
        },
        {
          title: "Ciblage de zones",
          text: "Villes, ZIP codes, rayon, et messages adaptés au marché.",
          icon: MapPin,
        },
      ],

      processBadge: "Méthode",
      processTitle: "De la stratégie à la livraison des leads en 4 étapes",
      process: [
        {
          title: "Alignement marché & offre",
          text: "Définition ICP, zones, types de leads et règles de qualification.",
        },
        {
          title: "Construction du tunnel (conversion)",
          text: "Landing pages + formulaires + questions d’intention + tracking.",
        },
        {
          title: "Acquisition multi-canal",
          text: "Google / Meta / YouTube + retargeting, orienté signaux forts.",
        },
        {
          title: "Livraison + boucle d’optimisation",
          text: "Livraison temps réel, objectifs de rappel, optimisation hebdo.",
        },
      ],

      visuals: {
        creativeTitle: "Visuels optimisés pour convertir vos annonces",
        targetingTitle: "Ciblage géographique & segmentation",
      },

      statsBadge: "Essentiel",
      statsTitle: "Les piliers que nous optimisons",
      stats: [
        { label: "Leads exclusifs", value: "100%" },
        { label: "Objectif de rappel", value: "< 5 min" },
        { label: "Marchés principaux", value: "USA & Canada" },
      ],
      statsNote:
        "Nous suivons des indicateurs de qualité (rapidité de rappel, taux de qualification, taux de rendez-vous) afin d’améliorer en continu la conversion lead → transaction.",

      proofBadge: "Pourquoi nous",
      proofTitle: "Pourquoi les équipes immobilières nous choisissent",
      proofBullets: [
        "Optimisation sur les rendez-vous qualifiés, pas les clics.",
        "Visibilité totale sur CPL et coût par affaire gagnée.",
        "Volume aligné sur votre capacité commerciale réelle.",
        "On démarre petit, on valide, puis on scale.",
      ],
      proofCta: "Planifier un call de découverte",

      faqBadge: "FAQ",
      faqTitle: "FAQ Immobilier",
      faq: [
        {
          q: "Les leads sont-ils exclusifs ?",
          a: "Oui, 100% des leads générés pour vous sont exclusifs et ne sont pas revendus.",
        },
        {
          q: "Sur quelles zones intervenez-vous ?",
          a: "Nous pouvons cibler des villes, des ZIP codes ou des régions aux USA et au Canada.",
        },
        {
          q: "Comment sont fixés les tarifs ?",
          a: "Les tarifs dépendent de votre marché, de la concurrence, du type de lead et du volume mensuel.",
        },
        {
          q: "Pouvez-vous vous connecter à mon CRM ?",
          a: "Dans la plupart des cas, oui. Sinon, livraison email dans un format structuré.",
        },
      ],

      finalTitle: "Envie d’un plan de leads réaliste et rentable pour vos zones ?",
      finalText:
        "Parlez-nous de vos secteurs, commissions et taux de transformation. On construit un plan rentable avant même de lancer la moindre campagne.",
      finalPill:
        "Leads exclusifs • Livraison en temps réel • Optimisation hebdomadaire",
    },

    contact: {
      phoneLabel: "Téléphone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "Ce que nous aborderons lors de l’appel",
      items: [
        "Zones ciblées + répartition des leads (vendeurs / acheteurs / investisseurs)",
        "Commission moyenne + taux de transformation actuels",
        "CRM utilisé + process de rappel des leads",
        "Capacité mensuelle de traitement des leads",
      ],
      button: "Planifier un call de découverte",
      note:
        "Sans engagement. Nous vous dirons en toute transparence si l’économie de votre marché est réellement viable.",
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

export default function RealEstatePage() {
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

    const id = "ld-json-real-estate";
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
      serviceType: "Real estate lead generation",
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

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-sm font-semibold shadow-sm transition"
              >
                {t.heroCtaPrimary}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-6 py-3 text-sm font-semibold border border-white/15 transition"
              >
                <Phone className="w-4 h-4" />
                {t.heroCtaSecondary}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-8 pt-6 border-t border-white/10">
              <div className="flex -space-x-3">
                {[
                  IMAGES.testimonialAvatar1,
                  IMAGES.testimonialAvatar2,
                  IMAGES.testimonialAvatar3,
                  IMAGES.testimonialAvatar4,
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={t.trustLine}
                    className="w-10 h-10 rounded-full border-[2px] border-white/70 object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="text-white/85 text-sm">
                <div className="font-semibold text-white">{t.trustLine}</div>
                <div className="opacity-90">{t.trustPill}</div>
              </div>
            </div>

            <p className="mt-3 text-xs text-white/70">{t.trustNote}</p>
          </div>

          {/* Right card */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/30 via-violet-500/30 to-fuchsia-500/20 blur-3xl rounded-[2rem]" />
            <div className="relative bg-white/95 backdrop-blur rounded-3xl border border-white/60 shadow-xl overflow-hidden">
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
      <section>
        <div className="mb-8">
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
            {p.offerBadge}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">{p.offerTitle}</h2>
          <p className="text-gray-600 max-w-2xl mt-2">{p.offerSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.offers.map((o, i) => {
            const Icon = o.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:border-indigo-200 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-2">{o.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {o.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS + VISUALS */}
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
            {p.processBadge}
          </p>
          <h2 className="text-2xl font-bold mb-3">{p.processTitle}</h2>

          <div className="space-y-4">
            {p.process.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative h-56 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={IMAGES.interior}
              alt={p.visuals.creativeTitle}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
              {p.visuals.creativeTitle}
            </div>
          </div>

          <div className="relative h-44 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={IMAGES.map}
              alt={p.visuals.targetingTitle}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 via-transparent to-slate-950/10" />
            <div className="absolute top-4 left-4 text-white text-sm font-semibold">
              {p.visuals.targetingTitle}
            </div>
          </div>
        </div>
      </section>

      {/* STATS + PROOF */}
      <section className="grid lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
            {p.statsBadge}
          </p>
          <h2 className="text-2xl font-bold mb-6">{p.statsTitle}</h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {p.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-slate-50 p-5 text-center"
              >
                <div className="text-xs text-gray-500">{s.label}</div>
                <div className="text-2xl font-extrabold text-gray-900 mt-1">
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 text-sm text-gray-600">
            <ShieldCheck className="w-5 h-5 text-indigo-600 mt-0.5" />
            <p>{p.statsNote}</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 text-white shadow-sm">
          <p className="text-xs font-semibold uppercase mb-2 text-white/90">
            {p.proofBadge}
          </p>
          <h2 className="text-2xl font-bold mb-6">{p.proofTitle}</h2>

          <ul className="space-y-3 text-sm text-white/90">
            {p.proofBullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <BadgeCheck className="w-5 h-5 text-emerald-300 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white text-indigo-700 px-6 py-3 text-sm font-semibold shadow-sm"
          >
            {p.proofCta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
          {p.faqBadge}
        </p>
        <h2 className="text-2xl font-bold mb-6">{p.faqTitle}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {p.faq.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA + CONTACT */}
      <section
        id="contact"
        className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl px-8 py-10 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">{p.finalTitle}</h2>
          <p className="text-white/80">{p.finalText}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:15614760504"
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              {t.contact.phoneLabel}: {t.contact.phoneValue}
            </a>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm">
              <Target className="w-4 h-4 text-indigo-200" />
              {p.finalPill}
            </span>
          </div>
        </div>

        <div className="bg-white/10 border border-white/15 rounded-2xl p-6 w-full lg:w-[420px]">
          <div className="text-sm font-semibold mb-3">
            {t.callChecklist.title}
          </div>

          <ul className="text-sm text-white/85 space-y-2">
            {t.callChecklist.items.map((it, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-0.5" />
                {it}
              </li>
            ))}
          </ul>

          <a
            href="tel:15614760504"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-sm font-semibold transition"
          >
            {t.callChecklist.button}
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="mt-3 text-xs text-white/70">{t.callChecklist.note}</div>
        </div>
      </section>
    </div>
  );
}
