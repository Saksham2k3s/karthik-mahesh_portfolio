import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/config/site";

const Experience = () => (
  <section id="experience" className="band">
    <Reveal className="band__head">
      <span className="band__index">01</span>
      <h2>Experience</h2>
      <p>Where consistency, accuracy, and calm execution mattered most.</p>
    </Reveal>

    <div className="band__stack">
      {experiences.map((exp, i) => (
        <Reveal key={exp.company} delay={i * 0.07}>
          <article className="glass-panel exp-panel">
            <header>
              <div>
                <h3>{exp.title}</h3>
                <p className="gold">{exp.company}</p>
              </div>
              <time>{exp.period}</time>
            </header>
            <ul>
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Experience;
