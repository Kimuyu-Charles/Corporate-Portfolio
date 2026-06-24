import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink } from "lucide-react";
import { education, certifications } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-header",
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
        ".education-card-anim",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education-grid",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".cert-card-anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".certifications-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-white">
      <div className="container-tight">
        {/* Section Header */}
        <div className="education-header text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="label mb-3 block">Education & Credentials</span>
          <h2 className="heading-section text-navy-900 mb-4">
            Formal training & certifications
          </h2>
          <p className="body-large">
            Academic foundation in economics and sociology, complemented by the
            CFA program and specialized technical certifications.
          </p>
        </div>

        {/* Education Cards */}
        <div className="education-grid grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="education-card-anim relative p-6 md:p-8 bg-white rounded-xl border border-navy-100 shadow-card hover:shadow-card-hover transition-all group"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-700 to-navy-500 rounded-t-xl" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-50 overflow-hidden shrink-0 ring-1 ring-navy-100">
                  <img
                    src={edu.image}
                    alt={`${edu.institution} credential`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-navy-900 mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-medium text-navy-600 mb-1">
                    {edu.degree}
                  </p>
                  <span className="inline-block text-xs font-medium text-navy-400 bg-navy-50 px-2 py-0.5 rounded mb-3">
                    {edu.year}
                  </span>
                  <p className="text-sm text-navy-500 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>

              {/* Verification link for CFA */}
              {edu.institution === "CFA Institute" && (
                <a
                  href="https://www.cfainstitute.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-navy-500 hover:text-navy-700 transition-colors"
                >
                  Verify at CFA Institute
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-navy-900 mb-6 text-center">
            Professional Certifications
          </h3>

          <div className="certifications-grid grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="cert-card-anim p-5 bg-navy-50 rounded-xl border border-navy-100 text-center hover:bg-white hover:shadow-card transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center text-navy-600 mx-auto mb-3">
                  <Award size={18} />
                </div>
                <h4 className="font-semibold text-navy-900 text-sm mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-navy-500 mb-1">{cert.issuer}</p>
                <span className="text-xs text-navy-400 font-medium">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
