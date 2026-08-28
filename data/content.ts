/**
 * All site copy lives here — edit this file to change any text on the page
 * without touching markup or styles.
 *
 * In `story.paragraphs`, wrap a phrase in ==double equals== to give it the
 * orange marker highlight.
 */

export const site = {
  name: "Fabian Dean Flores",
  shortName: "Fabian Dean",
  title: "Senior Software Engineer",
  url: "https://fabiandean.dev",
  description:
    "Senior Software Engineer at Smarkets, based in Los Angeles. Five-plus years building betting products across web and native apps with TypeScript, React, React Native, and Next.js.",
  email: "fabian@fabiandean.dev",
  github: "https://github.com/FabianDean",
  linkedin: "https://linkedin.com/in/FabianDean",
  repo: "https://github.com/FabianDean/portfolio",
};

export const hero = {
  heading: site.name,
  lede: "Hi — I'm a frontend engineer at Smarkets, where I've spent the past five years building the exchange and its SBK sportsbook across web and native apps. Lately that's meant rebuilding the Smarkets site and app from scratch for the company's new brand.",
  spec: [
    { label: "Role", value: "Senior Software Engineer" },
    { label: "Team", value: "Frontend · Smarkets" },
    { label: "Base", value: "Los Angeles, CA · Remote" },
    { label: "Since", value: "January 2021" },
  ],
  portraitCaption: "not pictured: the cats",
};

export const story = {
  company: "Smarkets",
  heading: "The Smarkets years",
  paragraphs: [
    "I joined Smarkets' frontend team in January 2021, and I've had a hand in everything we've shipped since — the exchange and the SBK sportsbook, on the web and in native apps.",
    "My first years were spent deep in the ==SBK app==, building feature after feature as it grew into a fully-fledged sportsbook. When it was time to bring SBK to the browser, I helped launch ==SBK web==.",
    "Then came the two biggest builds of my career so far: rewriting the ==Smarkets site== from scratch in Next.js to debut the company's new brand, and rebuilding the ==Smarkets app== from the ground up to match it. Along the way, in 2024, I was promoted to ==Senior Software Engineer==.",
  ],
  cta: { url: "https://smarkets.com", label: "See the site" },
  education: {
    degree: "B.S. Computer Science",
    school: "Cal Poly Pomona",
  },
};

export const details = {
  heading: "Skills, etc",
  rows: [
    {
      label: "Stack",
      value:
        "TypeScript · React · Next.js · React Query · Redux · React Native · Expo · Docker",
    },
    {
      label: "Off the clock",
      value:
        "Reading, lifting, wrestling & jiu-jitsu, and time with my fiancée and our cats.",
    },
  ],
};

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
