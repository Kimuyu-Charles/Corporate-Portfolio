import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { contact } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950"
    >
      <div className="container-tight">
        <div className="contact-content grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="label mb-3 block text-navy-400">Contact</span>
            <h2 className="heading-section text-white mb-4">
              Let's work together
            </h2>
            <p className="text-navy-300 text-lg leading-relaxed mb-8">
              I'm always interested in hearing about new opportunities,
              consulting engagements, and challenging finance & data problems.
            </p>

            {/* Availability Status */}
            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-emerald-400">
                {contact.availability}
              </span>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-navy-300 group-hover:text-white group-hover:bg-white/15 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-navy-400">Email</div>
                  <div className="text-sm font-medium text-white">
                    {contact.email}
                  </div>
                </div>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-navy-300 group-hover:text-white group-hover:bg-white/15 transition-colors">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="text-xs text-navy-400">LinkedIn</div>
                  <div className="text-sm font-medium text-white">
                    linkedin.com/in/charles-kimuyu
                  </div>
                </div>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-navy-300 group-hover:text-white group-hover:bg-white/15 transition-colors">
                  <Github size={18} />
                </div>
                <div>
                  <div className="text-xs text-navy-400">GitHub</div>
                  <div className="text-sm font-medium text-white">
                    github.com/Kimuyu-Charles
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Timezone */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-navy-400">
                <MapPin size={14} />
                <span>{contact.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-400">
                <Clock size={14} />
                <span>{contact.timezone}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent
                </h3>
                <p className="text-navy-300 text-sm">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Send a message
                </h3>
                <p className="text-sm text-navy-400 mb-6">
                  Fill out the form below and I'll respond as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-navy-300 mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-navy-300 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-navy-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors appearance-none"
                    >
                      <option value="" className="bg-navy-900">
                        Select a topic...
                      </option>
                      <option value="consulting" className="bg-navy-900">
                        Consulting Project
                      </option>
                      <option value="fulltime" className="bg-navy-900">
                        Full-Time Opportunity
                      </option>
                      <option value="dashboard" className="bg-navy-900">
                        Dashboard / BI Project
                      </option>
                      <option value="modeling" className="bg-navy-900">
                        Financial Modeling
                      </option>
                      <option value="other" className="bg-navy-900">
                        Something Else
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-navy-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
