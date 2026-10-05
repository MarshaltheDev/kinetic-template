// =====================================================
// Site configuration loader
// =====================================================
// All editable values live in:
//   config/config.json  - brand name, site URL/locale, social links, external URLs
//   config/text.json    - all visible copy: tagline, navbar, footer, page text
//   config/seo.json     - titles, descriptions, keywords, OG alt text
//   config/theme.json   - colors, radius, fonts, hero backgrounds
//   config/images.json  - logo, favicon, mascots, about and OG images
//   config/games.json   - game catalog and plans (each game has its own logo, banner and hero)
//   config/vps.json     - VPS plan categories and plans
//
// This file reads those JSON files and exposes typed helpers to the app.
// You normally do not need to edit it.
// =====================================================

import type { Metadata } from "next";
import rawConfig from "./config.json";
import rawText from "./text.json";
import rawSeo from "./seo.json";
import rawTheme from "./theme.json";
import rawImages from "./images.json";
import gamesData from "./games.json";
import type { GamesConfig } from "@/types/games";

// -----------------------------------------------------
// Token replacement ({brand}, {siteUrl}, {year}, {discord}, ...)
// -----------------------------------------------------

const tokens: Record<string, string> = {
  brand: rawConfig.brand.name,
  brandFull: rawConfig.brand.nameFull,
  shortName: rawConfig.brand.shortName,
  siteUrl: rawConfig.site.url,
  year: String(new Date().getFullYear()),
  ...rawConfig.urls,
};

function resolveTokens<T>(value: T): T {
  if (typeof value === "string") {
    return value.replace(/\{(\w+)\}/g, (match, key: string) =>
      key in tokens ? tokens[key] : match
    ) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => resolveTokens(item)) as unknown as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, resolveTokens(v)])
    ) as T;
  }
  return value;
}

/** Fill `{name}` placeholders in a template, e.g. fmt("{game} hosting", { game: "Rust" }). */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}

const core = resolveTokens(rawConfig);
const text = resolveTokens(rawText);
const seo = resolveTokens(rawSeo);
const theme = resolveTokens(rawTheme);
const images = resolveTokens(rawImages);

/** Merged view of every config file, kept for convenience (CONFIG.seo.game, etc.). */
export const CONFIG = {
  brand: { ...core.brand, ...text.brand },
  site: { ...core.site, ...seo.site },
  social: core.social,
  urls: core.urls,
  theme,
  images,
  seo: { pages: seo.pages, game: seo.game },
  navbar: text.navbar,
  footer: text.footer,
  pages: text.pages,
};

// -----------------------------------------------------
// Brand / site / social
// -----------------------------------------------------

export const THEME = CONFIG.theme;
export const IMAGES = CONFIG.images;
export const URLS = CONFIG.urls;
export const PAGES = CONFIG.pages;
export const NAVBAR = CONFIG.navbar;
export const FOOTER = CONFIG.footer;

export type ThemeColorKey = keyof typeof CONFIG.theme.colors;

export const BRAND = {
  name: CONFIG.brand.name,
  nameFull: CONFIG.brand.nameFull,
  shortName: CONFIG.brand.shortName,
  tagline: CONFIG.brand.tagline,
  founded: CONFIG.brand.founded,
  colors: {
    primary: THEME.colors.primary,
    secondary: THEME.colors.accentLight,
    dark: THEME.colors.bg,
  },
  logo: IMAGES.logo,
  favicon: IMAGES.favicon,
  ogImages: IMAGES.og,
} as const;

export const SITE = {
  url: CONFIG.site.url,
  name: BRAND.name,
  nameFull: BRAND.nameFull,
  description: CONFIG.site.description,
  locale: CONFIG.site.locale,
  language: CONFIG.site.language,
  colorScheme: CONFIG.site.colorScheme,
  defaultTitle: CONFIG.site.defaultTitle,
  titleTemplate: CONFIG.site.titleTemplate,
  keywords: CONFIG.site.keywords,
} as const;

export const SOCIAL = {
  twitter: CONFIG.social.twitterHandle,
  discord: CONFIG.urls.discord,
  links: CONFIG.social.links,
} as const;

// -----------------------------------------------------
// Theme helpers
// -----------------------------------------------------

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

