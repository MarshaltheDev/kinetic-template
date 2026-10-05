/**
 * Feature grid on the home page. Text and icons: config/text.json -> pages.home.features.
 * Used by: app/page.tsx
 */

"use client";

import { motion } from "framer-motion";
import { PAGES } from "@config/site";
import { getIcon } from "@/lib/icons";

const FEATURES = PAGES.home.features;

export default function Features() {
  return (
    <motion.section
      id="features"
      className="relative py-24 sm:py-32 bg-brand-bg overflow-hidden"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text">
            {FEATURES.title}
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.items.map((f, i) => {
            const Icon = getIcon(f.icon);
              return (
                <motion.div
                  key={f.title}
                  className="relative rounded-md border border-brand-border bg-brand-surface/50 p-6 hover:border-brand-border/80 hover:bg-brand-surface/80"
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                >
                  <div className="w-10 h-10 rounded-md bg-brand-surface/50 border border-brand-border flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-accent-light" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-brand-text mb-2">{f.title}</h3>
                  <p className="text-[13px] text-brand-muted leading-relaxed">{f.description}</p>
                </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}