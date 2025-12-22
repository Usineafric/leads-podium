import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
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
  HeartPulse,
  Stethoscope,
  ClipboardList,
  CalendarCheck2,
  MapPin,
  Lock,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Free-to-use external images (Unsplash). You can download and host locally later if needed.
 */
const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1800&q=80",
  clinic:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=80",
  team:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=80",
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
  map:
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=80",
avatar1: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80",
  avatar2: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=96&q=80",
  avatar3: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=96&q=80",
  avatar4: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&q=80",

};

const COPY = {
  en: {
    seo: {
      title: "Healthcare Lead Generation (Appointments & Patient Inquiries) | Leads Podium",
      description:
        "Exclusive healthcare leads delivered in real time: appointment requests, consultations, and high-intent patient inquiries. Funnels, multi-channel acquisition, compliance-minded tracking, CRM routing.",
      keywords:
        "healthcare leads, patient leads, medical practice leads, clinic lead generation, appointment booking leads, dental leads, medspa leads, chiropractic leads, telehealth leads",
      ogTitle: "Exclusive Healthcare Leads — Built for Booked Appointments",
      ogDescription:
        "High-intent patient funnels + multi-channel traffic + real-time delivery. Built for clinics and practices that care about quality.",
    },

    badge: "Healthcare",
    badgeSub: "Appointments • Consultations • Patient inquiries",

    heroTitle: "High-intent healthcare leads that turn into booked appointments",
    heroSubtitle:
      "We build acquisition funnels that generate exclusive consultation requests and appointment inquiries—optimized for call speed, qualification, and patient fit (not vanity metrics).",
    heroBullets: [
      "100% exclusive leads (never resold).",
      "Smart intake forms to qualify by service, location, urgency, and eligibility.",
      "Delivered instantly to your CRM or email, with clear data fields.",
    ],
    heroCtaPrimary: "Schedule a discovery call",
    heroCtaSecondary: "Talk to a specialist",

    trustLine: "Built for patient-centric teams",
    trustPill: "Quality-first • Real-time delivery • Weekly optimization",
    trustNote: "Start lean, validate quality together, then scale what works.",

    rightCard: {
      headerTitle: "Qualification & routing",
      headerPill: "Real-time",
      bannerTitle: "Live inquiry snapshot",
      bannerSubtitle: "Consultation requests matched to your services",
      item1Title: "Primary care consult • Orlando, FL",
      item1Text: "Urgency captured • Preferred time slots • Insurance noted",
      item2Title: "Dental implant consult • Dallas, TX",
      item2Text: "Service intent confirmed • Budget context • Timeline captured",
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
      offerTitle: "A system designed to produce qualified patient opportunities",
      offerSubtitle:
        "Everything is engineered around speed-to-lead, qualification depth, and predictable cost per booked appointment.",
      offers: [
        {
          title: "Appointment request funnels",
          text: "Conversion-optimized pages + scheduling prompts + intent-based form flows.",
          icon: CalendarCheck2,
        },
        {
          title: "Service-specific qualification",
          text: "Questions tailored to your practice: service, urgency, eligibility, budget/coverage, and fit.",
          icon: ClipboardList,
        },
        {
          title: "Local territory targeting",
          text: "ZIP/radius targeting with messaging tuned to your city and patient intent.",
          icon: MapPin,
        },
        {
          title: "Reporting that matters",
          text: "We optimize for contact rate, show rate, and booked appointments—not vanity clicks.",
          icon: LineChart,
        },
      ],

      howBadge: "How it works",
      howTitle: "A simple system: generate → qualify → deliver → improve",
      howSubtitle:
        "We don’t optimize for vanity metrics. We optimize for booked appointments and downstream conversion.",
      how: [
        {
          step: "01",
          title: "Offer + intake alignment",
          text: "Define services, territories, intake rules, and qualification thresholds.",
        },
        {
          step: "02",
          title: "Funnel build (conversion)",
          text: "Landing pages + intake forms + trust elements + tracking setup.",
        },
        {
          step: "03",
          title: "Multi-channel acquisition",
          text: "Google / Meta / YouTube + retargeting to capture high intent locally.",
        },
        {
          step: "04",
          title: "Real-time delivery + weekly optimization",
          text: "Leads routed instantly with field mapping; optimization based on outcomes and quality signals.",
        },
      ],

      visuals: {
        creativeTitle: "Trust-first creative that converts",
        targetingTitle: "Local targeting & segmentation",
      },

      statsBadge: "Key levers",
      statsTitle: "What we track to improve inquiry → appointment",
      stats: [
        { label: "Lead exclusivity", value: "100%" },
        { label: "Speed-to-lead goal", value: "< 5 min" },
        { label: "Optimization cadence", value: "Weekly" },
      ],
      statsNote:
        "We track quality signals (call speed, contact rate, qualification rate, appointment rate, show rate) to continuously improve lead-to-appointment performance.",

      proofBadge: "Why us",
      proofTitle: "Why healthcare teams choose Leads Podium",
      proofBullets: [
        "Optimization on booked appointments — not vanity CPC.",
        "Qualification tuned to your services and patient fit.",
        "Volume aligned to your real call capacity and schedule.",
        "Transparent economics before scaling spend.",
      ],
      proofCta: "Book a discovery call",

      faqBadge: "FAQ",
      faqTitle: "Healthcare FAQ",
      faq: [
        {
          q: "Are leads exclusive?",
          a: "Yes. Leads we generate for you are 100% exclusive (not resold).",
        },
        {
          q: "Which services can you support?",
          a: "Common segments include primary care, dental, medspa, chiropractic/physical therapy, and other local practices (market-dependent).",
        },
        {
          q: "Can you route leads into my CRM or scheduling system?",
          a: "In most cases yes. Otherwise we deliver structured lead fields via email with clear mapping.",
        },
        {
          q: "What impacts pricing?",
          a: "Market competition, service line, qualification depth, and monthly volume. We validate unit economics before scaling.",
        },
      ],

      finalTitle: "Want a realistic appointment pipeline for your territory?",
      finalText:
        "Tell us your services, coverage area, close/show rates, and call capacity. We’ll map a viable plan before you scale spend.",
      finalPill: "Exclusive leads • Real-time delivery • Weekly optimization",
    },

    contact: {
      phoneLabel: "Phone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "What we’ll ask on the call",
      items: [
        "Territory + service mix (and eligibility rules)",
        "Current show rate + booking rate + patient value",
        "Speed-to-lead process + staffing capacity",
        "CRM/scheduling tools + lead disposition feedback loop",
      ],
      button: "Schedule a discovery call",
      note:
        "No commitment. We’ll tell you honestly if your market economics make sense.",
    },

    testimonials: {
      badge: "Outcomes",
      title: "What teams typically improve when quality is the focus",
      items: [
        {
          name: "Clinic Director",
          role: "Multi-location practice",
          text: "The intake forms filtered out low-fit inquiries. Our contact rate and booked consults improved within weeks.",
          avatar: IMAGES.avatar1,
        },
        {
          name: "Practice Owner",
          role: "Local dental clinic",
          text: "Better routing and faster follow-up. We stopped wasting time on low-intent leads and focused on real consults.",
          avatar: IMAGES.avatar2,
        },
        {
          name: "Operations Lead",
          role: "Specialty services",
          text: "Weekly optimization based on outcomes (not clicks) made the difference. Quality stayed consistent as we scaled.",
          avatar: IMAGES.avatar3,
        },
        {
          name: "Marketing Manager",
          role: "Healthcare group",
          text: "Clear reporting and field mapping into our CRM. Everyone finally trusted the data and the process.",
          avatar: IMAGES.avatar4,
        },
      ],
    },

    compliance: {
      badge: "Trust & compliance",
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
        "Reminder: Every healthcare organization has its own compliance requirements. We’ll align intake fields and routing to your policies.",
    },
  },

  fr: {
    seo: {
      title: "Leads Healthcare (Rendez-vous & demandes patients) | Leads Podium",
      description:
        "Leads healthcare exclusifs livrés en temps réel : demandes de rendez-vous, consultations et prospects patients à forte intention. Funnels, acquisition multi-canal, tracking orienté confiance, livraison CRM.",
      keywords:
        "leads healthcare, leads patients, génération de leads médical, leads clinique, leads rendez-vous, leads dentiste, leads medspa, leads chiropracteur, leads téléconsultation",
      ogTitle: "Leads Healthcare exclusifs — pensés pour des RDV qualifiés",
      ogDescription:
        "Funnels patients + trafic multi-canal + livraison temps réel. Pensé pour les cliniques et cabinets orientés qualité.",
    },

    badge: "Healthcare",
    badgeSub: "Rendez-vous • Consultations • Demandes patients",

    heroTitle: "Des leads healthcare à forte intention qui deviennent des rendez-vous qualifiés",
    heroSubtitle:
      "Nous construisons des funnels d’acquisition qui génèrent des demandes de consultation et de rendez-vous exclusives — optimisées pour la rapidité de rappel, la qualification et l’adéquation patient (pas les métriques de vanité).",
    heroBullets: [
      "100% leads exclusifs (jamais revendus).",
      "Formulaires intelligents : service, zone, urgence, éligibilité, contexte.",
      "Livraison instantanée vers CRM ou email, avec champs clairs.",
    ],
    heroCtaPrimary: "Planifier un call de découverte",
    heroCtaSecondary: "Parler à un spécialiste",

    trustLine: "Conçu pour les équipes orientées patient",
    trustPill: "Qualité d’abord • Livraison temps réel • Optimisation hebdo",
    trustNote: "On démarre petit, on valide ensemble, puis on scale ce qui fonctionne.",

    rightCard: {
      headerTitle: "Qualification & routage",
      headerPill: "Temps réel",
      bannerTitle: "Aperçu d’une demande",
      bannerSubtitle: "Demandes de consultation alignées à vos services",
      item1Title: "Consultation médecine • Orlando, FL",
      item1Text: "Urgence capturée • Créneaux préférés • Assurance notée",
      item2Title: "Consult implant dentaire • Dallas, TX",
      item2Text: "Intention confirmée • Contexte budget • Délai capturé",
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
      offerTitle: "Un système conçu pour générer des opportunités patients qualifiées",
      offerSubtitle:
        "Tout est pensé autour de la rapidité de rappel, de la profondeur de qualification et d’un coût par rendez-vous maîtrisé.",
      offers: [
        {
          title: "Funnels de demande de RDV",
          text: "Pages convertissantes + prompts de prise de rendez-vous + flows par intention.",
          icon: CalendarCheck2,
        },
        {
          title: "Qualification par service",
          text: "Questions adaptées à votre activité : service, urgence, éligibilité, couverture/budget, fit.",
          icon: ClipboardList,
        },
        {
          title: "Ciblage local",
          text: "Ciblage ZIP/rayon et messages alignés à votre ville et à l’intention patient.",
          icon: MapPin,
        },
        {
          title: "Reporting utile",
          text: "Optimisation sur contact, RDV et présence—not vanity clicks.",
          icon: LineChart,
        },
      ],

      howBadge: "Process",
      howTitle: "Un système simple : générer → qualifier → livrer → améliorer",
      howSubtitle:
        "On n’optimise pas les métriques de vanité. On optimise les rendez-vous et la conversion.",
      how: [
        {
          step: "01",
          title: "Alignement offre + intake",
          text: "Services, zones, règles d’intake et seuils de qualification.",
        },
        {
          step: "02",
          title: "Construction du funnel (conversion)",
          text: "Landing pages + formulaires + éléments de confiance + tracking.",
        },
        {
          step: "03",
          title: "Acquisition multi-canal",
          text: "Google / Meta / YouTube + retargeting pour capter l’intention locale.",
        },
        {
          step: "04",
          title: "Livraison + optimisation hebdo",
          text: "Routage temps réel avec mapping des champs ; optimisations basées sur les résultats.",
        },
      ],

      visuals: {
        creativeTitle: "Créa orientée confiance",
        targetingTitle: "Ciblage local & segmentation",
      },

      statsBadge: "Essentiel",
      statsTitle: "Ce que nous suivons pour améliorer demande → rendez-vous",
      stats: [
        { label: "Exclusivité lead", value: "100%" },
        { label: "Objectif rappel", value: "< 5 min" },
        { label: "Cadence d’optimisation", value: "Hebdo" },
      ],
      statsNote:
        "Nous suivons des signaux qualité (rapidité de rappel, taux de contact, qualification, taux de RDV, show rate) afin d’améliorer en continu la performance.",

      proofBadge: "Pourquoi nous",
      proofTitle: "Pourquoi les équipes healthcare nous choisissent",
      proofBullets: [
        "Optimisation sur les RDV — pas le CPC.",
        "Qualification alignée à vos services et au fit patient.",
        "Volume aligné à votre capacité réelle d’appels et de planning.",
        "Économie transparente avant de scaler le budget.",
      ],
      proofCta: "Planifier un call de découverte",

      faqBadge: "FAQ",
      faqTitle: "FAQ Healthcare",
      faq: [
        {
          q: "Les leads sont-ils exclusifs ?",
          a: "Oui. 100% des leads générés pour vous sont exclusifs (non revendus).",
        },
        {
          q: "Quels services pouvez-vous couvrir ?",
          a: "Segments fréquents : médecine, dentaire, medspa, chiropraxie/kiné, et autres services locaux (selon marché).",
        },
        {
          q: "Pouvez-vous livrer dans mon CRM ou mon outil de planning ?",
          a: "Dans la plupart des cas oui. Sinon livraison email structurée avec mapping clair.",
        },
        {
          q: "Qu’est-ce qui impacte le tarif ?",
          a: "Concurrence, type de service, profondeur de qualification et volume mensuel. On valide l’économie avant de scaler.",
        },
      ],

      finalTitle: "Envie d’un pipeline de RDV viable sur votre zone ?",
      finalText:
        "Dites-nous vos services, zones, taux de RDV/show, et capacité d’appels. On construit un plan viable avant de scaler.",
      finalPill: "Leads exclusifs • Livraison temps réel • Optimisation hebdo",
    },

    contact: {
      phoneLabel: "Téléphone",
      phoneValue: "1-561-476-0504",
    },

    callChecklist: {
      title: "Ce que nous aborderons lors de l’appel",
      items: [
        "Zones + mix services (et règles d’éligibilité)",
        "Taux de RDV + show rate + valeur patient",
        "Process de rappel + capacité équipe",
        "CRM/planning + boucle de feedback (dispositions)",
      ],
      button: "Planifier un call de découverte",
      note:
        "Sans engagement. Nous vous dirons honnêtement si l’économie de votre marché est viable.",
    },

    testimonials: {
      badge: "Résultats",
      title: "Ce qui s’améliore quand on se concentre sur la qualité",
      items: [
        {
          name: "Directeur de clinique",
          role: "Réseau multi-sites",
          text: "Les formulaires ont filtré les demandes hors cible. Contact rate et RDV ont monté rapidement.",
          avatar: IMAGES.avatar1,
        },
        {
          name: "Gérant",
          role: "Cabinet dentaire",
          text: "Meilleur routage et rappel plus rapide. Moins de bruit, plus de consultations réelles.",
          avatar: IMAGES.avatar2,
        },
        {
          name: "Ops",
          role: "Spécialité",
          text: "Optimisation hebdo sur les résultats (pas sur les clics). La qualité reste stable en scalant.",
          avatar: IMAGES.avatar3,
        },
        {
          name: "Marketing",
          role: "Groupe healthcare",
          text: "Mapping clair vers le CRM et reporting lisible. Tout le monde fait enfin confiance au process.",
          avatar: IMAGES.avatar4,
        },
      ],
    },

    compliance: {
      badge: "Confiance & conformité",
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
          text: "Des formulations transparentes pour aligner les attentes.",
        },
        {
          icon: ShieldCheck,
          title: "Livraison CRM propre",
          text: "Mapping cohérent et payloads structurés pour réduire les erreurs et gagner en vitesse.",
        },
      ],
      note:
        "Rappel : chaque organisation healthcare a ses propres exigences. On aligne les champs d’intake et le routage à vos politiques.",
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

export default function HealthcarePage() {
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

    const id = "ld-json-healthcare";
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
      serviceType: "Healthcare lead generation",
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
                  src={IMAGES.team}
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
              src={IMAGES.clinic}
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
                Funnels designed to build trust quickly and capture the right patient signals.
              </p>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="font-bold">{p.visuals.targetingTitle}</div>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Territory segmentation by ZIP/radius, service line, and urgency—so the right inquiries reach your team.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-violet-600" />
                </div>
                <div className="font-bold">Patient fit filters</div>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Intake questions tuned to your policies so your team spends time on the patients you can actually serve.
              </p>
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
              src={IMAGES.analytics}
              alt="Analytics"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <p className="text-xs font-semibold flex items-center gap-2">
                <LineChart className="w-4 h-4 text-indigo-200" />
                Outcome-based optimization
              </p>
              <p className="text-[12px] text-white/80 mt-1">
                We iterate based on calls, booking outcomes and quality signals—not clicks.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white">
            <img
              src={IMAGES.map}
              alt="Local targeting"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <p className="text-xs font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-200" />
                Local segmentation
              </p>
              <p className="text-[12px] text-white/80 mt-1">
                Target ZIP/radius and tailor messaging by service line and urgency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + NOTE */}
      <section className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold text-indigo-600">{p.statsBadge}</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold tracking-tight">
            {p.statsTitle}
          </h2>
          <p className="mt-4 text-gray-600">{p.statsNote}</p>

          <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="font-bold flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-indigo-600" />
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

          {/* TRUST & COMPLIANCE */}
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

      {/* PROOF */}
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

          {/* Testimonials */}
          <div className="rounded-3xl border border-gray-100 p-6">
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
