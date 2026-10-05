/**
 * Acceptable Use Policy page (/acceptable-use-policy). The legal text is written directly in this file
 * and the page metadata is set inline here. Placeholder text: have it reviewed before launch.
 */

import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
};

export default function AcceptableUsePolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-bg text-brand-text">
      <Navbar />
      <section className="relative mx-auto max-w-5xl px-6 pt-28 sm:pt-32 pb-24 sm:pb-32">
        {/* Document Header */}
        <div className="mb-12 pb-8 border-b border-brand-border text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight mb-3">Acceptable Use Policy</h1>
            <p className="text-sm text-brand-muted">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

        {/* Document Body */}
        <div className="space-y-10">
            
            {/* 1 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">01</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Getting Started</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum. Primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 2 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">02</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Illegal or Harmful Content</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut.",
                  "Etiam vehicula neque ut vulputate ullamcorper sem mauris.",
                  "Mauris elementum sapien ac iaculis eros ipsum at dui.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 3 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">03</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Network Abuse</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="space-y-2.5">
                {[
                  "At dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum.",
                  "Faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing.",
                  "Amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
                  "Tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 4 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">04</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Prohibited Services</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Cryptocurrency mining of any kind.",
                  "Aliqua ut enim ad minim veniam quis nostrud exercitation.",
                  "Nostrud exercitation ullamco laboris nisi ut aliquip.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 5 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">05</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Community Standards</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Ex ea commodo consequat duis aute irure dolor in reprehenderit in.",
                  "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 6 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">06</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Enforcement</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                In voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Immediate suspension of services.",
                  "Sint occaecat cupidatat non proident sunt in culpa qui.",
                  "Culpa qui officia deserunt mollit anim id est.",
                  "Est laborum curabitur pretium tincidunt lacus nulla.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 7 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">07</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Acceptable Use Policy Updates</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted">
                Gravida orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate. Ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}