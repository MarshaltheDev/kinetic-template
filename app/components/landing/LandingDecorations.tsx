/**
 * Decorative background shapes for the home page. No config; edit the file to change the look.
 * Used by: app/page.tsx
 */

"use client";

import React from "react";

interface LandingDecorationsProps {
  className?: string;
}

export function LandingDecorations({ className = "" }: LandingDecorationsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Vertical lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${Math.min((i + 0.5) * 5, 94)}%`,
              background: `linear-gradient(to bottom, transparent, rgb(var(--brand-accent-light)/0.06) 20%, rgb(var(--brand-accent-light)/0.06) 80%, transparent)`,
            }}
          />
        ))}
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${(i + 0.5) * 6.67}%`,
              background: `linear-gradient(to right, transparent, rgb(var(--brand-accent-light)/0.06) 20%, rgb(var(--brand-accent-light)/0.06) 80%, transparent)`,
            }}
          />
        ))}
      </div>

      {/* Diagonal lines - top-left to bottom-right */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`d1-${i}`}
            className="absolute w-px bg-linear-to-b"
            style={{
              top: "-10%",
              left: `${(i + 1) * 4}%`,
              height: "120%",
              background: "linear-gradient(to bottom, transparent, rgb(var(--brand-accent-light)/0.04) 30%, rgb(var(--brand-accent-light)/0.04) 70%, transparent)",
              transform: `rotate(15deg)`,
              transformOrigin: "top center",
            }}
          />
        ))}
      </div>

      {/* Diagonal lines - top-right to bottom-left */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`d2-${i}`}
            className="absolute w-px bg-linear-to-b"
            style={{
              top: "-10%",
              right: `${Math.min((i + 1) * 4, 12)}%`,
              height: "120%",
              background: "linear-gradient(to bottom, transparent, rgb(var(--brand-accent-light)/0.04) 30%, rgb(var(--brand-accent-light)/0.04) 70%, transparent)",
              transform: `rotate(-15deg)`,
              transformOrigin: "top center",
            }}
          />
        ))}
      </div>

      {/* Radial glow at center */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgb(var(--brand-accent-light)/0.03) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}