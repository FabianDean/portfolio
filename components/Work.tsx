import SectionHeader from "./SectionHeader";
import { work } from "@/data/content";

export default function Work() {
  return (
    <section id="work" className="section container">
      <SectionHeader eyebrow="Selected work" title="Built at Smarkets" />
      <div className="cards">
        {work.map((item) => (
          <article className="card" key={item.index}>
            <div className="card-top">
              <span className="card-index">{item.index}</span>
              <div className="card-tags">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.link && (
              <a
                className="card-link"
                href={item.link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.link.label} ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
