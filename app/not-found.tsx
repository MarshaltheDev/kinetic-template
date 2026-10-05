/**
 * 404 page shown for unknown URLs. Text: config/text.json -> pages.notFound.
 * Colors: config/theme.json. Brand name: config/config.json.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, PAGES, SITE, themeColor } from "@config/site";

const NOT_FOUND = PAGES.notFound;

// Server component - no 'use client' needed for static 404 page
export const metadata: Metadata = {
  title: `${NOT_FOUND.title} - ${BRAND.name}`,
  description: NOT_FOUND.metaDescription,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${NOT_FOUND.title} | ${BRAND.name}`,
    description: NOT_FOUND.metaDescription,
    siteName: BRAND.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${NOT_FOUND.title} | ${BRAND.name}`,
    description: NOT_FOUND.metaDescription,
  },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: themeColor("bg"),
        color: themeColor("text"),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--brand-font-sans)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          margin: 0,
          marginBottom: "1rem",
        }}
      >
        {NOT_FOUND.title}
      </h1>
      <p
        style={{
          fontSize: "1.125rem",
          color: themeColor("subtle"),
          marginBottom: "2rem",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        {NOT_FOUND.message}
      </p>
      <style>{`
        .nf-link {
          padding: 0.55rem 1.25rem;
          background-color: ${themeColor("primary")};
          color: ${themeColor("strong")};
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: opacity 0.2s;
        }
        .nf-link:hover {
          opacity: 0.85;
        }
      `}</style>
      <Link href={NOT_FOUND.button.href} className="nf-link">{NOT_FOUND.button.label}</Link>
    </div>
  );
}
