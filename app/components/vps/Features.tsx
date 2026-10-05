/**
 * Feature grid on /vps-hosting. Text and icons: config/text.json -> pages.vps.features.
 * Used by: app/vps-hosting/page.tsx
 */

import { PAGES } from "@config/site";
import { getIcon } from "@/lib/icons";

// Text and icons come from config/text.json -> pages.vps.features
const FEATURES = PAGES.vps.features;
const features = FEATURES.items.map((item) => {
  const Icon = getIcon(item.icon);
  return { ...item, icon: <Icon className="w-5 h-5" /> };
});

export default function VPSFeatures() {
  return (
    <section className="relative py-24 sm:py-32 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
            {FEATURES.title}
          </h2>
           <p className="mt-3 text-brand-muted text-base max-w-xl mx-auto leading-relaxed">
             {FEATURES.description}
           </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-md border border-brand-border bg-brand-surface/60 px-5 py-5 transition-colors duration-200 hover:bg-brand-surface/60"
            >
              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-9 h-9 rounded-lg bg-brand-surface/50 border border-brand-border flex items-center justify-center text-brand-accent-light">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-brand-text tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-brand-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
