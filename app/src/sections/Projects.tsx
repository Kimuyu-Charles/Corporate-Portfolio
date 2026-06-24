import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Star, Filter } from "lucide-react";
import { projects } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Power BI", "Financial Modeling", "Machine Learning", "Data Pipeline"];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = filtered.filter((p) => p.featured);
  const otherProjects = filtered.filter((p) => !p.featured);
  const displayOthers = showAll ? otherProjects : otherProjects.slice(0, 2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-header",
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

  // Animate cards when category changes
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card-anim");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power3.out" }
    );
  }, [activeCategory, showAll]);

  return (
    <section ref={sectionRef} id="projects" className="section bg-white">
      <div className="container-tight">
        {/* Section Header */}
        <div className="projects-header text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          <span className="label mb-3 block">Selected Projects</span>
          <h2 className="heading-section text-navy-900 mb-4">
            Case studies & work samples
          </h2>
          <p className="body-large">
            A selection of projects at the intersection of investment analysis and
            data science—from Power BI dashboards to financial models and ML experiments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === cat
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-navy-50 text-navy-600 hover:bg-navy-100"
              }`}
            >
              {cat === "All" && <Filter size={14} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Star size={14} className="text-gold-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                Featured
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {displayOthers.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                More Projects
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {displayOthers.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Show More / Less */}
        {otherProjects.length > 2 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? "Show Less" : `Show All Projects (${otherProjects.length - 2} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  return (
    <div
      className={`project-card-anim group bg-white rounded-xl border border-navy-100 overflow-hidden card-hover ${
        featured ? "shadow-card" : "shadow-xs"
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-navy-700 rounded-md">
            {project.category}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors line-clamp-2">
          {project.title}
        </h3>

        <p className="text-sm text-navy-500 mb-3 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-navy-50 text-navy-600 text-xs font-medium rounded"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-0.5 text-navy-400 text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors"
        >
          {project.linkLabel}
          <ExternalLink size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
}
