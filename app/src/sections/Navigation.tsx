import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-navy-900 focus:text-white focus:rounded-lg"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-navy-100"
            : "bg-transparent"
        }`}
      >
        <nav className="container-tight flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`font-serif text-lg md:text-xl font-bold transition-colors ${
              isScrolled ? "text-navy-900" : "text-white"
            }`}
          >
            Charles Kimuyu
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    isScrolled
                      ? activeSection === link.href.slice(1)
                        ? "text-navy-900 bg-navy-50"
                        : "text-navy-600 hover:text-navy-900 hover:bg-navy-50/50"
                      : activeSection === link.href.slice(1)
                      ? "text-white bg-white/15"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("#contact")}
            className={`hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              isScrolled
                ? "bg-navy-900 text-white hover:bg-navy-800"
                : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border border-white/20"
            }`}
          >
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-navy-900 hover:bg-navy-50"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-navy-100 shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="container-tight py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-navy-900 bg-navy-50"
                      : "text-navy-600 hover:text-navy-900 hover:bg-navy-50/50"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full px-4 py-3 text-sm font-semibold bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors"
              >
                Get In Touch
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
