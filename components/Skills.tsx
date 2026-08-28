import SectionHeader from "./SectionHeader";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeader index="03" title="Skills" />
      <dl className="skills">
        {skills.map((group) => (
          <div className="skills-row" key={group.group}>
            <dt>{group.group}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
