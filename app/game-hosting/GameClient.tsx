/**
 * Content of /game-hosting: hero, game list, features, FAQ and call-to-action.
 * Hero text: config/text.json -> pages.games.hero. Background colors: config/theme.json -> backgrounds.grainient.
 * Used by: app/game-hosting/page.tsx
 */

"use client";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Grainient from "@/components/vps/Grainient";
import { motion } from "framer-motion";
import GameServerListWrapper from "@/components/game/GameServerListWrapper";
import GameFeatures from "@/components/game/Features";
import GameFAQ from "@/components/game/FAQ";
import GameCta from "@/components/game/CTA";
import { PAGES, THEME, themeColor } from "@config/site";

const HERO = PAGES.games.hero;
const GRAIN = {
  color1: themeColor(THEME.backgrounds.grainient.color1),
  color2: themeColor(THEME.backgrounds.grainient.color2),
  color3: themeColor(THEME.backgrounds.grainient.color3),
};

export default function GameClient() {
  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-text">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-brand-bg overflow-hidden">
        {/* Grainient background */}
        <div className="absolute inset-0">
          <Grainient
            color1={GRAIN.color1}
            color2={GRAIN.color2}
            color3={GRAIN.color3}
            timeSpeed={0.0}
            warpStrength={0.0}
            grainAmount={0.05}
            contrast={1.0}
            saturation={1.0}
            grainAnimated={false}
            centerY={0.3}
          />
        </div>
        <div className="absolute inset-0 bg-brand-bg/20 pointer-events-none" />
        {/* Smooth fade to the page background across the full hero height */}
        <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-brand-bg/30 to-brand-bg/10 pointer-events-none" />

        <motion.div
          className="relative z-10 text-center px-6 w-full mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[clamp(3rem,10vw,5.5rem)] font-bold tracking-[-0.04em] leading-none text-center whitespace-nowrap"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {HERO.title}{" "}
            <span className="bg-linear-to-r from-brand-text via-brand-accent-soft to-brand-accent bg-clip-text text-transparent">
              {HERO.highlight}
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-brand-muted text-lg sm:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            {HERO.description}
          </motion.p>

        </motion.div>
      </section>

      {/* Game Server List */}
      <GameServerListWrapper />
      
      <GameFeatures />
      <GameFAQ />
      <GameCta />

      <Footer />
    </main>
  );
}
