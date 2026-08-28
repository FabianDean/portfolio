import SectionHeader from "./SectionHeader";
import { contact, site } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <SectionHeader index="05" title={contact.heading} />
      <p className="contact-copy">{contact.copy}</p>
      <a className="contact-email" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      <div className="mlinks">
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
    </section>
  );
}
