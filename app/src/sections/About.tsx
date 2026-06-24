import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Award } from "lucide-react";
import { about } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-image",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".about-content > *",
        { opacity: 0, y: 24 },
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

      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 16, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section section-alt"
    >
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="label mb-3 block">About Me</span>
          <h2 className="heading-section text-navy-900">
            The analyst behind the numbers
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Image Column */}
          <div className="about-image lg:col-span-2 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-navy-200 animate-[spin_60s_linear_infinite]" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-navy-800 to-navy-600 shadow-elevated">
                {/* Placeholder - user can replace with actual photo */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-white/15 flex items-center justify-center">
                      <Award size={40} className="text-gold-400" />
                    </div>
                    <span className="text-sm font-medium text-navy-200">Your Photo</span>
                  </div>
                </div>
              </div>

              {/* CFA Badge */}
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-card">
                <div className="bg-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  CFA
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-2 text-navy-500">
              <MapPin size={16} />
              <span className="text-sm font-medium">{about.location}</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content lg:col-span-3">
            <h3 className="heading-subsection text-navy-900 mb-4">
              {about.name}
            </h3>
            <p className="text-navy-500 font-medium mb-6">
              {about.title}
            </p>

            <div className="space-y-4 mb-8">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="body-default">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="about-stats grid grid-cols-2 md:grid-cols-4 gap-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="about-stat text-center p-4 bg-white rounded-xl border border-navy-100 shadow-xs"
                >
                  <div className="text-2xl md:text-3xl font-bold text-navy-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-navy-500 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
