import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Home,
  ShieldCheck,
  Users,
  Target,
  ArrowRight,
  Phone,
  CheckCircle2,
  BadgeCheck,
  Sparkles,
  CalendarCheck,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Images externes (Unsplash). Tu peux les remplacer plus tard par des images locales.
 */
const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80",
  meeting:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
  technician:
    "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1800",
  neighborhood:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80",
};

const WHATSAPP_URL =
  import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/972587990022";


const COPY = {
  en: {
    seo: {
      title: "Home Services Lead Generation (HVAC, Plumbing, Roofing) | Leads Podium",
      description:
        "Exclusive home services leads delivered in real time. HVAC, plumbing, roofing, electricians, pest control. High-intent funnels, local targeting, CRM delivery, weekly optimization.",
      keywords:
        "home services leads, hvac leads, plumbing leads, roofing leads, electrician leads, pest control leads, lead generation, local lead generation, contractor leads",
      ogTitle: "Exclusive Home Services Leads — Built for Booked Jobs",
      ogDescription:
        "High-intent funnels + local targeting + real-time delivery. Designed for contractors who want booked appointments—not vanity metrics.",
    },

    badge: "Home Services",
    badgeSub: "HVAC • Plumbing • Roofing • Contractors",

    heroTitle: "High-intent home services leads that turn into booked jobs",
    heroSubtitle:
      "We build and run local acquisition funnels that deliver exclusive leads for HVAC, plumbing, roofing, electrical and more—optimized for qualified calls and booked appointments, not clicks.",
    heroBullets: [
      "Exclusive leads (never resold).",
      "Pre-qualification: service type, urgency, ZIP code, timeframe.",
      "Delivered instantly to your CRM or email.",
    ],
    heroCtaPrimary: "Schedule a discovery call",
    heroCtaSecondary: "Talk to a specialist",

    trustLine: "Built for growth-focused home service operators",
    trustPill: "Transparent CPL + quality tracking",
    trustNote: "Start lean, validate quality together, then scale what works.",

    rightCard: {
      headerTitle: "Qualification & delivery",
      headerPill: "Real-time",
      bannerTitle: "Live lead snapshot",
      bannerSubtitle: "Local homeowner requests in your territory",
      item1Title: "HVAC repair • Tampa, FL",
      item1Text: "Urgency: same week • Service type confirmed • ZIP match",
      item2Title: "Roofing quote • Dallas, TX",
      item2Text: "Project scope captured • Timeline: 30 days • Phone verified",
      metric1Label: "Exclusivity",
      metric1Value: "100%",
      metric2Label: "Speed",
      metric2Value: "<5m",
      metric3Label: "Local",
      metric3Value: "ZIP-based",
      button: "Schedule a discovery call",
    },

    sections: {
      offerBadge: "What you get",
      offerTitle: "A system designed for booked appointments—at a predictable cost",
      offerSubtitle:
        "Everything is engineered around local intent, call speed, qualification depth and consistent lead delivery.",
      offers: [
        {
          title: "Service-specific funnels",
          text: "HVAC, plumbing, roofing, electrical, pest control—tailored landing pages and questions.",
          icon: Wrench,
        },
        {
          title: "Local targeting & segmentation",
          text: "ZIP codes, radius, neighborhoods, and service area boundaries aligned to your crew capacity.",
          icon: MapPin,
        },
        {
          title: "Quality-first qualification",
          text: "Urgency, service type, homeowner status, budget signals—tuned to reduce junk leads.",
          icon: ShieldCheck,
        },
        {
          title: "Real-time delivery",
          text: "Instant routing to your CRM or email with consistent field mapping and lead notes.",
          icon: Target,
        },
      ],

      processBadge: "How it works",
      processTitle: "From strategy to lead delivery in 4 steps",
      process: [
        {
          title: "Territory & offer alignment",
          text: "We define your service mix, service area, capacity, and what a “qualified lead” means for you.",
        },
        {
          title: "Funnel build (high conversion)",
          text: "Landing pages + forms + qualification depth + tracking—built to convert local intent.",
        },
        {
          title: "Local acquisition",
          text: "Google / Meta / YouTube (when relevant) with retargeting, focused on high-intent signals.",
        },
        {
          title: "Delivery + weekly optimization",
          text: "Real-time delivery, speed-to-lead targets, and weekly tuning based on outcomes—not clicks.",
        },
      ],

      visuals: {
        creativeTitle: "Job-ready creative that converts",
        targetingTitle: "Local targeting & service-area coverage",
      },

      statsBadge: "What matters",
      statsTitle: "Performance pillars we optimize",
      stats: [
        { label: "Exclusive leads", value: "100%" },
        { label: "Reply time target", value: "< 5 min" },
        { label: "Optimization cadence", value: "Weekly" },
      ],
      statsNote:
        "We track quality signals (call speed, contact rate, qualification rate, appointment rate) to continuously improve lead-to-job performance.",

      proofBadge: "Why Leads Podium",
      proofTitle: "Why home services teams choose us",
      proofBullets: [
        "Optimized for booked appointments—not vanity CPC.",
        "Qualification tuned to your service mix and territory.",
        "Lead volume aligned to your real crew capacity.",
        "Transparent economics before scaling spend.",
      ],
      proofCta: "Schedule a discovery call",

      faqBadge: "FAQ",
      faqTitle: "Home Services FAQ",
      faq: [
        {
          q: "Are the leads exclusive?",
          a: "Yes. All leads we generate for you are 100% exclusive and never resold.",
        },
        {
          q: "Which home service niches do you support?",
          a: "Common categories include HVAC, plumbing, roofing, electrical, pest control and remodeling (market-dependent).",
        },
        {
          q: "How do you define lead quality?",
          a: "We align on service type, territory, urgency/timeframe, and qualification depth, then optimize using call outcomes and appointment rate.",
        },
        {
          q: "Can you integrate with my CRM?",
          a: "In most cases, yes. Otherwise we deliver leads instantly by email in a structured format.",
        },
      ],

      finalTitle: "Want a realistic, data-based lead plan for your service area?",
      finalText:
        "Tell us your territory, service mix, close rates, and crew capacity. We’ll design a plan that makes financial sense before you scale spend.",
      finalPill: "Exclusive leads • Real-time delivery • Weekly optimization",
    },

    contact: {
      channelLabel: "WhatsApp",
      channelText: "Chat with us",
    },

    callChecklist: {
      title: "What we’ll cover on the call",
      items: [
        "Territory + service mix (HVAC/plumbing/roofing/etc.)",
        "Capacity (monthly leads you can handle) + speed-to-lead process",
        "Qualification rules (urgency, service type, homeowner status)",
        "CRM/workflow + what “success” looks like for you",
      ],
      button: "Schedule a discovery call",
      note:
        "No commitment. We’ll tell you honestly if your market economics make sense.",
    },
  },

  fr: {
    seo: {
      title: "Génération de leads Home Services (HVAC, plomberie, toiture) | Leads Podium",
      description:
        "Leads exclusifs Home Services livrés en temps réel : HVAC, plomberie, toiture, électriciens, nuisibles. Tunnels à forte conversion, ciblage local, livraison CRM, optimisation hebdo.",
      keywords:
        "leads home services, leads hvac, leads plomberie, leads toiture, leads électricien, leads nuisibles, génération de leads, leads locaux, leads artisans",
      ogTitle: "Leads Home Services Exclusifs — Pensés pour des RDV",
      ogDescription:
        "Tunnels à forte intention + ciblage local + livraison instantanée. Conçu pour des RDV et des chantiers—not des clics.",
    },

    badge: "Home Services",
    badgeSub: "HVAC • Plomberie • Toiture • Artisans",

    heroTitle: "Des leads Home Services à forte intention qui se transforment en chantiers",
    heroSubtitle:
      "Nous construisons et pilotons des tunnels d’acquisition locaux qui vous apportent des leads exclusifs (HVAC, plomberie, toiture, électricité, etc.)—optimisés pour des appels qualifiés et des rendez-vous, pas des métriques de vanité.",
    heroBullets: [
      "Leads 100% exclusifs (jamais revendus).",
      "Pré-qualification : type de service, urgence, ZIP code, délai.",
      "Livraison instantanée dans votre CRM ou par email.",
    ],
    heroCtaPrimary: "Planifier un call de découverte",
    heroCtaSecondary: "Parler à un spécialiste",

    trustLine: "Conçu pour des équipes Home Services orientées croissance",
    trustPill: "Transparence CPL + suivi qualité",
    trustNote: "On démarre léger, on valide la qualité, puis on scale.",

    rightCard: {
      headerTitle: "Qualification & livraison",
      headerPill: "Temps réel",
      bannerTitle: "Aperçu lead en direct",
      bannerSubtitle: "Demandes locales sur votre zone",
      item1Title: "Dépannage HVAC • Tampa, FL",
      item1Text: "Urgence : semaine • Service confirmé • ZIP ok",
      item2Title: "Devis toiture • Dallas, TX",
      item2Text: "Périmètre capturé • Délai : 30 jours • Téléphone vérifié",
      metric1Label: "Exclusivité",
      metric1Value: "100%",
      metric2Label: "Vitesse",
      metric2Value: "<5 min",
      metric3Label: "Local",
      metric3Value: "Par ZIP",
      button: "Planifier un call de découverte",
    },

    sections: {
      offerBadge: "Ce que vous obtenez",
      offerTitle: "Un système conçu pour des RDV—à un coût maîtrisé",
      offerSubtitle:
        "Tout est pensé autour de l’intention locale, de la rapidité de rappel, de la profondeur de qualification et d’une livraison fiable.",
      offers: [
        {
          title: "Tunnels par service",
          text: "HVAC, plomberie, toiture, électricité, nuisibles—landing pages + questions adaptées.",
          icon: Wrench,
        },
        {
          title: "Ciblage local & segmentation",
          text: "ZIP codes, rayon, quartiers—aligné sur votre capacité réelle d’équipes.",
          icon: MapPin,
        },
        {
          title: "Qualification orientée qualité",
          text: "Urgence, type de demande, signaux budget—pour réduire les leads inutiles.",
          icon: ShieldCheck,
        },
        {
          title: "Livraison temps réel",
          text: "Vers votre CRM ou email avec champs cohérents + notes utiles.",
          icon: Target,
        },
      ],

      processBadge: "Méthode",
      processTitle: "De la stratégie à la livraison des leads en 4 étapes",
      process: [
        {
          title: "Alignement zone & offre",
          text: "Définition mix services, zones, capacité et règles de qualification.",
        },
        {
          title: "Construction du tunnel (conversion)",
          text: "Landing pages + formulaires + profondeur de qualification + tracking.",
        },
        {
          title: "Acquisition locale",
          text: "Google / Meta / YouTube (si pertinent) + retargeting sur signaux forts.",
        },
        {
          title: "Livraison + optimisation hebdo",
          text: "Livraison instantanée, objectifs de rappel, itérations basées sur les résultats—not les clics.",
        },
      ],

      visuals: {
        creativeTitle: "Visuels orientés conversion (devis & appels)",
        targetingTitle: "Ciblage local & couverture de zones",
      },

      statsBadge: "Essentiel",
      statsTitle: "Les piliers que nous optimisons",
      stats: [
        { label: "Leads exclusifs", value: "100%" },
        { label: "Objectif de rappel", value: "< 5 min" },
        { label: "Cadence d’optimisation", value: "Hebdo" },
      ],
      statsNote:
        "On suit des signaux qualité (rapidité de rappel, taux de contact, qualification, taux de RDV) pour améliorer en continu lead → chantier.",

      proofBadge: "Pourquoi nous",
      proofTitle: "Pourquoi les équipes Home Services nous choisissent",
      proofBullets: [
        "Optimisation sur des RDV — pas le CPC.",
        "Qualification adaptée à votre mix et vos zones.",
        "Volume aligné sur votre capacité terrain réelle.",
        "Économie transparente avant de scaler.",
      ],
      proofCta: "Planifier un call de découverte",

      faqBadge: "FAQ",
      faqTitle: "FAQ Home Services",
      faq: [
        {
          q: "Les leads sont-ils exclusifs ?",
          a: "Oui. 100% des leads générés pour vous sont exclusifs (non revendus).",
        },
        {
          q: "Quels métiers couvrez-vous ?",
          a: "Souvent : HVAC, plomberie, toiture, électricité, nuisibles, rénovation (selon marché).",
        },
        {
          q: "Comment définissez-vous la qualité ?",
          a: "On s’aligne sur service, zone, urgence/délai et profondeur de qualification, puis on optimise via les résultats d’appels et le taux de RDV.",
        },
        {
          q: "Pouvez-vous envoyer les leads dans mon CRM ?",
          a: "Dans la plupart des cas oui. Sinon livraison email structurée.",
        },
      ],

      finalTitle: "Envie d’un plan de leads réaliste pour votre zone Home Services ?",
      finalText:
        "Dites-nous vos zones, mix services, taux de transformation et capacité. On construit un plan viable avant de scaler le budget.",
      finalPill: "Leads exclusifs • Livraison temps réel • Optimisation hebdo",
    },

    contact: {
      channelLabel: "WhatsApp",
      channelText: "Écrivez-nous",
    },

    callChecklist: {
      title: "Ce que nous aborderons lors de l’appel",
      items: [
        "Zones + mix (HVAC/plomberie/toiture/etc.)",
        "Capacité (volume mensuel) + process de rappel",
        "Règles de qualification (urgence, type de demande, propriétaire, etc.)",
        "CRM / workflow + définition du succès",
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

export default function HomeServicesPage() {
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

    // JSON-LD (ProfessionalService + FAQPage)
    const id = "ld-json-home-services";
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Leads Podium",
        description: t.seo.description,
        areaServed: ["US", "CA"],
        url: window.location.href,
        serviceType: "Home services lead generation",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (p.faq || []).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ]);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, [t, p.faq]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 space-y-16">
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

            <div className="mt-8 flex gap-3 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
              >
                {t.heroCtaPrimary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-white/40 transition"
                >
                <Phone className="w-4 h-4 mr-2" />
                {t.heroCtaSecondary}
                </a>

            </div>

            <div className="mt-8">
              <p className="text-sm text-white/80">{t.trustLine}</p>
              <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <BadgeCheck className="w-4 h-4 text-emerald-300" />
                {t.trustPill}
              </div>
              <p className="mt-3 text-xs text-white/70">{t.trustNote}</p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
            <div className="relative h-44">
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
      </section>

      {/* OFFER */}
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-xs font-semibold tracking-wider text-indigo-600">
            {p.offerBadge}
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            {p.offerTitle}
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl">{p.offerSubtitle}</p>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {p.offers.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <o.icon className="w-5 h-5 text-indigo-700" />
                </div>
                <p className="mt-4 font-bold">{o.title}</p>
                <p className="mt-2 text-sm text-gray-600">{o.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CALL CHECKLIST */}
        <div
          id="contact"
          className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden"
        >
          <div className="p-7 md:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full w-fit">
              <CalendarCheck className="w-4 h-4" />
              <span>Discovery</span>
            </div>

            <h3 className="mt-4 text-xl md:text-2xl font-extrabold tracking-tight">
              {t.callChecklist.title}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              {t.callChecklist.items.map((it, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex gap-3 flex-wrap">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
              >
                {t.callChecklist.button}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold text-gray-900 hover:border-gray-300 transition"
                >
                <Phone className="w-4 h-4 mr-2" />
                {language === "fr" ? "WhatsApp" : "WhatsApp"}
                </a>

            </div>

            <p className="mt-4 text-xs text-gray-500">{t.callChecklist.note}</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
        <div className="p-8 md:p-12">
          <p className="text-xs font-semibold tracking-wider text-indigo-600">
            {p.processBadge}
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            {p.processTitle}
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {p.process.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-100 p-6"
              >
                <p className="font-bold">{s.title}</p>
                <p className="mt-2 text-sm text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-gray-100">
              <img
                src={IMAGES.technician}
                alt={p.visuals.creativeTitle}
                className="w-full h-56 md:h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-transparent" />
              <p className="absolute bottom-4 left-5 text-white font-semibold">
                {p.visuals.creativeTitle}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gray-100">
              <img
                src={IMAGES.neighborhood}
                alt={p.visuals.targetingTitle}
                className="w-full h-56 md:h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-transparent" />
              <p className="absolute bottom-4 left-5 text-white font-semibold">
                {p.visuals.targetingTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + PROOF */}
      <section className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
          <p className="text-xs font-semibold tracking-wider text-indigo-600">
            {p.statsBadge}
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            {p.statsTitle}
          </h2>

          <div className="mt-7 grid grid-cols-3 gap-3">
            {p.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-gray-100 p-4 text-center"
              >
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className="mt-1 text-lg font-extrabold">{s.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-600">{p.statsNote}</p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
          <p className="text-xs font-semibold tracking-wider text-indigo-600">
            {p.proofBadge}
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            {p.proofTitle}
          </h2>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            {p.proofBullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
            >
              {p.proofCta}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
        <div className="p-8 md:p-12">
          <p className="text-xs font-semibold tracking-wider text-indigo-600">
            {p.faqBadge}
          </p>
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
              to="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
            >
              {t.callChecklist.button}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-white/40 transition"
            >
            <Phone className="w-4 h-4 mr-2" />
            {language === "fr" ? "WhatsApp" : "WhatsApp"}
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}
