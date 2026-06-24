import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Finance", "Business Intelligence", "Advanced Analytics", "Tools"];

function ProficiencyBar({ level }: { level: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const width = level * 20; // 1-5 to percentage
  const labels = ["Beginner", "Developing", "Proficient", "Advanced", "Expert"];
  const colors = [
    "bg-navy-300",
    "bg-navy-400",
    "bg-navy-500",
    "bg-navy-600",
    "bg-navy-800",
  ];

  return (
    <div ref={barRef} className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-navy-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colors[level - 1]}`}
          style={{ width: isVisible ? `${width}%` : "0%" }}
        />
      </div>
      <span className="text-xs font-medium text-navy-400 w-20 text-right">
        {labels[level - 1]}
      </span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-header",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section section-alt">
      <div className="container-tight">
        {/* Section Header */}
        <div className="skills-header text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          <span className="label mb-3 block">Technical Skills</span>
          <h2 className="heading-section text-navy-900 mb-4">
            Tools & expertise
          </h2>
          <p className="body-large">
            A blend of finance fundamentals and modern data tools, built through
            the CFA program and hands-on project work.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === cat
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-white text-navy-600 border border-navy-200 hover:border-navy-400 hover:bg-navy-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 bg-white rounded-xl border border-navy-100 shadow-xs hover:shadow-card transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm">
                    {skill.name}
                  </h4>
                  <span className="text-xs text-navy-400">{skill.category}</span>
                </div>
              </div>
              <p className="text-xs text-navy-500 mb-3 leading-relaxed">
                {skill.description}
              </p>
              <ProficiencyBar level={skill.proficiency} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
