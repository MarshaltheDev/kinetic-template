/**
 * Call-to-action banner at the bottom of /vps-hosting. Text: config/text.json -> pages.vps.cta.
 * Used by: app/vps-hosting/page.tsx
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PAGES } from "@config/site";

const CTA = PAGES.vps.cta;

export default function VPSCta() {
  return (
    <motion.section
      className="py-16 sm:py-24 px-6 bg-brand-bg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative rounded-md bg-brand-surface/60 border border-brand-border px-6 py-10 sm:px-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Left side - Text */}
          <div className="flex-1">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text tracking-tight">
              {CTA.title}{" "}
              <span className="bg-linear-to-r from-brand-text via-brand-accent-soft to-brand-accent bg-clip-text text-transparent">
                {CTA.highlight}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-brand-muted text-base sm:text-lg">{CTA.description}
            </p>
          </div>

          {/* Right side - Button */}
          <div className="shrink-0">
            <Link href={CTA.button.href}>
              <motion.button
                className="bg-brand-primary hover:bg-brand-primary-hover text-brand-strong font-medium text-base px-8 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {CTA.button.label}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
