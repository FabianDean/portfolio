/**
 * All site copy lives here — edit this file to change any text on the page
 * without touching markup or styles.
 */

export const site = {
  name: "Fabian Dean Flores",
  shortName: "Fabian Dean",
  title: "Senior Software Engineer",
  url: "https://fabiandean.dev",
  description:
    "Senior Software Engineer at Smarkets. Five-plus years building betting products across web and native apps with React, React Native, TypeScript, and Next.js.",
  email: "fabian@fabiandean.dev",
  github: "https://github.com/FabianDean",
  linkedin: "https://linkedin.com/in/FabianDean",
  repo: "https://github.com/FabianDean/portfolio",
};

export const hero = {
  heading: site.name,
  lede: "Frontend engineer at Smarkets. For the past five years I've built the exchange and its SBK sportsbook across web and native apps — most recently rebuilding the Smarkets site and app from scratch for the company's new brand.",
  spec: [
    { label: "Role", value: "Senior Software Engineer" },
    { label: "Team", value: "Frontend · Smarkets" },
    { label: "Since", value: "January 2021" },
  ],
};

export const experience = {
  company: "Smarkets",
  role: "Software Engineer → Senior Software Engineer",
  period: "January 2021 — Present",
  summary:
    "Joined the frontend team in January 2021; now a Senior Software Engineer. I've worked across everything we ship — the Smarkets exchange and the SBK sportsbook, on web and native mobile.",
  education: {
    degree: "B.S. Computer Science",
    school: "Cal Poly Pomona",
  },
};

export type ShippedItem = {
  name: string;
  platform: string;
  description: string;
  link?: { url: string; label: string };
};

export const shipped: ShippedItem[] = [
  {
    name: "Smarkets site",
    platform: "Web",
    description: "Complete rewrite in Next.js, launched with the new brand.",
    link: { url: "https://smarkets.com", label: "visit" },
  },
  {
    name: "Smarkets app",
    platform: "iOS · Android",
    description:
      "Rebuilt from scratch to replace the legacy app and match the new brand.",
  },
  {
    name: "SBK web",
    platform: "Web",
    description: "Helped take the sportsbook from app-only to the browser.",
  },
  {
    name: "SBK app",
    platform: "iOS · Android",
    description: "Years of feature work across the sportsbook.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "Dart"],
  },
  {
    group: "Frameworks",
    items: ["React", "React Native", "Next.js", "Node.js", "Flutter"],
  },
  {
    group: "Practices",
    items: ["Git", "CI/CD", "Automated testing", "iOS & Android releases"],
  },
];

export type Project = {
  name: string;
  description: string;
  link: { url: string; label: string };
};

export const projects: Project[] = [
  {
    name: "Easy BMI",
    description:
      "Flutter app for quick BMI calculations, with growth charts and local history.",
    link: { url: "https://github.com/FabianDean/easy_bmi", label: "GitHub" },
  },
  {
    name: "ReciMe",
    description:
      "A “what's in your fridge?” recipe finder — search by the ingredients you have on hand.",
    link: {
      url: "https://github.com/FabianDean/recime-flutter",
      label: "GitHub",
    },
  },
  {
    name: "Media Tracker",
    description:
      "Track the shows and movies you watch, with a forum around every title.",
    link: {
      url: "https://github.com/PentaTech-Inc/Media-Tracker",
      label: "GitHub",
    },
  },
];

export const contact = {
  heading: "Contact",
  copy: "If you're hiring, building something interesting, or just want to compare notes on frontend, email is the fastest way to reach me.",
};
