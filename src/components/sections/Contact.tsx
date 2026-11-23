import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/config/site";

const items: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
}[] = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Linkedin, label: "LinkedIn", value: site.linkedinHandle, href: site.linkedin, external: true },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: site.location, href: null },
];

const Contact = () => (
  <section id="contact" className="band band--contact">
    <Reveal className="band__head">
      <span className="band__index">06</span>
      <h2>Contact</h2>
      <p>Direct channels for opportunities, collaborations, and conversations.</p>
    </Reveal>

    <Reveal>
      <div className="contact-block glass-panel">
        <div className="contact-block__lead">
          <h3>Let's build something worth showing.</h3>
          <p>I respond quickly and keep conversations clear from the first message.</p>
        </div>

        <div className="contact-block__grid">
          {items.map((item) => {
            const Icon = item.icon;
            const body = (
              <>
                <Icon size={18} />
                <span>
                  <small>{item.label}</small>
                  <strong>
                    {item.value}
                    {item.external && <ArrowUpRight size={14} />}
                  </strong>
                </span>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="contact-block__item"
              >
                {body}
              </a>
            ) : (
              <div key={item.label} className="contact-block__item">
                {body}
              </div>
            );
          })}
        </div>

        <div className="intro-panel__actions">
          <a href={`mailto:${site.email}`} className="btn btn--gold">
            <Mail size={16} />
            Send email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--line"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </Reveal>
  </section>
);

export default Contact;
