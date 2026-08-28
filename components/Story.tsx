import { Fragment } from "react";
import SectionHeader from "./SectionHeader";
import { story } from "@/data/content";

/** Renders ==wrapped== phrases from content.ts as highlighted <mark>s. */
function Highlighted({ text }: { text: string }) {
  const parts = text.split("==");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i}>{part}</mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export default function Story() {
  return (
    <section id="experience" className="section container">
      <SectionHeader index="01" title={story.heading} />
      <div className="story">
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>
            <Highlighted text={paragraph} />
          </p>
        ))}
        <a
          className="mlink"
          href={story.cta.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {story.cta.label} ↗
        </a>
      </div>
      <p className="education">
        <span className="education-label">Education</span>
        {story.education.degree} · {story.education.school}
      </p>
    </section>
  );
}
