import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Sun,
  BatteryCharging,
  CheckCircle,
  BarChart3,
  Target,
  Users,
  Shield,
  Phone,
  Gauge,
  Leaf,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=80",
  install:
    "https://images.unsplash.com/photo-1621905252472-943afaa20e20?auto=format&fit=crop&w=2200&q=80",
  meeting:
    "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=2200&q=80",
};

const COPY = {
  en: {
    seo: {
      title: "Solar & Energy Leads | Leads Podium",
      description:
        "Exclusive, real-time solar and energy leads with qualification built for speed-to-lead, set rate, and close rate improvement.",
      keywords:
        "solar leads, energy leads, solar appointments, solar marketing, exclusive leads, home solar, commercial solar, battery storage leads",
      ogTitle: "Solar & Energy Leads",
      ogDescription:
        "Exclusive, real-time leads for solar and energy companies — qualified for higher set and close rates.",
    },
    sections: {
      heroBadge: "Built for high-velocity solar teams",
      heroTitle: "High-Intent Solar & Energy Leads",
      heroSubtitle:
        "Exclusive, real-time leads for residential & commercial solar, storage, and energy upgrades — optimized for set rate and close rate.",
      heroCta: "Get Solar Leads",
      heroPill: "Exclusive leads • Real-time delivery • Weekly optimization",

      trust: [
        { k: "Delivery", v: "Real-time" },
        { k: "Exclusivity", v: "100%" },
        { k: "Optimization", v: "Weekly" },
      ],

      offerBadge: "What we deliver",
      offerTitle: "Leads that your reps can actually work",
      offerSubtitle:
        "We filter for intent, budget-fit signals, and timeline — so your team spends time on closable prospects (not low-quality form fills).",
      offers: [
        {
          icon: Target,
          title: "Intent-focused intake",
          text: "Qualification questions that reduce tire-kickers and boost contact rate.",
        },
        {
          icon: Gauge,
          title: "Speed-to-lead optimized",
          text: "Structured delivery so your team can call fast and book appointments.",
        },
        {
          icon: BarChart3,
          title: "Performance loops",
          text: "We monitor call outcomes, appointment rate, and quality signals to iterate.",
        },
        {
          icon: Shield,
          title: "Brand-safe acquisition",
          text: "Clean funnels and compliant messaging aligned with your market realities.",
        },
      ],

      productLinesBadge: "Use cases",
      productLinesTitle: "Solar & energy segments we can support",
      productLinesSubtitle:
        "We adapt qualification by segment — rooftop vs storage vs commercial — because the close path isn’t the same.",
      productLines: [
        {
          icon: Sun,
          title: "Residential solar",
          text: "Homeowners evaluating panels, financing, and installation timelines.",
        },
        {
          icon: BatteryCharging,
          title: "Battery storage",
          text: "Prospects looking for backup power, savings, and resilience upgrades.",
        },
        {
          icon: Zap,
          title: "Commercial solar",
          text: "Business owners exploring energy cost reduction and incentives.",
        },
        {
          icon: Leaf,
          title: "Energy efficiency upgrades",
          text: "High-intent homeowners seeking audits, insulation, HVAC optimization (market-dependent).",
        },
      ],

      howBadge: "How it works",
      howTitle: "A simple system: generate → qualify → deliver → improve",
      howSubtitle:
        "We don’t optimize for vanity metrics. We optimize for booked appointments and downstream conversion.",
      how: [
        {
          step: "01",
          title: "Solar-specific funnels",
          text: "Landing pages built for conversion, with the right qualification depth for your model.",
        },
        {
          step: "02",
          title: "Precision traffic",
          text: "Google + Meta targeting to capture high intent in your territories.",
        },
        {
          step: "03",
          title: "Real-time delivery",
          text: "Leads routed to your CRM or email instantly with consistent field mapping.",
        },
        {
          step: "04",
          title: "Weekly optimization",
          text: "We iterate based on call outcomes, set rate, and quality signals — not clicks.",
        },
      ],

      statsBadge: "Key levers",
      statsTitle: "What we track to improve lead-to-deal",
      stats: [
        { label: "Lead exclusivity", value: "100%" },
        { label: "Speed-to-lead goal", value: "< 5 min" },
        { label: "Optimization cadence", value: "Weekly" },
      ],
      statsNote:
        "We track quality signals (call speed, contact rate, qualification rate, appointment rate) to continuously improve performance.",

      proofBadge: "Why us",
      proofTitle: "Why solar teams choose Leads Podium",
      proofBullets: [
        "Optimization on booked appointments — not vanity CPC.",
        "Qualification tuned to your market and sales process.",
        "Volume aligned to your real call capacity.",
        "Transparent economics before scaling spend.",
      ],
      proofCta: "Book a discovery call",

      faqBadge: "FAQ",
      faqTitle: "Solar & Energy FAQ",
      faq: [
        {
          q: "Are leads exclusive?",
          a: "Yes. Leads we generate for you are 100% exclusive (not resold).",
        },
        {
          q: "Which territories do you cover?",
          a: "We can target most US markets depending on competitiveness and your operational coverage.",
        },
        {
          q: "What impacts pricing?",
          a: "Competition, segment (residential/commercial/storage), qualification depth, and monthly volume.",
        },
        {
          q: "Can you deliver into my CRM?",
          a: "In most cases yes. Otherwise we deliver structured lead fields via email.",
        },
      ],

      finalTitle: "Want a realistic lead plan for your solar territory?",
      finalText:
        "Tell us your coverage area, offer, close rates, and call capacity. We’ll map a viable plan before you scale spend.",
      finalPill: "Exclusive leads • Real-time delivery • Weekly optimization",
    },

    contact: {
      phoneLabel: "Phone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "What we’ll cover on the call",
      items: [
        "Territory coverage + segment mix (residential / storage / commercial)",
        "Offer structure (cash/finance/PPA) + close rates",
        "Speed-to-lead workflow + call capacity",
        "CRM + lead lifecycle + outcomes tracking",
      ],
      button: "Schedule a discovery call",
      note:
        "No commitment. We’ll tell you honestly if your market economics make sense.",
    },
  },

  fr: {
    seo: {
      title: "Leads Solar & Énergie | Leads Podium",
      description:
        "Leads solaires & énergie exclusifs, livrés en temps réel, avec qualification pensée pour améliorer rappel, RDV et taux de signature.",
      keywords:
        "leads solaire, leads énergie, rendez-vous solaire, marketing solaire, leads exclusifs, panneaux solaires, stockage batterie",
      ogTitle: "Leads Solar & Énergie",
      ogDescription:
        "Leads exclusifs en temps réel pour les entreprises solaire & énergie — qualifiés pour augmenter RDV et signatures.",
    },
    sections: {
      heroBadge: "Conçu pour les équipes solaires performantes",
      heroTitle: "Leads Solar & Énergie à forte intention",
      heroSubtitle:
        "Leads exclusifs, livrés en temps réel pour le solaire résidentiel & commercial, le stockage batterie et les upgrades énergétiques — optimisés pour le taux de RDV et le closing.",
      heroCta: "Obtenir des leads Solar",
      heroPill: "Leads exclusifs • Livraison temps réel • Optimisation hebdo",

      trust: [
        { k: "Livraison", v: "Temps réel" },
        { k: "Exclusivité", v: "100%" },
        { k: "Optimisation", v: "Hebdomadaire" },
      ],

      offerBadge: "Ce que nous livrons",
      offerTitle: "Des leads exploitables par vos commerciaux",
      offerSubtitle:
        "On filtre l’intention, des signaux de budget/éligibilité, et le timing — pour concentrer vos efforts sur des prospects convertibles.",
      offers: [
        {
          icon: Target,
          title: "Qualification orientée intention",
          text: "Questions qui réduisent les curieux et augmentent le taux de contact.",
        },
        {
          icon: Gauge,
          title: "Optimisé pour le rappel rapide",
          text: "Livraison structurée pour rappeler vite et prendre plus de RDV.",
        },
        {
          icon: BarChart3,
          title: "Boucles de perf",
          text: "Suivi des résultats d’appel, RDV et signaux qualité pour itérer.",
        },
        {
          icon: Shield,
          title: "Acquisition propre & brand-safe",
          text: "Funnels propres, messages alignés au marché et à vos contraintes.",
        },
      ],

      productLinesBadge: "Segments",
      productLinesTitle: "Segments Solar & énergie que nous pouvons couvrir",
      productLinesSubtitle:
        "On adapte la qualification selon le segment — résidentiel, stockage, commercial — car le cycle de vente n’est pas le même.",
      productLines: [
        {
          icon: Sun,
          title: "Solaire résidentiel",
          text: "Propriétaires qui évaluent panneaux, financement, et délai d’installation.",
        },
        {
          icon: BatteryCharging,
          title: "Stockage batterie",
          text: "Prospects recherchant backup, économies et résilience énergétique.",
        },
        {
          icon: Zap,
          title: "Solaire commercial",
          text: "Dirigeants explorant baisse de facture et incentives (selon zones).",
        },
        {
          icon: Leaf,
          title: "Upgrades efficacité énergétique",
          text: "Audit, isolation, optimisation HVAC (selon marché et appétence).",
        },
      ],

      howBadge: "Process",
      howTitle: "Un système simple : générer → qualifier → livrer → améliorer",
      howSubtitle:
        "On n’optimise pas les métriques de vanité. On optimise les RDV et la conversion.",
      how: [
        {
          step: "01",
          title: "Funnels orientés solaire",
          text: "Landing pages convertissantes + profondeur de qualification adaptée.",
        },
        {
          step: "02",
          title: "Trafic précis",
          text: "Google + Meta pour capter l’intention sur vos zones.",
        },
        {
          step: "03",
          title: "Livraison en temps réel",
          text: "Vers votre CRM ou email instantanément avec champs cohérents.",
        },
        {
          step: "04",
          title: "Optimisation hebdo",
          text: "Itérations basées sur les appels, RDV et signaux qualité — pas les clics.",
        },
      ],

      statsBadge: "Essentiel",
      statsTitle: "Les leviers que nous suivons pour améliorer lead → deal",
      stats: [
        { label: "Exclusivité lead", value: "100%" },
        { label: "Objectif rappel", value: "< 5 min" },
        { label: "Cadence d’optimisation", value: "Hebdo" },
      ],
      statsNote:
        "On suit des signaux qualité (rapidité de rappel, taux de contact, qualification, taux de RDV) afin d’améliorer en continu la perf.",

      proofBadge: "Pourquoi nous",
      proofTitle: "Pourquoi les équipes solaires nous choisissent",
      proofBullets: [
        "Optimisation sur les RDV — pas le CPC.",
        "Qualification adaptée à votre cycle de vente.",
        "Volume aligné sur votre capacité réelle d’appels.",
        "Économie transparente avant de scaler le budget.",
      ],
      proofCta: "Planifier un call de découverte",

      faqBadge: "FAQ",
      faqTitle: "FAQ Solar & Énergie",
      faq: [
        {
          q: "Les leads sont-ils exclusifs ?",
          a: "Oui. 100% des leads générés pour vous sont exclusifs (non revendus).",
        },
        {
          q: "Quelles zones couvrez-vous ?",
          a: "Nous pouvons cibler la plupart des marchés US selon compétitivité et couverture opérationnelle.",
        },
        {
          q: "Qu’est-ce qui impacte le tarif ?",
          a: "Concurrence, segment (résidentiel/commercial/stockage), niveau de qualification, volume mensuel.",
        },
        {
          q: "Pouvez-vous envoyer les leads dans mon CRM ?",
          a: "Dans la plupart des cas oui. Sinon livraison email structurée.",
        },
      ],

      finalTitle: "Envie d’un plan de leads viable sur votre zone solaire ?",
      finalText:
        "Dites-nous vos zones, offre, taux de transformation et capacité d’appels. On construit un plan viable avant de scaler.",
      finalPill: "Leads exclusifs • Livraison temps réel • Optimisation hebdo",
    },

    contact: {
      phoneLabel: "Téléphone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "Ce que nous aborderons lors de l’appel",
      items: [
        "Zones couvertes + mix (résidentiel / stockage / commercial)",
        "Offre (cash/financement/PPA) + taux de conversion",
        "Process de rappel + capacité d’appels",
        "CRM + cycle de vie + suivi des résultats",
      ],
      button: "Planifier un call de découverte",
      note:
        "Sans engagement. Nous vous dirons honnêtement si l’économie de votre marché est viable.",
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

export default function SolarEnergyPage() {
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

    const id = "ld-json-solar";
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
      areaServed: "US",
      serviceType: "Solar & Energy Lead Generation",
    });
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, [t]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-14 space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <img
          src={IMAGES.hero}
          alt="Solar panels"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/30 to-transparent" />

        <div className="relative p-8 md:p-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 text-white border border-white/15 px-3 py-1.5 rounded-full">
            <Sun className="w-4 h-4" />
            {p.heroBadge}
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                {p.heroTitle}
              </h1>
              <p className="mt-4 text-white/85 text-base md:text-lg max-w-xl">
                {p.heroSubtitle}
              </p>

              <div className="mt-7 flex gap-3 flex-wrap">
                <Link
                  to="/#pricing"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold shadow-sm hover:bg-indigo-700 transition"
                >
                  {p.heroCta}
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

              <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <CheckCircle className="w-4 h-4" />
                {p.heroPill}
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {p.trust.map((it) => (
                  <div
                    key={it.k}
                    className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3"
                  >
                    <p className="text-[11px] uppercase tracking-wide text-white/70">
                      {it.k}
                    </p>
                    <p className="text-sm font-extrabold text-white">{it.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className="rounded-3xl bg-white/95 border border-white/30 shadow-sm p-6 md:p-7">
              <p className="text-xs font-semibold text-indigo-600 uppercase">
                {language === "fr" ? "Audit rapide" : "Quick audit"}
              </p>
              <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-900">
                {language === "fr"
                  ? "On valide l’économie avant de scaler"
                  : "We validate economics before scaling"}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {language === "fr"
                  ? "Objectif : une acquisition rentable, compatible avec votre capacité d’appels et votre cycle de vente."
                  : "Goal: profitable acquisition aligned with your call capacity and sales cycle."}
              </p>

              <div className="mt-5 space-y-3 text-sm">
                {t.callChecklist.items.map((x) => (
                  <div key={x} className="flex gap-3">
                    <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100">
                      <CheckCircle className="w-4 h-4 text-indigo-700" />
                    </span>
                    <p className="text-slate-700">{x}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/#pricing"
                className="mt-6 w-full inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-950 transition"
              >
                {t.callChecklist.button}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <p className="mt-3 text-xs text-slate-500">{t.callChecklist.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
            {p.offerBadge}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {p.offerTitle}
          </h2>
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
            src={IMAGES.install}
            alt="Solar installation"
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
                ? "Plus de RDV, moins de pertes de temps."
                : "More appointments, less wasted time."}
            </p>
            <p className="mt-2 text-white/85 text-sm max-w-xl">
              {language === "fr"
                ? "Qualification + livraison structurée pour rappeler vite et closer plus."
                : "Qualification + structured delivery so you can call fast and close more."}
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

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {p.productLines.map((x) => {
            const Icon = x.icon;
            return (
              <div
                key={x.title}
                className="rounded-2xl border border-gray-100 p-5 hover:border-indigo-200 transition"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 mb-3">
                  <Icon className="w-5 h-5 text-indigo-700" />
                </div>
                <h3 className="font-bold">{x.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{x.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW */}
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
            {p.howBadge}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {p.howTitle}
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl">{p.howSubtitle}</p>

          <div className="mt-8 space-y-4">
            {p.how.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="text-xs font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-xl px-3 py-1.5">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <img
            src={IMAGES.meeting}
            alt="Team meeting"
            className="w-full h-80 md:h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-slate-950/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 text-white border border-white/15 px-3 py-1.5 rounded-full">
              <Zap className="w-4 h-4" />
              {language === "fr" ? "Boucle d’amélioration" : "Improvement loop"}
            </div>
            <p className="mt-3 text-white text-lg font-extrabold">
              {language === "fr"
                ? "On optimise sur le résultat commercial."
                : "We optimize for sales outcomes."}
            </p>
            <p className="mt-2 text-white/85 text-sm max-w-xl">
              {language === "fr"
                ? "RDV, taux de contact, qualification, retours d’appels : on itère chaque semaine."
                : "Appointments, contact rate, qualification and call outcomes: iterated weekly."}
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
        <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
          {p.statsBadge}
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {p.statsTitle}
        </h2>

        <div className="mt-7 grid md:grid-cols-3 gap-4">
          {p.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-100 p-6"
            >
              <p className="text-sm text-gray-600">{s.label}</p>
              <p className="mt-2 text-3xl font-extrabold tracking-tight">
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-gray-600 max-w-3xl">{p.statsNote}</p>
      </section>

      {/* PROOF + FAQ */}
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
            {p.proofBadge}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {p.proofTitle}
          </h2>

          <div className="mt-7 space-y-3">
            {p.proofBullets.map((b) => (
              <div key={b} className="flex gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100">
                  <CheckCircle className="w-4 h-4 text-indigo-700" />
                </span>
                <p className="text-sm text-gray-700">{b}</p>
              </div>
            ))}
          </div>

          <Link
            to="/#pricing"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold shadow-sm hover:bg-indigo-700 transition"
          >
            {p.proofCta}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-10">
          <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">
            {p.faqBadge}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
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
            <CheckCircle className="w-4 h-4" />
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
    </div>
  );
}