export function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** rgba string for a theme color key (or any hex), e.g. themeRgba("accentLight", 0.2). */
export function themeRgba(color: ThemeColorKey | string, alpha: number): string {
  const hex = (THEME.colors as Record<string, string>)[color] ?? color;
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Resolve a theme color key (e.g. "accent") to its hex value. Hex values pass through. */
export function themeColor(color: ThemeColorKey | string): string {
  return (THEME.colors as Record<string, string>)[color] ?? color;
}

/** CSS custom properties generated from theme.json. Injected in app/layout.tsx. */
export function getThemeCss(): string {
  const vars = Object.entries(THEME.colors).map(([key, hex]) => {
    const [r, g, b] = hexToRgb(hex);
    return `--brand-${kebab(key)}:${r} ${g} ${b};`;
  });
  vars.push(`--radius:${THEME.radius};`);
  vars.push(`--radius-sm:${THEME.radius};--radius-md:${THEME.radius};--radius-lg:${THEME.radius};--radius-xl:${THEME.radius};--radius-2xl:${THEME.radius};`);
  vars.push(`--font-sans:${THEME.fontFamily};`);
  vars.push(`--font-mono:${THEME.monoFontFamily};`);
  return `:root{${vars.join("")}}`;
}

// -----------------------------------------------------
// Image helpers
// -----------------------------------------------------

export function getOGImageKey(key: keyof typeof CONFIG.images.og) {
  return IMAGES.og[key];
}

// -----------------------------------------------------
// SEO metadata registry (built from seo.json -> pages)
// -----------------------------------------------------

type PageMeta = Partial<Metadata> & {
  openGraph?: Partial<Metadata["openGraph"]>;
  twitter?: Partial<Metadata["twitter"]>;
  robots?: Metadata["robots"];
};

const ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

type SeoPage = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage: keyof typeof CONFIG.images.og;
  ogAlt: string;
};

function buildPageMeta(path: string, page: SeoPage): PageMeta {
  const image = IMAGES.og[page.ogImage];
  return {
    title: page.title,
    description: page.description,
    ...(page.keywords ? { keywords: page.keywords } : {}),
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      locale: SITE.locale,
      url: path === "/" ? SITE.url : `${SITE.url}${path}`,
      siteName: BRAND.name,
      images: [{ url: image, width: 1200, height: 630, alt: page.ogAlt, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
      site: SOCIAL.twitter,
      creator: SOCIAL.twitter,
    },
    robots: ROBOTS,
  };
}

export const PAGE_META: Record<string, PageMeta> = Object.fromEntries(
  Object.entries(CONFIG.seo.pages).map(([path, page]) => [path, buildPageMeta(path, page as SeoPage)])
);

// -----------------------------------------------------
// Per-game SEO metadata (seo.json -> game)
// -----------------------------------------------------

export function getGameMetadata(game: {
  id: string;
  name: string;
  startingAt?: string;
  banner: string;
}): PageMeta {
  const seo = CONFIG.seo.game;
  const vars = { game: game.name, price: game.startingAt ?? "", id: game.id };
  const title = fmt(seo.title, vars);
  const description = fmt(seo.description, vars);
  const ogImage = game.banner;
  return {
    title,
    description,
    keywords: seo.keywords.map((k) => fmt(k, vars)),
    openGraph: {
      title,
      description,
      type: "website",
      locale: SITE.locale,
      url: `${SITE.url}/game-hosting/${game.id}`,
      siteName: BRAND.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fmt(seo.ogAlt, vars), type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      site: SOCIAL.twitter,
      creator: SOCIAL.twitter,
    },
  };
}

// -----------------------------------------------------
// Game config loader
// -----------------------------------------------------

export async function getGamesConfig(): Promise<GamesConfig> {
  return gamesData as GamesConfig;
}

// -----------------------------------------------------
// Re-export types for convenience
// -----------------------------------------------------

export type { Game, GamePlan, GameLocation, GamesConfig } from "@/types/games";
export type { GamePlanType } from "@/types/common";

export interface GameWithMeta {
  game: GamesConfig["games"][number];
  meta: Partial<Metadata>;
}

export async function getGamesWithMetadata(): Promise<GameWithMeta[]> {
  const config = await getGamesConfig();
  return config.games.map((game) => ({
    game,
    meta: getGameMetadata(game),
  }));
}
