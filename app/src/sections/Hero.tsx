import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, Download, Briefcase } from "lucide-react";
import { headline } from "@/data/portfolio";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-label", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(".hero-headline", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
        .fromTo(".hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(".hero-badges", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.1");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

        {/* Subtle pattern dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Accent glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-navy-700/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-navy-600/10 rounded-full blur-[100px]" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container-tight text-center pt-20"
      >
        {/* Label */}
        <div className="hero-label mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gold-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-subtle" />
            {headline.secondary}
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-5xl mx-auto mb-6">
          I turn complex financial and operational data into{" "}
          <span className="text-gold-400">clear decisions</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-sub text-lg md:text-xl text-navy-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Helping businesses transform data into dashboards, forecasts, automated reports,
          and decision-support systems that leadership actually uses.
        </p>

        {/* Credibility Badges */}
        <div className="hero-badges flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-navy-200 text-sm">
            CFA Charterholder
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-navy-200 text-sm">
            Power BI
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-navy-200 text-sm">
            Financial Modeling
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-navy-200 text-sm">
            Python & SQL
          </span>
        </div>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Briefcase size={18} />
            {headline.cta.primary}
          </button>
          <a
            href={headline.cta.secondaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/25 hover:border-white/50 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download size={18} />
            {headline.cta.secondary}
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-400 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
