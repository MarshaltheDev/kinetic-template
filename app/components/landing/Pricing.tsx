/**
 * Pricing cards on the home page. Text, prices and features: config/text.json -> pages.home.pricing.
 * Used by: app/page.tsx
 */

"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PAGES } from "@config/site";

const PRICING = PAGES.home.pricing;
const plans = PRICING.plans;

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text mb-4">
            {PRICING.title}
          </h2>
          <p className="text-[14px] text-brand-muted max-w-xl mx-auto">
            {PRICING.subtitle}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-md border p-6 ${
                plan.highlighted
                  ? "border-brand-highlight-border bg-linear-to-b from-brand-primary/10 to-brand-bg shadow-lg shadow-brand-primary/10"
                  : "border-brand-border bg-brand-surface/50 hover:border-brand-border/80 hover:bg-brand-surface/80"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-md bg-brand-primary text-[11px] font-medium text-brand-text">
                  {PRICING.popularLabel}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[15px] font-semibold text-brand-text mb-1">{plan.name}</h3>
                <p className="text-[12px] text-brand-muted">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-brand-text">{plan.price}</span>
                <span className="text-[14px] text-brand-muted">{plan.period}</span>
              </div>

              <Button
                className={`w-full mb-6 text-[13px] font-medium h-10 rounded-md ${
                  plan.highlighted
                    ? "bg-brand-primary hover:bg-brand-primary-hover text-brand-strong"
                    : "bg-brand-surface/60 hover:bg-brand-surface/60 text-brand-text border border-brand-border"
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-accent-light shrink-0" />
                    <span className="text-[13px] text-brand-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}