import SectionHeader from "./SectionHeader";
import { projects, site } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHeader index="03" title="Earlier projects" />
      <ul className="ledger">
        {projects.map((project) => (
          <li className="ledger-row" key={project.name}>
            <h3>{project.name}</h3>
            <p className="ledger-desc">{project.description}</p>
            <a
              className="mlink"
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
