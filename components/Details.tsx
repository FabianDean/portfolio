import SectionHeader from "./SectionHeader";
import { details } from "@/data/content";

export default function Details() {
  return (
    <section id="skills" className="section container">
      <SectionHeader index="02" title={details.heading} />
      <dl className="skills">
        {details.rows.map((row) => (
          <div className="skills-row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
