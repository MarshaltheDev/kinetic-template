/**
 * Service Level Agreement page (/service-level-agreement). The legal text is written directly in this
 * file and the page metadata is set inline here. Placeholder text: have it reviewed before launch.
 */

import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export const metadata: Metadata = {
  title: "Service Level Agreement",
  description: "Ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus.",
};

export default function ServiceLevelAgreementPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-bg text-brand-text">
      <Navbar />
      <section className="relative mx-auto max-w-5xl px-6 pt-28 sm:pt-32 pb-24 sm:pb-32">
        {/* Document Header */}
        <div className="mb-12 pb-8 border-b border-brand-border text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight mb-3">Service Level Agreement</h1>
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
                Ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Privacy Policy.",
                  "Acceptable Use Policy.",
                  "Terms of Service.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Uptime Guarantee</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Vehicula neque ut vulputate ullamcorper sem mauris elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur. Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 3 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">03</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Security & DDoS Protection</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Elementum sapien ac iaculis eros ipsum at dui vestibulum ante ipsum primis in faucibus orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt. Ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Staying on top of password safety.",
                  "Patching equipment regularly.",
                  "Dui vestibulum ante ipsum primis in faucibus.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Support Services</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Orci luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                <strong className="text-brand-text">Critical Issues (Service Fully Down):</strong>
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "We aim to respond within 60 minutes.",
                  "Consectetur adipiscing elit sed do eiusmod.",
                  "Incididunt ut labore et dolore magna aliqua ut enim.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                <strong className="text-brand-text">Non-Critical Issues:</strong>
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
                  "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
                  "Ea commodo consequat duis aute irure dolor in reprehenderit.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                <strong className="text-brand-text">Support Includes:</strong>
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Troubleshooting on our systems.",
                  "Simple setup help.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                <strong className="text-brand-text">Support Does Not Include:</strong>
              </p>
              <ul className="space-y-2.5">
                {[
                  "In reprehenderit in voluptate velit esse cillum.",
                  "Dolore eu fugiat nulla pariatur excepteur.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Your Responsibilities</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Qui officia deserunt mollit anim id est.",
                  "Laborum curabitur pretium tincidunt lacus nulla gravida orci a odio.",
                  "Maintaining secure access credentials.",
                  "Performing your own backups.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                The following are prohibited:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Cryptocurrency mining.",
                  "Spam or abuse.",
                  "Intentional network disruption.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Our Responsibilities</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                We are responsible for the following:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus.",
                  "Commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar.",
                  "Feugiat ut consequat ipsum pulvinar etiam vehicula neque ut vulputate.",
                  "Neque ut vulputate ullamcorper sem mauris elementum.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Exclusions</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Ante ipsum primis in faucibus orci luctus lorem:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Planned or urgent repairs.",
                  "Forces outside our influence.",
                  "Actions by customers.",
                  "Malfunctions in external systems.",
                  "Breaches aimed at disruption.",
                  "Power failures from vendors.",
                  "Testing environments.",
                  "Vestibulum ante ipsum primis in faucibus orci.",
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
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Liability Limits</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Luctus lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim. Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 9 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">09</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Indemnification</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim. Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse:
              </p>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Violations of these rules.
              </p>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Copyright infringements.",
                  "Ullamco laboris nisi ut aliquip ex ea.",
                  "Misuse of tools.",
                  "Commodo consequat duis aute irure dolor in reprehenderit.",
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

            {/* 10 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">10</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Dispute Resolution</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted mb-4">
                Ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt. In culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat ipsum pulvinar etiam vehicula neque ut.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border" />

            {/* 11 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold text-brand-text bg-brand-surface/60 px-2.5 py-0.5 rounded-sm">11</span>
                <h2 className="text-lg font-semibold text-brand-text tracking-wide">Service Level Agreement Updates</h2>
              </div>
              <p className="text-sm leading-7 text-brand-muted">
                Laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur. Sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam.
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
                  { label: "Severability", text: "Pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia." },
                  { label: "Entire Agreement", text: "Sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium." },
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