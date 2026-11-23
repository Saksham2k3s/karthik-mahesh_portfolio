import Reveal from "@/components/ui/Reveal";
import { skillCategories } from "@/config/site";

const Skills = () => (
  <section id="skills" className="band">
    <Reveal className="band__head">
      <span className="band__index">03</span>
      <h2>Skills</h2>
      <p>Core programming languages, AWS serverless platforms, DevOps pipelines, and observability.</p>
    </Reveal>

    <div className="bento">
      {skillCategories.map((cat, i) => (
        <Reveal key={cat.title} delay={i * 0.06} className="bento__cell">
          <article className="glass-panel skill-panel">
            <h3>{cat.title}</h3>
            <div className="chips">
              {cat.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
