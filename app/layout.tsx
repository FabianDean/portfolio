import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site, experience } from "@/data/content";
import "./globals.css";

const lekton = localFont({
  src: [
    { path: "./fonts/Lekton-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Lekton-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Lekton-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-lekton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.title}`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    type: "profile",
    images: ["/portrait.jpg"],
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.title}`,
    description: site.description,
    images: ["/portrait.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#161310" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  worksFor: { "@type": "Organization", name: experience.company },
  alumniOf: { "@type": "CollegeOrUniversity", name: experience.education.school },
  url: site.url,
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lekton.variable}>
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
