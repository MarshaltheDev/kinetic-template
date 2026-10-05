/**
 * Root layout: wraps every page on the site.
 * Loads fonts, injects the theme CSS variables (config/theme.json) and sets the site-wide
 * SEO metadata (config/config.json, config/seo.json -> site, config/images.json -> favicon/og).
 */

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Rubik, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { SITE, SOCIAL, IMAGES, THEME, getOGImageKey, getThemeCss } from "@config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultTitle,
    template: SITE.titleTemplate,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    title: SITE.defaultTitle,
    description: SITE.description,
    siteName: SITE.nameFull,
    images: [
      {
        url: getOGImageKey("default"),
        width: 1200,
        height: 630,
        alt: SITE.nameFull,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.description,
    images: [getOGImageKey("default")],
    site: SOCIAL.twitter,
    creator: SOCIAL.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: IMAGES.favicon, type: "image/png" }],
    apple: IMAGES.favicon,
  },
  verification: {},
};

export const viewport: Viewport = {
  themeColor: THEME.colors.bg,
  colorScheme: SITE.colorScheme as "dark" | "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={SITE.language}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn("font-sans", rubik.variable)}
    >
      <head>
        {/* Theme variables generated from config/theme.json */}
        <style id="theme-variables" dangerouslySetInnerHTML={{ __html: getThemeCss() }} />
      </head>
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          rubik.variable,
          "font-sans antialiased text-brand-text"
        )}
      >
        {children}
      </body>
    </html>
  );
}
