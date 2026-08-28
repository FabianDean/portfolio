import SectionHeader from "./SectionHeader";
import { projects, site } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHeader eyebrow="Earlier projects" title="Personal builds" />
      <ul className="projects">
        {projects.map((project) => (
          <li className="project" key={project.name}>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <a
              className="card-link"
              href={project.link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.link.label} ↗
            </a>
          </li>
        ))}
      </ul>
      <p className="projects-more">
        More on{" "}
        <a href={site.github} rel="noopener noreferrer" target="_blank">
          GitHub ↗
        </a>
      </p>
    </section>
  );
}
