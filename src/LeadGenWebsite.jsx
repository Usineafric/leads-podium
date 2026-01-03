import React, { useState, useEffect, useRef } from 'react';
import { translations } from "./i18n/translations";
import { useLanguage } from "./i18n/LanguageContext";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  BarChart3,
  Rocket,
  DollarSign,
  MessageCircle,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  RefreshCw,
  Headphones,
  Play,
  Home,
  Briefcase,
  Sun,
  Wrench,
  Heart,
  Scale,
  GraduationCap,
  ChevronDown,
} from 'lucide-react';


const LeadGenWebsite = () => {
  const [isVisible, setIsVisible] = useState({});
  const [counts, setCounts] = useState({ leads: 0, clients: 0, roi: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const [scrollY, setScrollY] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const { language } = useLanguage();
  const heroRef = useRef(null);
  const WHATSAPP_URL =
  import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/972587990022";

  const LEADS_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbyexefPORZiomXRmXHVQk6QLiwY-HBpwDvfPTBbeIcz_3Ai2j_nH1aMMONMVwJ3Q3qq/exec";

   
  const t = translations[language] ?? translations.en;


  // Scroll tracking for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Animated counters (structure only, not shown)
  useEffect(() => {
    if (isVisible['stats-section'] && counts.leads === 0) {
      const duration = 1800;
      const start = performance.now();

      const animate = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounts({
          leads: Math.floor(50000 * easeOut),
          clients: Math.floor(120 * easeOut),
          roi: Math.floor(380 * easeOut),
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, counts.leads]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitError("");

  const payload = {
    name: formData.name?.trim(),
    email: formData.email?.trim(),
    phone: formData.phone?.trim(),
    company: formData.company?.trim(),
    industry: formData.industry,
    message: formData.message?.trim(),
    page: window.location.href,
    language,
  };

  try {
    const res = await fetch(LEADS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      throw new Error("Non-JSON response from endpoint: " + text.slice(0, 120));
    }


    if (!json?.ok) {
      throw new Error(json?.error || "Submission failed");
    }

    alert(t.contact.alertSuccess);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      message: "",
    });
  } catch (err) {
    console.error("Lead submit error:", err);
    setSubmitError(
      language === "en"
        ? "Something went wrong. Please try again or email us at sales@leadspodium.com."
        : "Une erreur est survenue. Réessaie ou écris-nous à sales@leadspodium.com."
    );
  } finally {
    setIsSubmitting(false);
  }
};


  // Routes existantes (pages déjà créées)
  const industryRoutes = {
    realEstate: "/real-estate",
    insurance: "/insurance",
    solar: "/solar-energy",
    homeServices: "/home-services",
    financial: "/financial",
    healthcare: "/healthcare",
    legal: "/legal",
    education: "/education",
  };

  // Si la page n'existe pas encore : on scroll au formulaire + on pré-remplit l'industrie
  const scrollToContactWithIndustry = (industryTitle) => {
    setFormData((prev) => ({ ...prev, industry: industryTitle }));
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const industries = [
    { key: 'realEstate', icon: Home },
    { key: 'insurance', icon: Shield },
    { key: 'solar', icon: Sun },
    { key: 'homeServices', icon: Wrench },
    { key: 'financial', icon: Briefcase },
    { key: 'healthcare', icon: Heart },
    { key: 'legal', icon: Scale },
    { key: 'education', icon: GraduationCap },
  ];

  const statsCards = [
    { key: 'qualified', icon: Target },
    { key: 'strategy', icon: BarChart3 },
    { key: 'transparent', icon: Shield },
    { key: 'senior', icon: Users },
  ];

  const steps = [
    { key: 'step1', icon: Rocket, step: '01' },
    { key: 'step2', icon: Target, step: '02' },
    { key: 'step3', icon: DollarSign, step: '03' },
  ];

  const benefits = [
    { key: 'exclusive', icon: Shield },
    { key: 'quality', icon: RefreshCw },
    { key: 'fast', icon: Clock },
    { key: 'analytics', icon: BarChart3 },
    { key: 'contact', icon: Headphones },
    { key: 'flexible', icon: Zap },
  ];

  const howCards = [
    { key: 'card1' },
    { key: 'card2' },
    { key: 'card3' },
  ];

  // Animation classes helper
  const getAnimationClass = (id, type = 'fade-up') => {
    const baseClass = 'transition-all duration-700 ease-out';
    const visible = isVisible[id];

    const animations = {
      'fade-up': visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      'fade-down': visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8',
      'fade-left': visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
      'fade-right': visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
      fade: visible ? 'opacity-100' : 'opacity-0',
      scale: visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    };

    return `${baseClass} ${animations[type] || ''}`;
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-900 antialiased"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
      ref={heroRef}
    >
      {/* Google Fonts */}
      

      

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div id="hero-content" data-animate className={getAnimationClass('hero-content', 'fade-right')}>
              <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-indigo-100">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse" />
                {t.home.howBadge}
              </div>

                <h1
                    className={`font-display text-4xl md:text-5xl ${
                        language === 'fr' ? 'lg:text-[3.2rem]' : 'lg:text-6xl'
                    } font-extrabold mb-6 text-gray-900 tracking-tight`}
                    >
                    {/* 1ère ligne */}
                    <span className="block leading-tight">
                        {t.home.title1}
                    </span>

                    {/* 2ème ligne (gradient) */}
                    <span className="block gradient-text leading-tight mt-1">
                        {t.home.title2}
                    </span>
                    </h1>





              <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-body">
                {t.home.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="group btn-primary text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center"
                >
                  {t.home.cta1}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#how-it-works"
                  className="group border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center hover:bg-gray-50"
                >
                  <Play className="w-5 h-5 mr-2 text-indigo-600" />
                  {t.home.cta2}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=48&h=48&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=48&h=48&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=48&h=48&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Client avatar"
                      className="w-12 h-12 rounded-full border-[3px] border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm font-medium">
                    {t.hero.trustLine}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div id="hero-image" data-animate className={`relative ${getAnimationClass('hero-image', 'fade-left')}`}>
              <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full blur-3xl opacity-70" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full blur-3xl opacity-70" />

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Business professionals in a strategic meeting"
                  className="rounded-3xl shadow-2xl w-full object-cover"
                />

                {/* Floating Cards */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-display font-extrabold text-gray-900">
                        {t.hero.card1Title}
                      </p>
                      <p className="text-gray-500 text-sm font-medium">
                        {t.hero.card1Desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-display font-bold text-gray-900">
                        {t.hero.card2Title}
                      </p>
                      <p className="text-gray-500 text-xs font-medium">
                        {t.hero.card2Desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">
            {t.misc.scrollLabel}
          </span>
          <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" data-animate className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`max-w-3xl mx-auto text-center mb-14 ${getAnimationClass(
              'stats-section',
              'fade-up'
            )}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">
              {t.stats.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.stats.subtitle}
            </p>
          </div>

          <div
            id="stats-section-cards"
            data-animate
            className={`grid md:grid-cols-4 gap-8 ${getAnimationClass(
              'stats-section-cards',
              'fade-up'
            )}`}
          >
            {statsCards.map((item, idx) => (
              <div
                key={item.key}
                className={`text-left bg-white rounded-2xl p-7 border border-gray-100 card-hover stagger-${
                  idx + 1
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-xl mb-5">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">
                  {t.stats.cards[item.key].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.stats.cards[item.key].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            id="how-header"
            data-animate
            className={`text-center max-w-3xl mx-auto mb-20 ${getAnimationClass(
              'how-header',
              'fade-up'
            )}`}
          >
            <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-4">
              {t.how.badge}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
              {t.how.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.how.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Steps */}
            <div className="space-y-10">
              {steps.map((stepData, idx) => {
                const StepIcon = stepData.icon;
                const data = t.how.steps[stepData.key];
                return (
                  <div
                    key={stepData.key}
                    id={`step-${idx}`}
                    data-animate
                    className={`flex gap-6 ${getAnimationClass(
                      `step-${idx}`,
                      'fade-right'
                    )} stagger-${idx + 1}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/25">
                          <StepIcon className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {stepData.step}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                        {data.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Image */}
            <div id="how-image" data-animate className={`relative ${getAnimationClass('how-image', 'fade-left')}`}>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full blur-3xl opacity-60" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop"
                alt="Strategic planning session"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-28 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            id="industries-header"
            data-animate
            className={`text-center max-w-3xl mx-auto mb-16 ${getAnimationClass(
              'industries-header',
              'fade-up'
            )}`}
          >
            <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-4">
              {t.industries.badge}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
              {t.industries.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.industries.subtitle}
            </p>
          </div>

          <div
            id="industries-grid"
            data-animate
            className={`grid grid-cols-2 md:grid-cols-4 gap-5 ${getAnimationClass(
              'industries-grid',
              'fade-up'
            )}`}
          >
            {industries.map((industry, idx) => {
  const Icon = industry.icon;
  const data = t.industries[industry.key];
  const route = industryRoutes[industry.key];

  const CardInner = (
    <>
      <div className="w-14 h-14 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl flex items-center justify-center mb-5 group-hover:from-indigo-100 group-hover:to-violet-100 transition-all">
        <Icon className="w-7 h-7 text-indigo-600" />
      </div>
      <h3 className="font-display font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
        {data.title}
      </h3>
      <p className="text-gray-500 text-sm font-medium">{data.description}</p>
    </>
  );

  return route ? (
    <Link
      key={industry.key}
      to={route}
      className={`card-hover bg-white p-7 rounded-2xl border border-gray-100 group stagger-${
        idx + 1
      }`}
    >
      {CardInner}
    </Link>
  ) : (
    <button
      key={industry.key}
      type="button"
      onClick={() => scrollToContactWithIndustry(data.title)}
      className={`text-left w-full card-hover bg-white p-7 rounded-2xl border border-gray-100 group stagger-${
        idx + 1
      }`}
    >
      {CardInner}
    </button>
  );
})}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            id="why-header"
            data-animate
            className={`text-center max-w-3xl mx-auto mb-16 ${getAnimationClass(
              'why-header',
              'fade-up'
            )}`}
          >
            <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-4">
              {t.why.badge}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
              {t.why.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.why.subtitle}
            </p>
          </div>

          <div
            id="benefits-grid"
            data-animate
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${getAnimationClass(
              'benefits-grid',
              'fade-up'
            )}`}
          >
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const data = t.why[benefit.key];
              return (
                <div
                  key={benefit.key}
                  className={`card-hover p-8 rounded-2xl border border-gray-100 bg-white stagger-${
                    idx + 1
                  }`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">
                    {data.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work (Testimonials section) */}
      <section
        id="testimonials"
        className="py-28 px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700"
      >
        <div className="max-w-7xl mx-auto">
          <div
            id="testimonials-header"
            data-animate
            className={`text-center max-w-3xl mx-auto mb-16 ${getAnimationClass(
              'testimonials-header',
              'fade-up'
            )}`}
          >
            <p className="text-indigo-200 font-semibold text-sm tracking-widest uppercase mb-4">
              {t.testimonials.badge}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-indigo-100 leading-relaxed">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div
            id="testimonials-grid"
            data-animate
            className={`grid md:grid-cols-3 gap-6 ${getAnimationClass(
              'testimonials-grid',
              'fade-up'
            )}`}
          >
            {howCards.map((card, idx) => {
              const data = t.testimonials[card.key];
              return (
                <div
                  key={card.key}
                  className={`bg-white/95 rounded-3xl p-8 lg:p-10 stagger-${idx + 1} shadow-lg shadow-indigo-900/20`}
                >
                  <h3 className="font-display font-bold text-gray-900 mb-4 text-lg">
                    {data.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-indigo-100 text-sm">
            {t.testimonials.footerNote}
          </p>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-28 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            id="pricing-card"
            data-animate
            className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-10 md:p-14 ${getAnimationClass(
              'pricing-card',
              'scale'
            )}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-4">
                  {t.pricing.badge}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
                  {t.pricing.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t.pricing.description}
                </p>
                <div className="space-y-4">
                  {t.pricing.bullets.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                  <p className="text-gray-500 mb-3 font-medium">
                    {t.pricing.talkLine}
                  </p>
                  <div className="text-3xl font-display font-extrabold text-gray-900 mb-2">
                    {t.pricing.headline}
                  </div>
                  <p className="text-gray-500 mb-8 font-medium">
                    {t.pricing.subline}
                  </p>
                  <a href="#contact" className="block btn-primary text-white py-4 rounded-xl font-bold text-lg">
                    {t.pricing.cta}
                  </a>
                  <p className="text-gray-400 text-sm mt-4">
                    {t.pricing.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            
            {/* Contact Form */}
<section id="contact" className="py-28 px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16">
      {/* Left Side */}
      <div
        id="contact-left"
        data-animate
        className={getAnimationClass("contact-left", "fade-right")}
      >
        <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-4">
          {t.contact.badge}
        </p>

        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
          {t.contact.title}
        </h2>

        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          {t.contact.description}
        </p>

        <div className="space-y-6 mb-12">
          {[
            {
              icon: Mail,
              label: t.contact.infoEmailLabel,
              value: "sales@leadspodium.com",
              href: "mailto:sales@leadspodium.com",
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: language === "en" ? "Message us" : "Nous écrire",
              href: WHATSAPP_URL,
            },
            {
              icon: MapPin,
              label: t.contact.infoHqLabel,
              value: t.contact.infoHqValue,
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                <item.icon className="w-6 h-6 text-indigo-600" />
              </div>

              <div>
                <div className="text-sm text-gray-500">{item.label}</div>

                {item.href ? (
                  <a href={item.href} className="text-gray-900 font-medium hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <div className="text-gray-900 font-medium">{item.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=350&fit=crop"
          alt="Our team at work"
          className="rounded-2xl w-full object-cover shadow-lg"
        />
      </div>

      {/* Form (RIGHT SIDE) */}
      <div
        id="contact-form"
        data-animate
        className={`bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 ${getAnimationClass(
          "contact-form",
          "fade-left"
        )}`}
      >
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">
          {t.contact.formTitle}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={language === "en" ? "John Smith" : "Jean Dupont"}
                className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.contact.phoneLabel}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={language === "en" ? "(555) 123-4567" : "01 23 45 67 89"}
                className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.contact.companyLabel}
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder={language === "en" ? "Acme Corp" : "Société Exemple"}
                className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={language === "en" ? "you@company.com" : "vous@entreprise.com"}
                className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.contact.industryLabel}
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 bg-white"
              required
            >
              <option value="" disabled>
                {t.contact.industryPlaceholder}
              </option>
              <option>{t.industries.realEstate.title}</option>
              <option>{t.industries.insurance.title}</option>
              <option>{t.industries.solar.title}</option>
              <option>{t.industries.homeServices.title}</option>
              <option>{t.industries.financial.title}</option>
              <option>{t.industries.healthcare.title}</option>
              <option>{t.industries.legal.title}</option>
              <option>{t.industries.education.title}</option>
              <option>{language === "en" ? "Other" : "Autre"}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.contact.messageLabel}
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.contact.messagePlaceholder}
              className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-white py-3.5 rounded-xl font-semibold text-base flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (language === "en" ? "Sending..." : "Envoi...") : t.contact.submitLabel}
          </button>

          {submitError && (
            <p className="text-sm text-red-600 font-medium mt-2">{submitError}</p>
          )}
        </form>
      </div>
    </div>
  </div>
</section>

     

           
        </div>
      
      
    
  );
}

export default LeadGenWebsite;