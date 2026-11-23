import { ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { certificates, site } from "@/config/site";

const Certificates = () => (
  <section id="certificates" className="band">
    <Reveal className="band__head">
      <span className="band__index">05</span>
      <h2>Certificates</h2>
      <p>Industry-recognized AWS certifications and hands-on cloud credentials.</p>
    </Reveal>

    <div className="cert-grid">
      {certificates.map((cert, i) => (
        <Reveal key={cert.id} delay={i * 0.05}>
          <article className="glass-panel cert-panel">
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label={`Verify ${cert.title}`}
            >
              Verify credential
              <ExternalLink size={15} />
            </a>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Certificates;
