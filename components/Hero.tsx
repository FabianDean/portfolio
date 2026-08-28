import Image from "next/image";
import { hero, site } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>{hero.heading}</h1>
        <p className="hero-lede">{hero.lede}</p>
        <dl className="spec">
          {hero.spec.map((row) => (
            <div className="spec-row" key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mlinks">
          <a className="mlink" href={`mailto:${site.email}`}>
            Email ↗
          </a>
          <a
            className="mlink"
            href={site.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn ↗
          </a>
          <a
            className="mlink"
            href={site.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <div className="hero-portrait">
        <Image
          src="/portrait.jpg"
          alt={`Portrait of ${site.name}`}
          width={288}
          height={360}
          priority
        />
      </div>
    </section>
  );
}
