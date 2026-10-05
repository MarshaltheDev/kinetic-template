# Hosting Template

This is a hosting template for hosting companies. It has a landing page, a VPS catalog, a game catalog with a detail page for every game, an about page, and the usual other pages that may be needed.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4 and Framer Motion.

## Getting started

You need Node.js 20.9 or newer.

```bash
git clone https://github.com/MarshaltheDev/kinetic-template.git
cd kinetic-template
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
| `images.json` | Paths to the logo, favicon, mascots, about and share images |
| `games.json` | The game catalog, including each game's `logo`, `banner` and `hero` image |
| `vps.json` | VPS plans |


Text can use the tokens `{brand}`, `{brandFull}`, `{shortName}`, `{siteUrl}` and `{year}`, plus any key from `urls` in `config.json` (like `{discord}`).

## Before you launch

- Replace the placeholder content. In all of the config files.
- Set `site.url` in `config/config.json` to your real domain.
- Swap the images in `public/` for your own.

## Deploying

Vercel works out of the box. On any other host that runs Node, use `npm ci`, `npm run build`, then `npm run start`.

## Disclaimer

This template was built with the assistance from local LLMs, such as Qwen3.8 27B, which were used for part of the development.

## License

[MIT](LICENSE)
