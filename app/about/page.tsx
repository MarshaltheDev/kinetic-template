/**
 * About page (/about). Text: config/text.json -> pages.about. Images: config/images.json (about1-3).
 * SEO: config/seo.json -> pages["/about"].
 */

import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { IMAGES, PAGES, PAGE_META } from "@config/site";

const ABOUT = PAGES.about;
const ABOUT_IMAGES: Record<string, string> = {
  about1: IMAGES.about1,
  about2: IMAGES.about2,
  about3: IMAGES.about3,
};

export const metadata: Metadata = PAGE_META["/about"];


export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-text">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-6 mx-auto max-w-6xl text-center">
           <h1 className="text-[clamp(2.4rem,6vw,4rem)] font-bold tracking-tight text-brand-text leading-[1.1]">
             {ABOUT.hero.title}
           </h1>
           <p className="mt-6 text-[17px] text-brand-muted leading-relaxed max-w-2xl mx-auto">
             {ABOUT.hero.description}
           </p>
      </section>

      {/* Alternating image + text sections */}
      {ABOUT.sections.map((section, index) => {
        const reversed = index % 2 === 1;
        const image = (
          <div className="rounded-2xl overflow-hidden bg-brand-surface/60 aspect-4/3 flex items-center justify-center">
            <img
              src={ABOUT_IMAGES[section.image] ?? section.image}
              alt={section.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        );
        const text = (
          <div>
            <h2 className="text-2xl font-semibold text-brand-text tracking-tight">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-[15px] text-brand-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        );
        return (
          <section key={section.title} className="px-6 mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-20 border-t border-brand-border">
              {reversed ? text : image}
              {reversed ? image : text}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="px-6 mx-auto max-w-6xl">
        <div className="py-20 border-t border-brand-border">
          <div className="relative rounded-md bg-brand-surface/60 border border-brand-border px-6 py-10 sm:px-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text tracking-tight">
                {ABOUT.cta.title}
              </h2>
              <p className="mt-2 text-brand-muted text-base sm:text-lg">
                {ABOUT.cta.description}
              </p>
            </div>
            <div className="shrink-0">
              <a href={ABOUT.cta.button.href}>
                <button
                  className="bg-brand-primary hover:bg-brand-primary-hover text-brand-strong font-medium text-base px-8 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap inline-flex items-center gap-2"
                >
                  {ABOUT.cta.button.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}