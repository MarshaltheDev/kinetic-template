# Hosting Template

A Next.js template for VPS and game server hosting sites. It has a landing page, a VPS catalog, a game catalog with a detail page for every game, an about page, and the usual legal pages.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4 and Framer Motion.

## Getting started

You need Node.js 20.9 or newer.

```bash
git clone <your-fork-url> hosting-template
cd hosting-template
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

For production, run `npm run build` and then `npm run start`. The build downloads Google Fonts, so it needs an internet connection.

`npm run lint` and `npm run typecheck` are there too.

## Customizing

Almost everything lives in `config/`:

| File | What's in it |
| ---- | ------------ |
| `config.json` | Brand name, site URL, social links, panel and status URLs |
| `text.json` | All the copy on the site |
| `seo.json` | Titles, descriptions, keywords, Open Graph |
| `theme.json` | Colors, radius, fonts, hero background colors |
| `images.json` | Paths to the logo, favicon, mascots and other images |
| `games.json` | The game catalog |
| `vps.json` | VPS plans |

Each file has a few keys starting with `_` that explain what the sections do. The site ignores them, so you can delete them.

Text can use the tokens `{brand}`, `{brandFull}`, `{shortName}`, `{siteUrl}` and `{year}`, plus any key from `urls` in `config.json` (like `{discord}`).

Every color in `theme.json` becomes a Tailwind class, so `surfaceAlt` is available as `bg-brand-surface-alt`. Images go in `public/` and get referenced from `config/images.json`. Icons in `text.json` are Lucide names, and any new ones need to be added to `app/lib/icons.ts`.

Add a game to `games.json` and its detail page at `/game-hosting/<id>` is generated for you.

The site uses the system font stack by default. Inter, Space Grotesk and Rubik are loaded in `app/layout.tsx` if you want them; any other Google Font needs to be added there.

## Before you launch

- Replace the placeholder content. Search `config/` for `Lorem ipsum`, `example.com`, `Placeholder Brand` and `placeholder-brand.app`. The legal pages in `app/` have placeholder text too.
- Set `site.url` in `config/config.json` to your real domain.
- Swap the images in `public/` for your own.
- Have the legal pages reviewed by a professional. They're templates, not legal advice.

The game names in `games.json` are examples and belong to their owners. No affiliation is implied. Only use artwork you have the rights to, and don't suggest that a publisher endorses your service.

## Deploying

Vercel works out of the box. On any other host that runs Node, use `npm ci`, `npm run build`, then `npm run start`.

## AI disclaimer

This template was built with the assistance from local LLMs, such as Qwen3.8 27B, which were used for part of the development.

## License

[MIT](LICENSE), including the placeholder images in `public/`.