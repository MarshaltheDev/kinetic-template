/**
 * Home page band with a wall of game images and a "Browse all games" button.
 * Text: config/text.json -> pages.home.gamesShowcase. Images: config/images.json -> showcaseBackgrounds.
 * Used by: app/page.tsx
 */

"use client";

import { ArrowRight } from "lucide-react";
import { IMAGES, PAGES } from "@config/site";

// Text comes from config/text.json -> pages.home.gamesShowcase
// Background images come from config/images.json -> showcaseBackgrounds
const SHOWCASE = PAGES.home.gamesShowcase;
const IMAGES_LIST = IMAGES.showcaseBackgrounds;

export default function GamesShowcase() {
  return (
    <section className="relative py-20 bg-brand-bg overflow-hidden">
       {/* Background game grid using CSS background images */}
       <div className="absolute inset-0 opacity-60">
         <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 p-2">
           {Array.from({ length: 16 }, (_, i) => {
             const image = IMAGES_LIST[i % IMAGES_LIST.length];
             return (
               <div
                 key={i}
                 className="rounded overflow-hidden"
                 style={{ 
                   background: `url(${image}) center/cover no-repeat`,
                   contain: "layout style",
                   aspectRatio: "1"
                 }}
               />
             );
           })}
         </div>
       </div>

      {/* Darker gradient overlay over the images */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-bg/70 via-brand-bg/50 to-brand-bg/70" />

      {/* Subtle fade on all edges */}
      <div className="absolute inset-0 bg-linear-to-t from-brand-bg from-3% via-transparent via-15% to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-brand-bg from-3% via-transparent via-15% to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-bg from-3% via-transparent via-10% to-transparent" />
      <div className="absolute inset-0 bg-linear-to-l from-brand-bg from-3% via-transparent via-10% to-transparent" />

      {/* Content on top */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
           <h2
           className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-brand-text tracking-tight heading-font"
         >
           {SHOWCASE.title}{" "}
 <span className="text-brand-text">{SHOWCASE.highlight}</span>
           </h2>

           <p
           className="mt-6 text-lg text-brand-text max-w-2xl mx-auto leading-relaxed"
         >
           {SHOWCASE.descriptionLead}{" "}
           {SHOWCASE.featuredGames.map((name, i) => (
             <span key={name}>
               <span className="text-brand-text font-medium heading-font">{name}</span>
               {i < SHOWCASE.featuredGames.length - 1 ? ", " : ", "}
             </span>
           ))}
           {SHOWCASE.descriptionTail}
           </p>

           <div
           className="mt-10 flex justify-center"
         >
           <a
             href={SHOWCASE.button.href}
             className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-brand-primary text-brand-strong text-[14px] font-semibold shadow-xs shadow-brand-primary/20 transition-all duration-200 hover:brightness-90 heading-font"
           >
             {SHOWCASE.button.label}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}