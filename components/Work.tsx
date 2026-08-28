import SectionHeader from "./SectionHeader";
import { shipped } from "@/data/content";

export default function Work() {
  return (
    <section id="shipped" className="section container">
      <SectionHeader index="02" title="Shipped" />
      <ul className="ledger">
        {shipped.map((item) => (
          <li className="ledger-row" key={item.name}>
            <h3>{item.name}</h3>
            <p className="ledger-desc">{item.description}</p>
            <span className="ledger-meta">{item.platform}</span>
            {item.link ? (
              <a
                className="mlink"
                href={item.link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.link.label} ↗
              </a>
            ) : (
              <span className="ledger-spacer" aria-hidden="true" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
