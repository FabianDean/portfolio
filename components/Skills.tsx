import SectionHeader from "./SectionHeader";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeader eyebrow="Skills" title="What I work with" />
      <div className="skills">
        {skills.map((group) => (
          <div className="skills-group" key={group.group}>
            <h3>{group.group}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
