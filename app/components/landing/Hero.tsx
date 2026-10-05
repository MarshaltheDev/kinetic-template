/**
 * Hero section at the top of the home page: headline, button, mascot and aurora background.
 * Text: config/text.json -> pages.home.hero. Mascot: config/images.json (mascotHero).
 * Colors: config/theme.json -> backgrounds.aurora. Used by: app/page.tsx
 */

"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Aurora from "./Aurora";
import { IMAGES, PAGES, THEME, themeColor } from "@config/site";

const HERO = PAGES.home.hero;
const AURORA = THEME.backgrounds.aurora;

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations after mount
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
      setScrolled(window.scrollY > 40);
    });
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(timer);
    };
  }, []);

  // Shared animation class builder
  const animClass = () =>
    `transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-brand-bg overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none" style={{ height: "100dvh" }}>
        <Aurora
          colorStops={AURORA.colors.map((c) => themeColor(c))}
          blend={AURORA.blend}
          amplitude={AURORA.amplitude}
          speed={AURORA.speed}
        />
      </div>

      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgb(var(--brand-accent-light)/0.07),transparent)] pointer-events-none" />

      {/* Large decorative circles for visual depth with floating animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-surface/60 blur-3xl"
          style={{
            animation: "floatCircle 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl"
          style={{
            animation: "floatCircle 10s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-brand-surface/60 blur-3xl"
          style={{
            animation: "floatCircle 12s ease-in-out infinite 4s",
          }}
        />
      </div>

      {/* Content wrapper - visible immediately, no flash */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          {/* Left content - aligned to the left */}
          <div className="flex-1 max-w-xl">

            {/* Main heading - large and bold with accent color */}
            <h1
              className={`text-[clamp(2.2rem,6vw,3.8rem)] font-bold tracking-[-0.03em] leading-[1.1] text-brand-text ${animClass()}`}
            >
              {HERO.title}{" "}
              <span className="bg-linear-to-r from-brand-text via-brand-accent-soft to-brand-accent bg-clip-text text-transparent">
                {HERO.highlight}
              </span>
            </h1>

            {/* Description subtitle */}
            <p
              className={`mt-5 text-[clamp(0.95rem,1.5vw,1.1rem)] text-brand-muted leading-relaxed ${animClass()}`}
            >
{HERO.description}
            </p>

            {/* Primary CTA button */}
            <div
              className={`mt-8 flex items-center gap-3 ${animClass()}`}
            >
              <a
                href={HERO.cta.href}
                className="group inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-md bg-brand-primary text-brand-strong shadow-xs shadow-brand-primary/20 transition-all duration-200 hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-brand-primary/30"
                style={{
                  animation: isVisible ? "ctaPulse 3s ease-in-out 2s infinite" : "none",
                }}
              >
{HERO.cta.label}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* Right content - mascot image */}
          <div
            className={`hidden lg:flex flex-1 justify-end items-center ${animClass()}`}
          >
            <div className="relative w-full max-w-md">
              {/* Glow effect behind mascot - animated */}
              <div
                className="absolute inset-0 bg-brand-surface/50 rounded-full blur-3xl opacity-30"
                style={{
                  animation: isVisible ? "glowPulse 4s ease-in-out infinite" : "none",
                }}
              />
              <img
                src={IMAGES.mascotHero}
                alt={HERO.mascotAlt}
                className="relative w-full h-auto drop-shadow-2xl"
                style={{
                  animation: isVisible
                    ? "mascotFloat 6s ease-in-out infinite, mascotWiggle 2s ease-in-out infinite"
                    : "mascotWiggle 2s ease-in-out infinite",
                  animationDelay: isVisible ? "1s, 0s" : "0s, 0s",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none select-none"
        style={{
          opacity: scrolled ? 0 : 1,
          animation: "scrollBounce 2s ease-in-out infinite",
        }}
      >
        <ChevronDown size={20} className="text-brand-muted" />
      </div>
    </section>
  );
}