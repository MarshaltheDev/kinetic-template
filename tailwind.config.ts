/**
 * Tailwind theme: reads config/theme.json and creates the brand-* color classes (for example bg-brand-surface),
 * radius and fonts. Loaded by app/globals.css. Add colors in config/theme.json, not here.
 */

import type { Config } from 'tailwindcss';
import fs from 'fs';
import path from 'path';

// Colors, radius and fonts come from config/theme.json.
// Each color becomes a CSS variable (see getThemeCss() in config/site.ts)
// and a Tailwind color named `brand-<kebab-name>`, e.g. bg-brand-surface-alt.
const siteConfig = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'config', 'theme.json'), 'utf8')
);

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const channel = (name: string) => `rgb(var(--brand-${name}) / <alpha-value>)`;

const brandColors: Record<string, string> = Object.fromEntries(
  Object.keys(siteConfig.colors).map((key) => [`brand-${kebab(key)}`, channel(kebab(key))])
);

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        none: '0px',
        sm: 'var(--radius)',
        default: 'var(--radius)',
        md: 'var(--radius)',
        lg: 'var(--radius)',
        xl: 'var(--radius)',
        '2xl': 'var(--radius)',
        full: '9999px',
      },
      fontFamily: {
        sans: ['var(--brand-font-sans)'],
        mono: ['var(--brand-font-mono)'],
      },
      colors: {
        ...brandColors,
        background: channel('bg'),
        foreground: channel('text'),
        card: channel('surface'),
        'card-foreground': channel('text'),
        popover: channel('surface-alt'),
        'popover-foreground': channel('text'),
        primary: channel('primary'),
        'primary-foreground': channel('strong'),
        secondary: channel('surface'),
        'secondary-foreground': channel('text'),
        muted: channel('surface'),
        'muted-foreground': channel('muted'),
        accent: channel('accent-dark'),
        'accent-foreground': channel('text'),
        destructive: channel('destructive'),
        border: 'rgb(var(--brand-accent-light) / 0.14)',
        input: 'rgb(var(--brand-accent-light) / 0.18)',
        ring: channel('accent'),
      },
      boxShadow: {
        glow: '0 0 60px rgb(var(--brand-accent) / 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
