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
    "Senior software engineer in Los Angeles. Five-plus years building real-time consumer products across web and native apps with TypeScript, React, React Native, and Next.js.",
  email: "fabian@fabiandean.dev",
  github: "https://github.com/FabianDean",
  linkedin: "https://linkedin.com/in/FabianDean",
};

export const hero = {
  heading: site.name,
  lede: "Hi — I'm a frontend engineer in Los Angeles. I've spent the past five years building real-time consumer products — a trading exchange and its sportsbook — across web and native, most recently rebuilding a site and an app from scratch for a brand refresh.",
  spec: [
    { label: "Role", value: "Senior Software Engineer" },
    { label: "Team", value: "Frontend · Smarkets" },
    { label: "Base", value: "Los Angeles, CA · Remote" },
    { label: "Since", value: "January 2021" },
  ],
  portraitCaption: "not pictured: the cats",
  portraitAction: `Portrait of ${site.name} — press to let the cat out`,
};

export const story = {
  company: "Smarkets",
  heading: "The story so far",
  paragraphs: [
    "Since January 2021 I've been on the frontend team at Smarkets, a real-time trading exchange — and I've had a hand in everything we've shipped since, on the web and in native apps.",
    "My first years were spent deep in our ==sportsbook app==, building feature after feature as it grew into a fully-fledged product — then I helped ==launch it on the web==, taking it from app-only to the browser.",
    "More recently came the two biggest builds of my career so far: ==rewriting our site from scratch== in Next.js for a brand refresh, and ==rebuilding our app from the ground up== to match it. Along the way, in 2024, I was promoted to ==Senior Software Engineer==.",
  ],
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
  copy: "Email is the best way to reach me — whether it's about frontend, a side project, a book worth reading, or where to train in LA.",
};
