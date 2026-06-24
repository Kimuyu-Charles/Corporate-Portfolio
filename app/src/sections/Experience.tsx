import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Building2, Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".experience-card",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-timeline",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".credibility-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".credibility-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section section-alt">
      <div className="container-tight">
        {/* Section Header */}
        <div className="experience-header text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="label mb-3 block">Experience</span>
          <h2 className="heading-section text-navy-900 mb-4">
            Track record & credibility
          </h2>
          <p className="body-large">
            Professional experience combining corporate analytics delivery with
            independent investment research and modeling.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="experience-timeline relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-navy-200 hidden md:block" />

              <div className="space-y-8">
                {experience.map((exp) => (
                  <div
                    key={exp.role}
                    className="experience-card relative md:pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-4 top-6 w-5 h-5 rounded-full bg-white border-2 border-navy-400 items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-navy-600" />
                    </div>

                    <div className="bg-white rounded-xl border border-navy-100 p-6 shadow-card hover:shadow-card-hover transition-shadow">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-semibold text-navy-900 flex items-center gap-2">
                            <Briefcase size={16} className="text-navy-500" />
                            {exp.role}
                          </h3>
                          <p className="text-sm text-navy-500 flex items-center gap-1.5 mt-1">
                            <Building2 size={13} />
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-navy-400 bg-navy-50 px-2.5 py-1 rounded-md">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-navy-600 mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-navy-500"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-emerald-500 mt-0.5 shrink-0"
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Credibility Sidebar */}
          <div className="credibility-grid space-y-6">
            {/* CFA Callout */}
            <div className="credibility-card bg-navy-900 text-white rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-gold-400">CFA</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Charterholder</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                Completed all three levels of the CFA Program, covering investment
                analysis, portfolio management, and ethical standards.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="credibility-card bg-white rounded-xl border border-navy-100 p-6">
              <h4 className="font-semibold text-navy-900 mb-4">
                Key Metrics
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-navy-500">Reporting Time Saved</span>
                  <span className="font-semibold text-navy-900">70%</span>
                </div>
                <div className="h-px bg-navy-100" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-navy-500">Projects Completed</span>
                  <span className="font-semibold text-navy-900">15+</span>
                </div>
                <div className="h-px bg-navy-100" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-navy-500">CFA Levels</span>
                  <span className="font-semibold text-navy-900">3/3</span>
                </div>
                <div className="h-px bg-navy-100" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-navy-500">Industries Covered</span>
                  <span className="font-semibold text-navy-900">5+</span>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="credibility-card bg-white rounded-xl border border-navy-100 p-6">
              <h4 className="font-semibold text-navy-900 mb-3">
                Industries
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Manufacturing", "Crypto/FinTech", "Retail", "Tobacco", "Sustainability"].map(
                  (industry) => (
                    <span
                      key={industry}
                      className="px-3 py-1.5 bg-navy-50 text-navy-600 text-xs font-medium rounded-lg"
                    >
                      {industry}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
