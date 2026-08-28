import SectionHeader from "./SectionHeader";
import { contact, site } from "@/data/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <SectionHeader eyebrow="Contact" title={contact.heading} />
      <p className="contact-copy">{contact.copy}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href={`mailto:${site.email}`}>
          <MailIcon size={18} />
          {site.email}
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
    </section>
  );
}
