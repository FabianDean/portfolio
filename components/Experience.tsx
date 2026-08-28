import SectionHeader from "./SectionHeader";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHeader eyebrow="Experience" title="Where I've been" />
      <article className="xp">
        <div className="xp-head">
          <div>
            <h3>{experience.company}</h3>
            <p className="xp-role">{experience.role}</p>
          </div>
          <div className="xp-meta">
            <p className="xp-period">{experience.period}</p>
            <p className="xp-team">{experience.team}</p>
          </div>
        </div>
        <p className="xp-summary">{experience.summary}</p>
        <ul className="xp-highlights">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </article>
      <p className="education">
        <span className="eyebrow">Education</span>
        {experience.education.degree} · {experience.education.school}
      </p>
    </section>
  );
}
