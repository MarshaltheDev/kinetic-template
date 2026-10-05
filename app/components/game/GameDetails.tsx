/**
 * Full game detail page: hero, plan picker (plan type and location), included features, FAQ and CTA.
 * Data: config/games.json. Text: config/text.json -> pages.games.details.
 * Images: config/games.json (each game's "hero" and "logo"), config/images.json (mascotGame). Used by: app/game-hosting/[gameId]/page.tsx
 */

"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  ShieldCheck, Zap, Headphones, HardDrive,
  Package, RefreshCw, Clock,
  Server, Database, Wifi, Plus,
} from "lucide-react"
import gamesConfig from "@config/games.json"
import { IMAGES, PAGES, fmt } from "@config/site"
import { getIcon } from "@/lib/icons"
import type { GamesConfig, Game, GamePlan } from "../../types/games"
import Navbar from "../landing/Navbar"
import Footer from "../landing/Footer"

const config = gamesConfig as GamesConfig

interface GameDetailsProps {
  gameId: string
}

const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
)

const DETAILS = PAGES.games.details

const INCLUDED = DETAILS.included.map((item) => ({
  icon: getIcon(item.icon),
  title: item.title,
  desc: item.description,
}))

function buildFAQs(game: Game) {
  const vars = { game: game.name, price: game.startingAt }
  return DETAILS.faq.map((item) => ({
    q: fmt(item.question, vars),
    a: fmt(item.answer, vars),
  }))
}

function getRecommendedPlayers(ram: string): string {
  const ramValue = parseInt(ram);
  if (ramValue <= 2) return "Up to 8 players";
  if (ramValue <= 4) return "Up to 20 players";
  if (ramValue <= 8) return "Up to 50 players";
  if (ramValue <= 16) return "Up to 100 players";
  if (ramValue <= 32) return "Up to 200 players";
  return "200+ players";
}

