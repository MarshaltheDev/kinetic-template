/**
 * Privacy Policy page (/privacy-policy). The legal text is written directly in this file.
 * SEO: config/seo.json -> pages["/privacy-policy"]. Placeholder text: have it reviewed before launch.
 */

import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { PAGE_META } from "@config/site";

export const metadata: Metadata = PAGE_META["/privacy-policy"];

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-bg text-brand-text">
      <Navbar />
      <section className="relative mx-auto max-w-5xl px-6 pt-28 sm:pt-32 pb-24 sm:pb-32">
        {/* Document Header */}
        <div className="mb-12 pb-8 border-b border-brand-border text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight mb-3">Privacy Policy</h1>
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
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui.
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.",
                  "Ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
                  "Laboris nisi ut aliquip ex ea commodo consequat.",
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

            {/* 2 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">02</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Data We Collect</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius. Turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "In voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  "Fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.",
                  "Non proident sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus. Nulla gravida orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Deserunt mollit anim id est laborum curabitur pretium tincidunt:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Pretium tincidunt lacus nulla gravida orci.",
                  "Odio nullam varius turpis et commodo pharetra.",
                  "Integer feugiat lacus et arcu feugiat ut consequat.",
                  "Consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien.",
                  "Vulputate ullamcorper sem mauris elementum sapien ac.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">How We Use Data</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit. Esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 4 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">04</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Data Sharing</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 5 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">05</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Data Security</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Encrypting data.",
                  "Limiting access.",
                  "Locking internet messages.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-7 text-brand-muted">
                Officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 6 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">06</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Data Retention</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut. Consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 7 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">07</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Cookies & Tracking</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci. A odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 8 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">08</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Your Rights</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                A odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                  "Voluptate velit esse cillum dolore eu fugiat.",
                  "Nulla pariatur excepteur sint occaecat cupidatat.",
                  "Proident sunt in culpa qui officia deserunt mollit anim id est.",
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

            {/* 9 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">09</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Children&apos;s Privacy</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at. Dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 10 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">10</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Third-Party Services</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted">
                Pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris. Elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 11 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">11</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Global Data Transfers</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted">
                Ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui. Vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 12 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">12</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Privacy Policy Updates</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted">
                Feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at. Dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 13 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">13</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Miscellaneous</h2>
              </div>
              <ul className="space-y-2.5">
                {[
                  { label: "Automated Decisions", text: "Dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco." },
                  { label: "Contact Us", text: "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                  { label: "Severability", text: "Ut aliquip ex ea commodo consequat duis aute irure dolor." },
                  { label: "Supplemental Agreement", text: "Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span><strong className="text-brand-text">{item.label}:</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}