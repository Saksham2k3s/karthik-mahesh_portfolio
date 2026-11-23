import Reveal from "@/components/ui/Reveal";
import { education } from "@/config/site";

const Education = () => (
  <section id="education" className="band band--lift">
    <Reveal className="band__head">
      <span className="band__index">04</span>
      <h2>Education</h2>
      <p>Academic training behind the analytical approach.</p>
    </Reveal>

    <div className="duo-grid">
      {education.map((item, i) => (
        <Reveal key={`${item.school}-${item.degree}`} delay={i * 0.07}>
          <article className="glass-panel edu-panel">
            <h3>{item.degree}</h3>
            <p className="gold">{item.school}</p>
            <p>{item.details}</p>
            <time>{item.period}</time>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Education;
