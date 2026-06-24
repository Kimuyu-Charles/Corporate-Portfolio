import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/charles-kimuyu", label: "LinkedIn" },
  { icon: <Github size={16} />, href: "https://github.com/Kimuyu-Charles", label: "GitHub" },
  { icon: <Mail size={16} />, href: "mailto:charlesnzioka1@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="container-tight py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="font-serif text-xl font-bold text-white mb-3 block"
            >
              Charles Kimuyu
            </button>
            <p className="text-sm text-navy-400 leading-relaxed max-w-xs">
              Investment & Data Analyst helping businesses transform data into
              dashboards, forecasts, and decision-support systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-navy-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CV Download */}
            <a
              href="/assets/Kimuyu_CV.pdf"
              target="_blank"
              className="mt-4 inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors"
            >
              <span className="font-medium">Download CV</span>
              <ArrowUp size={12} className="rotate-45" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} Charles Kimuyu. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-navy-500 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
