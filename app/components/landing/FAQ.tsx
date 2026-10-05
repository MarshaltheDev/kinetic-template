/**
 * FAQ accordion on the home page. Text: config/text.json -> pages.home.faq. Image: config/images.json (mascotFaq).
 * Used by: app/page.tsx
 */

"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { IMAGES, PAGES } from "@config/site";

const FAQ_SECTION = PAGES.home.faq;
const FAQ_DATA = FAQ_SECTION.items;
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section
      id="faq"
      className="py-16 sm:py-24 px-6 bg-brand-bg"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-8">
        {/* Mascot Image on the Left */}
        <motion.div
          className="hidden lg:flex lg:shrink-0 lg:items-center"
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src={IMAGES.mascotFaq}
            alt=""
            className="w-96 h-auto object-contain"
          />
        </motion.div>
        {/* FAQ Content */}
        <div className="max-w-4xl w-full">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-brand-text mb-8 sm:mb-12"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
           {FAQ_SECTION.title}
        </motion.h2>

        <div className="border-t border-brand-border">
          {FAQ_DATA.map((item, i) => (
            <motion.div
              key={i}
              className="border-b border-brand-border"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span
                  className={`text-[14px] font-medium transition-colors duration-200 ${
                    open === i ? "text-brand-text" : "text-brand-muted group-hover:text-brand-strong"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`shrink-0 text-brand-muted group-hover:text-brand-muted transition-all duration-200 ${
                    open === i ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <Plus size={14} />
                </span>
              </button>
              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="pb-5 text-[13px] text-brand-muted leading-relaxed max-w-2xl">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </motion.section>
  );
}