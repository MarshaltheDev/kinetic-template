/**
 * Home page (/). Puts the landing sections together: Navbar, Hero, Features, GamesShowcase,
 * Pricing, FAQ and Footer. SEO comes from config/seo.json -> pages["/"].
 */

import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import GamesShowcase from "@/components/landing/GamesShowcase";
import { LandingDecorations } from "@/components/landing/LandingDecorations";
import { PAGE_META, SITE } from "@config/site";

export const metadata: Metadata = {
  title: `${SITE.name} - Game Server & VPS Hosting`,
  description: PAGE_META["/"]?.description,
  keywords: PAGE_META["/"]?.keywords,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: PAGE_META["/"]?.openGraph?.title as string,
    description: PAGE_META["/"]?.openGraph?.description as string,
    siteName: PAGE_META["/"]?.openGraph?.siteName as string,
    images: PAGE_META["/"]?.openGraph?.images as { url: string; width: number; height: number; alt: string; type: string }[],
  },
  twitter: PAGE_META["/"]?.twitter,
  robots: PAGE_META["/"]?.robots,
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-bg">
      <LandingDecorations className="z-10" />
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <GamesShowcase />
        <Footer />
      </div>
    </main>
  );
}
