import Image from "next/image";
import { hero, site } from "@/data/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.heading}</h1>
        <p className="hero-lede">{hero.lede}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            <MailIcon size={18} />
            Get in touch
          </a>
          <a
            className="btn"
            href={site.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon size={18} />
            LinkedIn
          </a>
          <a
            className="btn"
            href={site.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon size={18} />
            GitHub
          </a>
        </div>
      </div>
      <div className="hero-portrait">
        <Image
          src="/portrait.jpg"
          alt={`Portrait of ${site.name}`}
          width={320}
          height={400}
          priority
        />
      </div>
    </section>
  );
}
