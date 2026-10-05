/**
 * Terms of Service page (/terms-of-service). The legal text is written directly in this file.
 * SEO: config/seo.json -> pages["/terms-of-service"]. Placeholder text: have it reviewed before launch.
 */

import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { PAGE_META } from "@config/site";

export const metadata: Metadata = PAGE_META["/terms-of-service"];

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-bg text-brand-text">
      <Navbar />
      <section className="relative mx-auto max-w-5xl px-6 pt-28 sm:pt-32 pb-24 sm:pb-32">
        {/* Document Header */}
        <div className="mb-12 pb-8 border-b border-brand-border text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight mb-3">Terms of Service</h1>
            <p className="text-sm text-brand-muted">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

        {/* Document Body */}
        <div className="space-y-10">
            
            {/* 1 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">01</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Acceptance of Terms</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum. At dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur.
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Anyone under 16 cannot participate.",
                  "Ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis.",
                  "Eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">What We Provide</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.",
                  "Do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.",
                  "Dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris. Nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Your Account</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. Ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
                  "Aute irure dolor in reprehenderit in voluptate velit esse cillum.",
                  "Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt.",
                  "Pariatur excepteur sint occaecat cupidatat non proident sunt in culpa.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Content Rights</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci.",
                  "Anim id est laborum curabitur pretium tincidunt lacus.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Your Data</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted">
                Lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem. Mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 6 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">06</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Payment Terms</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque.",
                  "Pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Refund Policy</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum.
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut.",
                  "In faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing.",
                  "Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut. Enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
                  "Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim. Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "Magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut.",
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

            {/* 8 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">08</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Termination</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  "Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
                  "Esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Limitation of Liability</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut. Vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 10 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">10</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Governing Law</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted">
                In culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum. Pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 11 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">11</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Terms of Service Updates</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted">
                Commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 12 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">12</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Miscellaneous</h2>
              </div>
              <ul className="space-y-2.5">
                {[
                  { label: "Force Majeure", text: "Ipsum pulvinar etiam vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros." },
                  { label: "Severability", text: "Ullamcorper sem mauris elementum sapien ac." },
                  { label: "No Waiver", text: "Eros ipsum at dui vestibulum ante ipsum primis." },
                  { label: "Entire Agreement", text: "Primis in faucibus orci luctus." },
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