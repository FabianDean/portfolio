import SectionHeader from "./SectionHeader";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHeader index="01" title="Experience" />
      <article className="xp">
        <div className="xp-head">
          <div>
            <h3>{experience.company}</h3>
            <p className="xp-role">{experience.role}</p>
          </div>
          <p className="xp-period">{experience.period}</p>
        </div>
        <p className="xp-summary">{experience.summary}</p>
      </article>
      <p className="education">
        <span className="education-label">Education</span>
        {experience.education.degree} · {experience.education.school}
      </p>
    </section>
  );
}
