import Reveal from "@/components/ui/Reveal";
import { projects } from "@/config/site";

const Projects = () => (
  <section id="projects" className="band band--lift">
    <Reveal className="band__head">
      <span className="band__index">02</span>
      <h2>Projects</h2>
      <p>Cloud-native architectures, distributed microservices, and serverless AI pipelines.</p>
    </Reveal>

    <div className="band__stack">
      {projects.map((project, i) => (
        <Reveal key={project.title} delay={i * 0.08}>
          <article className="glass-panel project-panel">
            <div
              className="project-panel__banner"
              style={{ backgroundImage: `url(${project.image})` }}
              aria-hidden="true"
            />
            <div className="project-panel__body">
              <div className="project-panel__meta">
                <span>{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="gold">{project.subtitle}</p>
              <p>{project.description}</p>
              <ul>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="chips">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Projects;
