import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  BarChart3,
  LineChart,
  FileText,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={28} strokeWidth={1.5} />,
  BarChart3: <BarChart3 size={28} strokeWidth={1.5} />,
  LineChart: <LineChart size={28} strokeWidth={1.5} />,
  FileText: <FileText size={28} strokeWidth={1.5} />,
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section bg-white">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="label mb-3 block">What I Do</span>
          <h2 className="heading-section text-navy-900 mb-4">
            Services I deliver
          </h2>
          <p className="body-large">
            From classic valuation and budgeting questions to dashboards and models
            that track risk, performance, and opportunities in real time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative p-6 md:p-8 bg-white rounded-2xl border border-navy-100 shadow-card card-hover cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center text-navy-700 mb-5 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="body-default text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-5 flex items-center gap-2 text-navy-400 group-hover:text-navy-700 transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