function PlanCard({ plan, popular }: { plan: GamePlan; popular?: boolean }) {
  return (
    <div className={`relative flex flex-col bg-transparent backdrop-blur-xs rounded-md overflow-hidden transition-all duration-300 ${
      popular
        ? "border-2 border-brand-accent"
        : "border border-brand-border hover:border-brand-accent"
    }`}>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="px-5 pt-5 pb-3">
          <h3 className="text-sm font-medium text-brand-text mb-1">{plan.name}</h3>
          <p className="text-brand-muted text-sm mt-0.5">{getRecommendedPlayers(plan.ram)}</p>
        </div>

        {/* Price */}
        <div className="px-5 pb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-brand-text heading-font">${plan.price.toFixed(2)}</span>
          </div>
          <span className="text-brand-muted text-sm font-normal">/Month</span>
        </div>

        {/* Add to cart button */}
        <div className="px-5 pb-4">
          <a
            href={plan.orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-primary text-brand-strong px-4 py-2.5 rounded-lg font-medium transition-all duration-300 hover:brightness-90 flex items-center justify-center gap-2 text-sm"
          >
            <CartIcon className="w-3.5 h-3.5" />
            Add to cart
          </a>
        </div>

        {/* Specs Grid */}
        <div className="px-5 pb-4 grid grid-cols-2 gap-3">
          {/* CPU */}
          <div>
            <div className="flex items-center gap-1.5 text-brand-muted mb-1.5">
              <Server className="w-4 h-4 text-brand-accent-light" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">CPU</span>
            </div>
            <div className="text-brand-text font-bold text-sm mb-0.5">{plan.cpu === "TBD" ? "4 Cores" : plan.cpu}</div>
            <div className="text-brand-muted text-xs font-normal">5.6 GHz</div>
          </div>

          {/* RAM */}
          <div>
            <div className="flex items-center gap-1.5 text-brand-muted mb-1.5">
              <Database className="w-4 h-4 text-brand-accent-light" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">RAM</span>
            </div>
            <div className="text-brand-text font-bold text-sm mb-0.5">{plan.ram}</div>
            <div className="text-brand-muted text-xs font-normal">DDR5</div>
          </div>

          {/* Storage */}
          <div>
            <div className="flex items-center gap-1.5 text-brand-muted mb-1.5">
              <HardDrive className="w-4 h-4 text-brand-accent-light" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Storage</span>
            </div>
            <div className="text-brand-text font-bold text-sm mb-0.5">{plan.storage === "TBD SSD" ? "Unlimited" : plan.storage}</div>
            <div className="text-brand-muted text-xs font-normal">NVMe SSD</div>
          </div>

          {/* Bandwidth */}
          <div>
            <div className="flex items-center gap-1.5 text-brand-muted mb-1.5">
              <Wifi className="w-4 h-4 text-brand-accent-light" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Network</span>
            </div>
            <div className="text-brand-text font-bold text-sm mb-0.5">Unlimited</div>
            <div className="text-brand-muted text-xs font-normal">Bandwidth</div>
          </div>
        </div>

        {/* Features */}
        <div className="px-5 pb-5 border-t border-brand-border pt-4 mt-auto">
          <h4 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-2.5">Included</h4>
          <div className="space-y-2">
            {[
              "Enterprise DDoS Protection",
              "NVMe SSD Storage",
              "24/7 Expert Support",
              "99.9% Uptime SLA"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-brand-accent-light shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-brand-muted text-sm font-normal">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* FAQ Section - matches VPS FAQ component style */
function GameFAQ({ game }: { game: Game }) {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = useMemo(() => buildFAQs(game), [game])

  return (
    <motion.section
      className="py-16 sm:py-24 px-6 bg-brand-bg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-8">
        {/* Mascot Image on the Left */}
        <motion.div
          className="hidden lg:flex lg:shrink-0 lg:items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src={IMAGES.mascotGame}
            alt=""
            className="w-96 h-auto object-contain"
          />
        </motion.div>
        {/* FAQ Content */}
        <div className="max-w-4xl w-full">
<motion.h2
  className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-brand-text mb-8 sm:mb-12"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
>
  {DETAILS.faqTitle}
</motion.h2>

          <div className="border-t border-brand-border">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                className="border-b border-brand-border"
                initial={{ opacity: 0, y: 20 }}
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
                    {faq.q}
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
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

/* Page */
export default function GameDetails({ gameId }: GameDetailsProps) {
  const [selectedPlanType, setSelectedPlanType] = useState(config.planTypes[0].id)

  const currentGame = useMemo(() => config.games.find((g: Game) => g.id === gameId), [gameId])
  const currentPlans = useMemo(() => {
    if (!currentGame) return []
    return (currentGame.plans[selectedPlanType as keyof typeof currentGame.plans] ?? []) as GamePlan[]
  }, [selectedPlanType, currentGame])

  if (!currentGame) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <h1 className="text-2xl font-bold text-brand-text heading-font">Game Not Found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />

      {/* Hero */}
      <div className="bg-brand-bg relative">
        {/* Background image */}
        <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden">
          <Image
            src={currentGame.hero}
            alt={currentGame.name}
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
            priority
          />
           <div className="absolute inset-0 bg-brand-bg/60" />
        </div>

        {/* Content */}
        <div className="relative z-20">
          <section className="px-4 sm:px-6 lg:px-8 pt-32 sm:pt-52 pb-32">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Text content */}
                <div>
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text tracking-tight mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <span>{currentGame.name}</span>
                    <span className="bg-linear-to-r from-brand-text via-brand-accent-soft to-brand-accent bg-clip-text text-transparent"> Server Hosting</span>
                  </motion.h1>

                  <motion.p
                    className="text-brand-muted text-base mt-0.5 max-w-3xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                  >
                    {currentGame.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-x-6 gap-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                  >
                    {([
                      { icon: RefreshCw,   label: "72hr Self-Serve Refund" },
                      { icon: Zap,         label: "Instant Setup" },
                      { icon: Clock,       label: "99.9% Uptime" },
                      { icon: Headphones,  label: "24/7 Support" },
                      { icon: Package,     label: "Instant Modpack & Plugin Installer" },
                      { icon: ShieldCheck, label: "DDoS Protection" },
                    ] as { icon: React.ElementType; label: string }[]).map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 text-sm text-brand-muted">
                        <Icon className="w-4 h-4 text-brand-accent-light shrink-0" />
                        <span className="font-medium">{label}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Right side - Logo */}
                <motion.div
                  className="hidden lg:flex justify-center items-center"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="relative w-full max-w-md aspect-square">
                    <Image
                      src={currentGame.logo}
                      alt={`${currentGame.name} logo`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 1024px) 0vw, 40vw"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
          style={{
            height: "60vh",
             background: "linear-gradient(to bottom, transparent 0%, rgb(var(--brand-bg)/0.013) 8%, rgb(var(--brand-bg)/0.049) 16%, rgb(var(--brand-bg)/0.108) 24%, rgb(var(--brand-bg)/0.194) 32%, rgb(var(--brand-bg)/0.306) 40%, rgb(var(--brand-bg)/0.440) 49%, rgb(var(--brand-bg)/0.581) 58%, rgb(var(--brand-bg)/0.717) 67%, rgb(var(--brand-bg)/0.837) 76%, rgb(var(--brand-bg)/0.931) 85%, rgb(var(--brand-bg)/0.982) 93%, rgb(var(--brand-bg)) 100%)",
          }}
        />
      </div>

      {/* Plans */}
       <section id="plans" className="bg-brand-bg py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-brand-bg via-brand-bg/90 to-brand-bg" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-7xl mx-auto mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight mb-2 sm:mb-4">
                {DETAILS.choosePlanTitle} <span className="bg-linear-to-r from-brand-text via-brand-accent-soft to-brand-accent bg-clip-text text-transparent">{DETAILS.choosePlanHighlight}</span>
              </h2>
              <p className="text-brand-muted text-base mt-0.5 max-w-lg">
                Et commodo pharetra integer feugiat lacus et arcu feugiat ut consequat.
              </p>
            </div>

            {config.planTypes.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {config.planTypes.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setSelectedPlanType(pt.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                      selectedPlanType === pt.id
                        ? "border-brand-accent text-brand-text bg-transparent"
                        : "border-brand-border text-brand-muted hover:border-brand-border bg-transparent"
                    }`}
                  >
                    {pt.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {currentPlans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
              {currentPlans.map((plan, i) => (
                <motion.div
                  key={`${selectedPlanType}-${plan.id}`}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", damping: 20, stiffness: 100, delay: i * 0.1 }}
                >
                  <PlanCard plan={plan} popular={i === 1} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-brand-muted text-sm">No plans available for this server type.</p>
              <p className="text-brand-muted text-sm mt-1">Try selecting a different plan type above.</p>
            </div>
          )}
        </div>
      </section>

      {/* Included with every plan - matches VPS Features styling */}
       <section className="relative py-24 sm:py-32 bg-brand-bg">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
              {DETAILS.includedTitle}{" "}
              <span className="bg-linear-to-r from-brand-text via-brand-accent-soft to-brand-accent bg-clip-text text-transparent">
                {DETAILS.includedHighlight}
              </span>
            </h2>
            <p className="mt-3 text-brand-muted text-base max-w-xl mx-auto leading-relaxed">
              {DETAILS.includedDescription}
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INCLUDED.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-md border border-brand-border bg-brand-surface/60 px-5 py-5 transition-colors duration-200 hover:border-brand-border/80 hover:bg-brand-surface/80"
              >
                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-9 h-9 rounded-lg bg-brand-surface/50 border border-brand-border flex items-center justify-center text-brand-accent-light">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-brand-text tracking-wide">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-brand-muted text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <GameFAQ game={currentGame} />

      {/* CTA - matches VPS CTA styling */}
      <motion.section
        className="py-16 sm:py-24 px-6 bg-brand-bg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="relative rounded-md bg-brand-surface/60 border border-brand-border px-6 py-10 sm:px-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Left side - Text */}
            <div className="flex-1">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text tracking-tight">
                {DETAILS.ctaTitle}{" "}
                <span className="bg-linear-to-r from-brand-text via-brand-accent-soft to-brand-accent bg-clip-text text-transparent">
                  {fmt(DETAILS.ctaHighlight, { game: currentGame.name })}
                </span>
                ?
              </h2>

              {/* Subtitle */}
<p className="mt-2 text-brand-muted text-base sm:text-lg">
                {DETAILS.ctaDescription}
</p>
            </div>

            {/* Right side - Button */}
            <div className="shrink-0">
              <a href="#plans">
                <motion.button
                  className="bg-brand-primary hover:bg-brand-primary-hover text-brand-strong font-medium text-base px-8 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Plans
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}