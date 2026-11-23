import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__ambient" aria-hidden="true" />
      <motion.div
        className="hero__copy"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero__eyebrow">
          <MapPin size={15} />
          {site.location}
          <span>{site.status}</span>
        </p>
        <h1 id="hero-heading">{site.name}</h1>
        <p className="hero__role">{site.title}</p>
        <p className="hero__summary">{site.summary}</p>

        <div className="metric-strip">
          {site.highlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="metric-strip__item"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="hero__actions">
          <button type="button" className="btn btn--gold" onClick={() => scrollTo("contact")}>
            Start a conversation
            <ArrowRight size={17} />
          </button>
          <button type="button" className="btn btn--line" onClick={() => scrollTo("projects")}>
            Explore projects
          </button>
        </div>
      </motion.div>

      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, y: 28, rotate: 1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="portrait-card">
          <div className="portrait-card__image-wrap">
            <img src={site.portrait} alt={site.name} className="portrait-card__image" />
          </div>
          <div className="portrait-card__meta">
            <span>{site.name}</span>
            <small>{site.title}</small>
          </div>
        </div>

        <div className="connect-card">
          <p>Connect directly</p>
          <div>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
