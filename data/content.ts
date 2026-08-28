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
    "Senior Software Engineer at Smarkets with 5+ years building sports-betting products across web and native apps — React, React Native, TypeScript, and Next.js.",
  email: "fabian@fabiandean.dev",
  github: "https://github.com/FabianDean",
  linkedin: "https://linkedin.com/in/FabianDean",
  repo: "https://github.com/FabianDean/portfolio",
};

export const hero = {
  eyebrow: "Senior Software Engineer · Frontend",
  heading: site.name,
  lede: "I build sports-betting products at Smarkets — five-plus years shipping across native apps and the web, from years of feature work on the SBK sportsbook to ground-up rebuilds of the Smarkets app and site.",
};

export const experience = {
  company: "Smarkets",
  role: "Software Engineer → Senior Software Engineer",
  team: "Frontend team",
  period: "January 2021 — Present",
  summary:
    "Five-plus years on the team behind all of Smarkets' user-facing products: the Smarkets betting exchange (web and app) and the SBK sportsbook (app and web).",
  highlights: [
    "Ship across all four of Smarkets' frontend products — the SBK app, SBK web, the Smarkets app, and smarkets.com.",
    "Built two of the company's ground-up rebuilds: the complete Next.js rewrite of smarkets.com and the new Smarkets app 3.0.0.",
    "Years of feature work on the SBK sportsbook app, then helped take SBK to the browser with the launch of SBK web.",
    "Grew from engineer to Senior Software Engineer on the frontend team.",
  ],
  education: {
    degree: "B.S. Computer Science",
    school: "Cal Poly Pomona",
  },
};

export type WorkItem = {
  index: string;
  name: string;
  tags: string[];
  description: string;
  link?: { url: string; label: string };
};

export const work: WorkItem[] = [
  {
    index: "01",
    name: "smarkets.com rewrite",
    tags: ["Web", "Next.js"],
    description:
      "A complete, ground-up rewrite of the Smarkets website as a Next.js project — replacing the legacy site and debuting the company's new branding.",
    link: { url: "https://smarkets.com", label: "smarkets.com" },
  },
  {
    index: "02",
    name: "Smarkets app 3.0.0",
    tags: ["iOS", "Android"],
    description:
      "The exchange's new mobile app, built to replace the legacy 2.x app — a full rebuild that brought the mobile experience in line with the new brand introduced on the rewritten site.",
  },
  {
    index: "03",
    name: "SBK app",
    tags: ["iOS", "Android"],
    description:
      "Smarkets' sportsbook app. Core contributor for several years, building and shipping features across the product as SBK grew into a fully-fledged mobile sportsbook.",
  },
  {
    index: "04",
    name: "SBK web",
    tags: ["Web"],
    description:
      "Helped bring SBK to the browser — taking what had been a mobile-only sportsbook to the open web and launching SBK's web platform.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "Dart"],
  },
  {
    group: "Frameworks & libraries",
    items: ["React", "React Native", "Next.js", "Node.js", "Flutter"],
  },
  {
    group: "Practices & tools",
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
  heading: "Let's talk",
  copy: "The fastest way to reach me is email — or find me on LinkedIn and GitHub. Whether it's about a role, a product, or just frontend engineering, my inbox is open.",
};
