/**
 * VPS hosting page (/vps-hosting). Plans: config/vps.json. Text: config/text.json -> pages.vps.
 * SEO: config/seo.json -> pages["/vps-hosting"].
 */

import type { Metadata } from "next";
import { PAGE_META, PAGES } from "@config/site";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import VPSFAQ from "@/components/vps/FAQ";
import VPSCta from "@/components/vps/CTA";
import VPSFeatures from "@/components/vps/Features";
import { Button } from "@/components/ui/button";
import vpsConfig from "@config/vps.json";
import type { VPSConfig, VPSPlan, VPSCategory } from "@/types/vps";
import VpsHeroClient from "./VpsHeroClient";

export const metadata: Metadata = PAGE_META["/vps-hosting"];

const config = vpsConfig as VPSConfig;
const PLANS_COPY = PAGES.vps.plans;
const SHOW_COMING_SOON = config.showComingSoon;

// =====================================================
// Components
// =====================================================

function PlanRow({ plan, isLast }: { plan: VPSPlan; isLast: boolean }) {
  return (
    <div
      className={`relative flex items-center gap-6 px-6 py-5 transition-all duration-200 ${
        !isLast
          ? "border-b border-brand-border"
          : ""
      } ${
        "bg-brand-surface/60 hover:bg-brand-surface/60"
      }`}
    >
      {/* Name */}
      <div className="w-36 shrink-0">
        <div className="flex items-center gap-2">
          <p className="text-brand-text font-medium text-sm">{plan.name}</p>
          {plan.featured && (
            <span className="bg-brand-surface/50 text-brand-text text-[10px] font-semibold px-2 py-0.5 rounded-md">
              Popular
            </span>
          )}
        </div>
      </div>

      {/* CPU */}
      <div className="flex-1 min-w-0">
        <p className="text-brand-text text-sm truncate">{plan.cpu}</p>
      </div>

      {/* RAM */}
      <div className="w-28 shrink-0">
        <p className="text-brand-text text-sm">{plan.ram}</p>
      </div>

      {/* Storage */}
      <div className="w-36 shrink-0">
        <p className="text-brand-text text-sm">{plan.storage}</p>
      </div>

      {/* Bandwidth */}
      <div className="w-28 shrink-0">
        <p className="text-brand-text text-sm">{plan.bandwidth}</p>
      </div>

      {/* Price */}
      <div className="w-28 shrink-0 text-right">
        <p className="text-brand-text text-lg font-bold">
          ${plan.price}
          <span className="text-brand-muted text-sm font-normal">/mo</span>
        </p>
      </div>

      {/* Purchase Button */}
      <div className="w-28 shrink-0">
        <Link href={plan.orderLink} target="_blank" rel="noopener noreferrer">
          <Button
            className={`w-full h-8 text-xs font-medium ${
              plan.featured
                ? "bg-brand-primary text-brand-strong hover:bg-brand-primary-hover"
                : "bg-brand-surface/60 text-brand-text hover:bg-brand-surface/50"
            }`}
          >
            Purchase
          </Button>
        </Link>
      </div>
    </div>
  );
}

function CategorySection({ category }: { category: VPSCategory }) {
  const visiblePlans = category.plans.filter((plan) => !plan.hidden);

  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-4">
        <h2 className="text-brand-text font-semibold text-xl">{category.name}</h2>
        <p className="text-brand-muted text-sm mt-0.5">{category.description}</p>
      </div>
      <div className="rounded-xl border border-brand-border overflow-hidden">
        {/* Column Headers */}
        <div className="flex items-center gap-6 px-6 py-3 bg-brand-surface/60 border-b border-brand-border">
          <div className="w-36 shrink-0">
            <p className="text-brand-muted text-[10px] font-semibold uppercase tracking-wider">Name</p>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-brand-muted text-[10px] font-semibold uppercase tracking-wider">CPU</p>
          </div>
          <div className="w-28 shrink-0">
            <p className="text-brand-muted text-[10px] font-semibold uppercase tracking-wider">RAM</p>
          </div>
          <div className="w-36 shrink-0">
            <p className="text-brand-muted text-[10px] font-semibold uppercase tracking-wider">Storage</p>
          </div>
          <div className="w-28 shrink-0">
            <p className="text-brand-muted text-[10px] font-semibold uppercase tracking-wider">Bandwidth</p>
          </div>
          <div className="w-28 shrink-0 text-right">
            <p className="text-brand-muted text-[10px] font-semibold uppercase tracking-wider">Price/mo</p>
          </div>
          <div className="w-28 shrink-0 text-right">
          </div>
        </div>
        {/* Rows */}
        <div>
          {visiblePlans.map((plan, index) => (
            <PlanRow key={plan.id} plan={plan} isLast={index === visiblePlans.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

// =====================================================
// Page
// =====================================================

export default function VPSPage() {
  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-text">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <VpsHeroClient />
      </section>

      {/* Plans Section */}
      <div id="plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
            {PLANS_COPY.title}
          </h2>
          <p className="text-brand-muted mt-2 text-base">
            {PLANS_COPY.description}
          </p>
        </div>

        {SHOW_COMING_SOON && (
          <div className="flex flex-col items-center justify-center py-12 text-center mb-8">
            <h3 className="text-5xl font-semibold text-brand-text mb-4">
              {PLANS_COPY.comingSoonTitle}
            </h3>
            <p className="text-brand-muted text-sm max-w-md">
              {PLANS_COPY.comingSoonDescription}
            </p>
          </div>
        )}

        {!SHOW_COMING_SOON && (
          <div>
            {config.planCategories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>

      <VPSFeatures />
      <VPSFAQ />
      <VPSCta />

      <Footer />
    </main>
  );
}