import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  MessageCircle, // ✅ WhatsApp icon
  Target,
  Users,
  LineChart,
  BadgeCheck,
  FileText,
  RefreshCcw,
  ArrowRight,
  GraduationCap,
  BookOpen,
  School,
  CalendarCheck,
  ClipboardList,
  MapPin,
  ShieldCheck,
  Rocket,
  Wrench,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * External images (Unsplash). Replace later with hosted assets if needed.
 */
const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80",
  meeting:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80",
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
  campus:
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=80",
  avatar1:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80",
  avatar2:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80",
  avatar3:
    "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=96&q=80",
  avatar4:
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=96&q=80",
};

const WHATSAPP_URL =
  import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/972587990022";

const COPY = {
  en: {
    seo: {
      title: "Education Lead Generation (Enrollment & Admissions) | Leads Podium",
      description:
        "High-intent education leads optimized for enrollment: program inquiries, campus tours, consultations and admissions calls. Qualification-first funnels, multi-channel acquisition and real-time delivery.",
      keywords:
        "education leads, student enrollment leads, admissions leads, school lead generation, university leads, training program leads, online course leads",
      ogTitle: "Education Leads Built for Enrollment",
      ogDescription:
        "Quality-first enrollment funnels + multi-channel acquisition + real-time routing to your admissions team.",
      serviceType: "Education lead generation",
    },

    badge: "Education",
    badgeSub: "Admissions • Enrollment • High-intent inquiries",

    heroTitle: "High-intent education leads that turn into enrolled students",
    heroSubtitle:
      "We build acquisition funnels that generate exclusive program inquiries—optimized for eligibility, timeline, and enrollment conversion (not vanity metrics).",
    heroBullets: [
      "100% exclusive leads (never resold).",
      "Smart intake forms to qualify by program fit, prerequisites, and timeline.",
      "Delivered instantly to your CRM or admissions inbox with clear data fields.",
    ],
    heroCtaPrimary: "Schedule a discovery call",
    heroCtaSecondary: "Talk to a specialist",

    trustLine: "Built for serious education operators",
    trustPill: "Quality-first, enrollment-driven",
    trustNote: "Start lean, validate lead quality together, then scale what works.",

    rightCard: {
      headerTitle: "Qualification & delivery",
      headerPill: "Real-time",
      bannerTitle: "Live inquiry snapshot",
      bannerSubtitle: "Admissions-ready requests matched to your programs",
      item1Title: "Program inquiry • Austin, TX",
      item1Text: "Timeline: 30 days • Goal captured • Eligibility questions answered",
      item2Title: "Campus tour request • Orlando, FL",
      item2Text: "Program interest • Decision window • Contact preference captured",
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
      offerTitle: "An enrollment system designed around student fit",
      offerSubtitle:
        "Everything is engineered around qualified intent, admissions capacity, and predictable cost per enrolled student—before you scale budget.",

      offers: [
        {
          title: "Program inquiry funnels",
          text: "High-intent landing pages + intake questions tuned to program requirements.",
          icon: FileText,
        },
        {
          title: "Admissions call flow",
          text: "Real-time delivery and field mapping so your team follows up fast.",
          icon: BadgeCheck,
        },
        {
          title: "Tour & consultation scheduling",
          text: "Capture decision-stage prospects and route to the right calendar/workflow.",
          icon: CalendarCheck,
        },
        {
          title: "Segmentation & routing",
          text: "Route leads by campus, program, modality (online/on-site), or admissions team.",
          icon: Target,
        },
      ],

      programsBadge: "Use cases",
      programsTitle: "Education organizations we can support",
      programsSubtitle:
        "We tailor messaging and qualification by program type to increase enrollment probability.",
      programs: [
        {
          title: "Schools (private / charter)",
          text: "Enrollment interest, grade level, location and parent intent.",
          icon: School,
        },
        {
          title: "Universities & colleges",
          text: "Program fit, timeline, financial-aid intent and consult requests.",
          icon: GraduationCap,
        },
        {
          title: "Training & certification",
          text: "Prerequisites, availability, goals and readiness to start.",
          icon: ClipboardList,
        },
        {
          title: "Online programs",
          text: "Modality preference, schedule constraints and commitment window.",
          icon: BookOpen,
        },
      ],

      processBadge: "How it works",
      processTitle: "From strategy to qualified inquiries in 4 steps",
      process: [
        {
          title: "Offer + admissions alignment",
          text: "We define program mix, territories, eligibility filters and routing rules that match your admissions reality.",
        },
        {
          title: "Funnel build (high conversion)",
          text: "Landing pages + intake questions + validation—built to produce clean, admissions-ready leads.",
        },
        {
          title: "Multi-channel acquisition",
          text: "Google / Meta / YouTube + retargeting, tuned to education intent signals and seasonality.",
        },
        {
          title: "Delivery + optimization loop",
          text: "Real-time delivery, speed-to-lead targets and weekly tuning to improve enrollments.",
        },
      ],

      visuals: {
        creativeTitle: "Creative & messaging built for trust",
        targetingTitle: "Territory targeting & cohort segmentation",
        creativeHeading: "Messaging that increases consults and tours",
        creativeText:
        "We position your programs with clear outcomes, requirements, and next steps. The goal is qualified intent—not volume.",
        creativePill: "Built for admissions conversion",

        targetingHeading: "Targeting that matches your cohorts and campuses",
        targetingText:
        "Segment by program, campus, modality, geography, and decision window. Route leads to the right team with the right context.",
        targetingPill: "Territory + program segmentation",

      },

      statsBadge: "What matters",
      statsTitle: "Performance pillars we optimize",
      stats: [
        { label: "Exclusive leads", value: "100%" },
        { label: "Reply time target", value: "< 5 min" },
        { label: "Optimization cadence", value: "Weekly" },
      ],
      statsNote:
        "We track quality signals (speed-to-lead, contact rate, scheduled consults/tours, eligibility rate, enrollment feedback) to continuously improve lead-to-enrollment performance.",

      proofBadge: "Why Leads Podium",
      proofTitle: "Why education teams choose us",
      proofBullets: [
        "Funnels engineered for qualified enrollment intent—not cheap inquiries.",
        "Eligibility & fit questions that reduce low-quality leads and wasted follow-up.",
        "Volume aligned to your admissions capacity and response SLAs.",
        "Radical transparency on what’s working and what’s not—before scaling budget.",
      ],
      proofCta: "Schedule a discovery call",

      faqBadge: "FAQ",
      faqTitle: "Education FAQ",
      faq: [
        {
          q: "How do you reduce unqualified student inquiries?",
          a: "We add program-fit questions (prerequisites, goals, availability, timeline) and route leads based on eligibility. This reduces low-fit volume and improves admissions efficiency.",
        },
        {
          q: "Can you support multiple programs or campuses?",
          a: "Yes. We segment by campus, program, modality, and geography, then route to the correct admissions team or calendar.",
        },
        {
          q: "Do you integrate with our admissions CRM?",
          a: "In many cases, yes. Otherwise, we can deliver via email with structured fields so your team can process leads quickly.",
        },
        {
          q: "How do you handle enrollment cycles and seasonality?",
          a: "We plan budgets and messaging around intake windows, and we optimize weekly based on real outcomes (contacts, consults, enrollments).",
        },
      ],

      finalTitle: "Want a realistic enrollment plan that matches your admissions capacity?",
      finalText:
        "Tell us your programs, intake cycles, admissions workflow and response SLAs. We’ll build a plan that makes sense before spending serious budget.",
      finalPill: "Exclusive leads • Real-time delivery • Weekly optimization",
    },

    contact: {
      whatsappLabel: "WhatsApp",
      whatsappDisplay: "Chat with us",
      locationLabel: "Coverage",
      locationValue: "United States (multi-state)",
    },

    callChecklist: {
      title: "What we’ll ask on the call",
      items: [
        "Programs + campuses (or modalities) you want to prioritize",
        "Admissions capacity + speed-to-lead process (SLAs)",
        "Eligibility requirements + disqualifying rules",
        "CRM/workflow + how enrollment feedback is captured",
      ],
      button: "Schedule a discovery call",
      note: "No commitment. We’ll tell you honestly if your market economics make sense.",
    },
  },

  fr: {
    seo: {
      title: "Génération de leads Éducation (inscriptions & admissions) | Leads Podium",
      description:
        "Leads éducation à forte intention optimisés pour l’inscription : demandes de programme, visites, consultations et appels admissions. Tunnels orientés qualification, acquisition multi-canal, livraison temps réel.",
      keywords:
        "leads éducation, leads inscriptions, leads admissions, génération de leads école, leads université, leads formation, leads cours en ligne",
      ogTitle: "Leads Éducation Pensés pour l’Inscription",
      ogDescription:
        "Tunnels orientés qualité + acquisition multi-canal + routage temps réel vers votre équipe admissions.",
      serviceType: "Génération de leads éducation",
    },

    badge: "Éducation",
    badgeSub: "Admissions • Inscriptions • Demandes qualifiées",

    heroTitle: "Des leads éducation à forte intention qui se transforment en inscrits",
    heroSubtitle:
      "Nous construisons des tunnels d’acquisition qui génèrent des demandes exclusives—optimisés pour l’éligibilité, le timing et la conversion en inscription (pas des métriques de vanité).",
    heroBullets: [
      "Leads 100% exclusifs (jamais revendus).",
      "Formulaires intelligents : adéquation programme, prérequis, timing.",
      "Livraison instantanée dans votre CRM ou par email, avec champs clairs.",
    ],
    heroCtaPrimary: "Planifier un call de découverte",
    heroCtaSecondary: "Parler à un spécialiste",

    trustLine: "Pensé pour les structures sérieuses",
    trustPill: "Qualité d’abord, inscriptions ensuite",
    trustNote: "On démarre léger, on valide la qualité, puis on scale ce qui fonctionne.",

    rightCard: {
      headerTitle: "Qualification & livraison",
      headerPill: "Temps réel",
      bannerTitle: "Aperçu demandes en direct",
      bannerSubtitle: "Demandes prêtes pour les admissions",
      item1Title: "Demande programme • Austin, TX",
      item1Text: "Délai : 30 jours • Objectif capturé • Éligibilité renseignée",
      item2Title: "Demande visite • Orlando, FL",
      item2Text: "Intérêt programme • Fenêtre décision • Préférence contact",
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
      offerTitle: "Un système d’inscription conçu autour de l’adéquation étudiant",
      offerSubtitle:
        "Tout est pensé autour de l’intention, de la capacité admissions et d’un coût par inscrit maîtrisé—avant de scaler le budget.",

      offers: [
        {
          title: "Tunnels “demande de programme”",
          text: "Landing pages + questions d’inscription adaptées à vos critères.",
          icon: FileText,
        },
        {
          title: "Flux orienté admissions",
          text: "Livraison temps réel + mapping de champs pour rappeler vite.",
          icon: BadgeCheck,
        },
        {
          title: "Visite & consultation",
          text: "Captez les prospects “décision” et routez vers le bon agenda.",
          icon: CalendarCheck,
        },
        {
          title: "Segmentation & routage",
          text: "Routage par campus, programme, modalité, ou équipe admissions.",
          icon: Target,
        },
      ],

      programsBadge: "Cas d’usage",
      programsTitle: "Les structures éducation que nous pouvons accompagner",
      programsSubtitle:
        "Messages et qualification sont adaptés à votre type de programme pour maximiser l’inscription.",
      programs: [
        {
          title: "Écoles (privées / charters)",
          text: "Intérêt, niveau, zone, intention parentale.",
          icon: School,
        },
        {
          title: "Universités & collèges",
          text: "Adéquation programme, timing, demande de consultation.",
          icon: GraduationCap,
        },
        {
          title: "Formations & certifications",
          text: "Prérequis, disponibilité, objectifs et fenêtre de démarrage.",
          icon: ClipboardList,
        },
        {
          title: "Programmes en ligne",
          text: "Préférence de format, contraintes d’horaires et engagement.",
          icon: BookOpen,
        },
      ],

      processBadge: "Méthode",
      processTitle: "De la stratégie aux demandes qualifiées en 4 étapes",
      process: [
        {
          title: "Alignement offre & admissions",
          text: "Définition programmes, zones, filtres d’éligibilité et routage selon votre réalité terrain.",
        },
        {
          title: "Construction du tunnel (conversion)",
          text: "Landing pages + questions + validation—pour des leads propres, exploitables par admissions.",
        },
        {
          title: "Acquisition multi-canal",
          text: "Google / Meta / YouTube + retargeting, en tenant compte de la saisonnalité.",
        },
        {
          title: "Livraison + optimisation",
          text: "Livraison temps réel, objectifs de rappel et optimisation hebdo pour améliorer l’inscription.",
        },
      ],

      visuals: {
        creativeTitle: "Créa & messages pensés pour la confiance",
        targetingTitle: "Ciblage géographique & segmentation par cohortes",
        creativeHeading: "Messages qui augmentent les RDV et les visites",
        creativeText:
        "Nous positionnons vos programmes avec des résultats clairs, des prérequis et des prochaines étapes. Objectif : de l’intention qualifiée—pas du volume.",
        creativePill: "Pensé pour convertir côté admissions",

        targetingHeading: "Un ciblage aligné sur vos cohortes et vos campus",
        targetingText:
        "Segmentez par programme, campus, modalité, zone géographique et fenêtre de décision. Routez chaque demande vers la bonne équipe, avec le bon contexte.",
        targetingPill: "Segmentation territoire + programme",

      },

      statsBadge: "Essentiel",
      statsTitle: "Les piliers que nous optimisons",
      stats: [
        { label: "Leads exclusifs", value: "100%" },
        { label: "Objectif de rappel", value: "< 5 min" },
        { label: "Rythme d’optimisation", value: "Hebdomadaire" },
      ],
      statsNote:
        "Nous suivons les signaux de qualité (rapidité, contact, RDV/visites, éligibilité, retours inscriptions) pour améliorer en continu la conversion lead → inscrit.",

      proofBadge: "Pourquoi nous",
      proofTitle: "Pourquoi les équipes éducation nous choisissent",
      proofBullets: [
        "Tunnels conçus pour l’intention d’inscription—pas des demandes “cheap”.",
        "Questions d’éligibilité et d’adéquation qui réduisent les leads hors-cible.",
        "Volume aligné à votre capacité admissions et vos SLAs de rappel.",
        "Transparence totale sur ce qui marche… et ce qui ne marche pas.",
      ],
      proofCta: "Planifier un call de découverte",

      faqBadge: "FAQ",
      faqTitle: "FAQ Éducation",
      faq: [
        {
          q: "Comment réduisez-vous les demandes non éligibles ?",
          a: "Nous ajoutons des questions d’adéquation (prérequis, objectifs, disponibilité, timing) et nous filtrons/routons selon les critères définis.",
        },
        {
          q: "Pouvez-vous gérer plusieurs programmes ou campus ?",
          a: "Oui. Nous segmentons par campus, programme, format, et zone, puis routons vers l’équipe ou l’agenda concerné.",
        },
        {
          q: "Intégration CRM admissions : possible ?",
          a: "Dans la plupart des cas oui. Sinon livraison email structurée avec champs cohérents.",
        },
        {
          q: "Comment gérez-vous les cycles d’inscription ?",
          a: "Nous planifions l’acquisition selon les fenêtres d’admission et nous optimisons hebdomadairement selon les résultats réels (contacts, RDV, inscriptions).",
        },
      ],

      finalTitle: "Envie d’un plan d’inscription réaliste, aligné à votre capacité admissions ?",
      finalText:
        "Parlez-nous de vos programmes, cycles, process et SLAs de rappel. On construit un plan viable avant de scaler le budget.",
      finalPill: "Leads exclusifs • Livraison en temps réel • Optimisation hebdo",
    },

    contact: {
      phoneLabel: "Téléphone",
      whatsappDisplay: "Écrivez-nous",
      locationLabel: "Couverture",
      locationValue: "États-Unis (multi-États)",
    },

    callChecklist: {
      title: "Ce que nous aborderons lors de l’appel",
      items: [
        "Programmes + campus (ou modalités) à prioriser",
        "Capacité admissions + process de rappel (SLAs)",
        "Critères d’éligibilité + règles disqualifiantes",
        "CRM / workflow + retours sur les inscriptions",
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

export default function EducationPage() {
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

    const id = "ld-json-education";
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
      url: window.location.href,
      serviceType: t.seo.serviceType,
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
          <img src={IMAGES.hero} alt={t.badge} className="w-full h-full object-cover" loading="eager" />
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

            <p className="mt-4 text-white/85 max-w-xl leading-relaxed">{t.heroSubtitle}</p>

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
                href={WHATSAPP_URL}
target="_blank"
rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
              >
                <MessageCircle className="w-4 h-4" />
                {t.heroCtaSecondary}
              </a>

              <Link to="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-700 transition"
              >
                {t.heroCtaPrimary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-white/85 text-sm font-semibold">{t.trustLine}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t.trustPill}
                </span>
                <span className="text-white/70">{t.trustNote}</span>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-6 md:p-7">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-white">{t.rightCard.headerTitle}</p>
                  <p className="text-xs text-white/70">{t.rightCard.headerPill}</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <p className="text-sm font-semibold text-white">{t.rightCard.bannerTitle}</p>
                <p className="text-xs text-white/70 mt-0.5">{t.rightCard.bannerSubtitle}</p>

                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{t.rightCard.item1Title}</p>
                    <p className="text-xs text-white/70 mt-1">{t.rightCard.item1Text}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{t.rightCard.item2Title}</p>
                    <p className="text-xs text-white/70 mt-1">{t.rightCard.item2Text}</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-[11px] text-white/70">{t.rightCard.metric1Label}</p>
                    <p className="text-sm font-extrabold text-white">{t.rightCard.metric1Value}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-[11px] text-white/70">{t.rightCard.metric2Label}</p>
                    <p className="text-sm font-extrabold text-white">{t.rightCard.metric2Value}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-[11px] text-white/70">{t.rightCard.metric3Label}</p>
                    <p className="text-sm font-extrabold text-white">{t.rightCard.metric3Value}</p>
                  </div>
                </div>

                <Link to="/#contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-700 transition"
                >
                  {t.rightCard.button}
                  <ArrowRight className="w-4 h-4" />
                </Link>

              </div>
            </div>

            <div className="hidden lg:block absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">{p.offerBadge}</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {p.offerTitle}
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">{p.offerSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {p.offers.map((o, i) => {
            const Icon = o.icon;
            return (
              <div key={i} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-700" />
                </div>
                <h3 className="text-base font-bold text-gray-900">{o.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{o.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* USE CASES */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">{p.programsBadge}</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {p.programsTitle}
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">{p.programsSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {p.programs.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-700" />
                </div>
                <h3 className="text-base font-bold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">{p.processBadge}</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {p.processTitle}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
            <ol className="space-y-5">
              {p.process.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                    <span className="text-sm font-extrabold text-indigo-700">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-700">
                <LineChart className="w-4 h-4 text-indigo-700" />
                {p.statsNote}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              <div className="p-6 md:p-7">
                <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
                  {p.visuals.creativeTitle}
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-gray-900">
                  {p.visuals.creativeHeading}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {p.visuals.creativeText}
                </p>

                <div className="mt-5 flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-9 h-9 rounded-2xl bg-indigo-50 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-indigo-700" />
                  </div>
                  <span className="font-semibold">{p.visuals.creativePill}</span>
                </div>
              </div>

              <div className="relative h-44 md:h-52">
                <img src={IMAGES.meeting} alt={p.visuals.creativeTitle} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/10 to-transparent" />
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              <div className="p-6 md:p-7">
                <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
                  {p.visuals.targetingTitle}
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-gray-900">
                  {p.visuals.targetingHeading}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {p.visuals.targetingText}
                </p>

                <div className="mt-5 flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-9 h-9 rounded-2xl bg-indigo-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo-700" />
                  </div>
                  <span className="font-semibold">{p.visuals.targetingPill}</span>
                </div>
              </div>

              <div className="relative h-44 md:h-52">
                <img src={IMAGES.campus} alt={p.visuals.targetingTitle} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 via-slate-950/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">{p.statsBadge}</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            {p.statsTitle}
          </h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.statsNote}</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {p.stats.map((s, i) => (
            <div key={i} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center">
              <p className="text-sm text-gray-600">{s.label}</p>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF (Why us) */}
      <section className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">{p.proofBadge}</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              {p.proofTitle}
            </h2>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {p.proofBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link to="/#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-700 transition"
            >
              {p.proofCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-7">
            <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
              Outcomes
            </p>
            <h3 className="mt-2 text-xl md:text-2xl font-extrabold text-gray-900">
              What teams typically improve when quality is the focus
            </h3>

            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              {[
                {
                  avatar: IMAGES.avatar1,
                  name: "Admissions Director",
                  org: "Multi-campus",
                  quote:
                    "Fit questions removed low-quality inquiries. Contact rate and consult bookings improved quickly.",
                },
                {
                  avatar: IMAGES.avatar2,
                  name: "Program Manager",
                  org: "Certification provider",
                  quote:
                    "Cleaner leads with clear goals and timelines—our team spent less time on noise.",
                },
                {
                  avatar: IMAGES.avatar3,
                  name: "Enrollment Ops",
                  org: "Online programs",
                  quote:
                    "Weekly optimization on outcomes (not clicks) kept quality stable as we scaled.",
                },
                {
                  avatar: IMAGES.avatar4,
                  name: "Marketing Lead",
                  org: "Education group",
                  quote:
                    "Clear routing to CRM and consistent fields made follow-up faster and easier to track.",
                },
              ].map((x, i) => (
                <div key={i} className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <img
                      src={x.avatar}
                      alt={x.name}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 text-sm">{x.name}</p>
                      <p className="text-xs text-gray-600">{x.org}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-700 leading-relaxed">“{x.quote}”</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-700">
              We focus on qualification depth, response speed and feedback loops—so you enroll more with the same effort.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">{p.faqBadge}</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {p.faqTitle}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {p.faq.map((f, i) => (
            <details
              key={i}
              className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-bold text-gray-900">{f.q}</span>
                <span className="mt-0.5 inline-flex w-8 h-8 items-center justify-center rounded-full bg-gray-50 border border-gray-100 text-gray-700 group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="discovery" className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 md:p-10 text-white shadow-sm">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{p.finalTitle}</h2>
            <p className="mt-3 text-white/90 leading-relaxed">{p.finalText}</p>

            <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold bg-white/10 border border-white/15 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              {p.finalPill}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
target="_blank"
rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
              >
                <MessageCircle className="w-4 h-4" />
                {t.contact.whatsappLabel}: {t.contact.whatsappDisplay}
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-white/85 text-sm">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold">{t.contact.locationLabel}:</span>
              <span>{t.contact.locationValue}</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/15 p-6 md:p-7 backdrop-blur-xl">
            <p className="text-xs font-semibold tracking-wider text-white/80 uppercase">
              Call checklist
            </p>
            <h3 className="mt-2 text-xl font-extrabold">{t.callChecklist.title}</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/90">
              {t.callChecklist.items.map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 mt-0.5" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
target="_blank"
rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
            >
              {t.callChecklist.button}
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-4 rounded-2xl bg-white/10 border border-white/15 p-4 text-sm text-white/85">
              {t.callChecklist.note}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { icon: Users, label: "Capacity", value: "Aligned" },
                { icon: Wrench, label: "Routing", value: "Clean" },
                { icon: RefreshCcw, label: "Optimization", value: "Weekly" },
              ].map((k, i) => {
                const Icon = k.icon;
                return (
                  <div key={i} className="rounded-2xl bg-white/10 border border-white/15 p-3 text-center">
                    <div className="mx-auto w-9 h-9 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-[11px] text-white/75">{k.label}</p>
                    <p className="text-sm font-extrabold text-white">{k.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
