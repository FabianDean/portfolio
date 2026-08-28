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
          Built with Next.js —{" "}
          <a href={site.repo} rel="noopener noreferrer" target="_blank">
            source on GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}
