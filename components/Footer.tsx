import { site } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {site.name}
        </span>
        <span>
          Set in Lekton · built with Next.js ·{" "}
          <a href={site.repo} rel="noopener noreferrer" target="_blank">
            source ↗
          </a>
        </span>
      </div>
    </footer>
  );
}
