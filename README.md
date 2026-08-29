# fabiandean.dev

Source for [fabiandean.dev](https://fabiandean.dev) — the personal portfolio of Fabian Dean Flores, Senior Software Engineer at Smarkets.

## Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- React 19
- TypeScript
- Plain modern CSS — custom properties, grid, `prefers-color-scheme` dark mode; no CSS framework

## Development

```sh
npm install
npm run dev     # local dev server at http://localhost:3000
npm run build   # static export to out/
```

## Editing content

All copy — hero, experience, work highlights, skills, projects, contact — lives in [`data/content.ts`](data/content.ts). Edit that file to change any text on the site; components and styles don't need to be touched.

## Deploying

`npm run build` produces a fully static site in `out/` (configured via `output: "export"` in `next.config.ts`). The site is hosted on Netlify — build settings live in [`netlify.toml`](netlify.toml), so connecting the repo is all the configuration needed.
