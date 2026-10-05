/**
 * Top navigation bar shown on every page, including the dropdown menus and the mobile menu.
 * Labels and links: config/text.json -> navbar. Game dropdown: config/games.json.
 * Discord link: config/config.json -> urls. Logo: config/images.json. Used by: every page.
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Gamepad2, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import gamesConfig from "@config/games.json";
import { BRAND, IMAGES, NAVBAR, URLS } from "@config/site";
import { getIcon } from "@/lib/icons";

const gamesShowComingSoon = (gamesConfig as { showComingSoon?: boolean; planTypes?: unknown[]; locations?: unknown[]; games?: unknown[] }).showComingSoon;

// Game hosting dropdown data - derived from config, filtering hidden games
const gameHostingDropdown = (gamesConfig as { games?: Array<{ id: string; name: string; banner: string; hidden?: boolean }> }).games
  ?.filter((game) => !game.hidden)
  .slice(0, 8)
  .map((game) => ({
    id: game.id,
    name: game.name,
    subtitle: "",
    banner: game.banner,
    href: `/game-hosting/${game.id}`,
  })) ?? [];

const LABELS = NAVBAR.links as typeof NAVBAR.links & { other?: string };

// Dropdown links come from config/text.json -> navbar
const otherLinks = NAVBAR.other.map((l) => ({ ...l, description: "", icon: getIcon(l.icon) }));
const otherHostingLinks = NAVBAR.otherHostingLinks.map((l) => ({ ...l, icon: getIcon(l.icon) }));
const loginLinks = NAVBAR.loginLinks.map((l) => ({ ...l, icon: getIcon(l.icon) }));

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [otherOpen, setotherOpen] = useState(false);
  const [otherOpenByClick, setotherOpenByClick] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginOpenByClick, setLoginOpenByClick] = useState(false);
  const [gameHostingOpen, setGameHostingOpen] = useState(false);
  const [gameHostingOpenByClick, setGameHostingOpenByClick] = useState(false);
  const [, setOtherHostingOpen] = useState(false);
  const [otherHostingOpenByClick, setOtherHostingOpenByClick] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'other' | 'login' | 'gameHosting' | 'otherHosting' | null>(null);
  const closeTimeout = useRef<number | null>(null);
  const otherRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  const gameHostingRef = useRef<HTMLDivElement>(null);
  const otherHostingRef = useRef<HTMLDivElement>(null);
  const loginCloseTimeout = useRef<number | null>(null);

  const closeAllDropdowns = useCallback(() => {
    setotherOpen(false);
    setotherOpenByClick(false);
    setLoginOpen(false);
    setLoginOpenByClick(false);
    setGameHostingOpen(false);
    setGameHostingOpenByClick(false);
    setOtherHostingOpen(false);
    setOtherHostingOpenByClick(false);
    setActiveDropdown(null);
  }, []);

  const openDropdown = useCallback((dropdown: 'other' | 'login' | 'gameHosting' | 'otherHosting') => {
    if (activeDropdown === dropdown) return;

    // Immediately close the other dropdowns
    if (dropdown === 'other') {
      setLoginOpen(false);
      setLoginOpenByClick(false);
      setGameHostingOpen(false);
      setGameHostingOpenByClick(false);
      setOtherHostingOpen(false);
      setOtherHostingOpenByClick(false);
      setotherOpen(true);
      setActiveDropdown('other');
    } else if (dropdown === 'login') {
      setotherOpen(false);
      setotherOpenByClick(false);
      setGameHostingOpen(false);
      setGameHostingOpenByClick(false);
      setOtherHostingOpen(false);
      setOtherHostingOpenByClick(false);
      setLoginOpen(true);
      setActiveDropdown('login');
    } else if (dropdown === 'gameHosting') {
      setotherOpen(false);
      setotherOpenByClick(false);
      setLoginOpen(false);
      setLoginOpenByClick(false);
      setOtherHostingOpen(false);
      setOtherHostingOpenByClick(false);
      setGameHostingOpen(true);
      setActiveDropdown('gameHosting');
    } else {
      setotherOpen(false);
      setotherOpenByClick(false);
      setLoginOpen(false);
      setLoginOpenByClick(false);
      setGameHostingOpen(false);
      setGameHostingOpenByClick(false);
      setOtherHostingOpen(true);
      setActiveDropdown('otherHosting');
    }
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: 'other' | 'login' | 'gameHosting' | 'otherHosting') => {
    if (activeDropdown === dropdown) {
      closeAllDropdowns();
    } else {
      openDropdown(dropdown);
    }
  };

  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeout.current = window.setTimeout(() => {
      if (!otherOpenByClick && !gameHostingOpenByClick && !otherHostingOpenByClick) {
        setotherOpen(false);
        setGameHostingOpen(false);
        setOtherHostingOpen(false);
        setotherOpenByClick(false);
        setGameHostingOpenByClick(false);
        setOtherHostingOpenByClick(false);
        setActiveDropdown((prev) => (prev === 'other' || prev === 'gameHosting' || prev === 'otherHosting') ? null : prev);
      }
      closeTimeout.current = null;
    }, 300);
  };

  const clearLoginCloseTimeout = () => {
    if (loginCloseTimeout.current) {
      window.clearTimeout(loginCloseTimeout.current);
      loginCloseTimeout.current = null;
    }
  };

  const scheduleLoginClose = () => {
    clearLoginCloseTimeout();
    loginCloseTimeout.current = window.setTimeout(() => {
      if (!loginOpenByClick) {
        setLoginOpen(false);
        setActiveDropdown((prev) => prev === 'login' ? null : prev);
      }
      loginCloseTimeout.current = null;
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // Check initial scroll position immediately on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close other dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (otherRef.current && !otherRef.current.contains(event.target as Node)) {
        setotherOpen(false);
        setotherOpenByClick(false);
        setActiveDropdown((prev) => prev === 'other' ? null : prev);
      }
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginOpen(false);
        setLoginOpenByClick(false);
        setActiveDropdown((prev) => prev === 'login' ? null : prev);
      }
      if (gameHostingRef.current && !gameHostingRef.current.contains(event.target as Node)) {
        setGameHostingOpen(false);
        setGameHostingOpenByClick(false);
        setActiveDropdown((prev) => prev === 'gameHosting' ? null : prev);
      }
      if (otherHostingRef.current && !otherHostingRef.current.contains(event.target as Node)) {
        setOtherHostingOpen(false);
        setOtherHostingOpenByClick(false);
        setActiveDropdown((prev) => prev === 'otherHosting' ? null : prev);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearCloseTimeout();
      clearLoginCloseTimeout();
    };
  }, []);

  return (
<motion.header
  className={cn(
    "fixed inset-x-0 top-0 z-300",
    scrolled
      ? "bg-transparent backdrop-blur-xs"
      : "bg-transparent backdrop-blur-none"
  )}
  style={{
    transitionProperty: 'backdrop-filter, -webkit-backdrop-filter',
    transitionDuration: '500ms',
    transitionTimingFunction: 'cubic-bezier(0.22,0.61,0.36,1)'
  }}
  initial={{ y: 0, opacity: 1 }}
  animate={{ y: 0, opacity: 1 }}
>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Image
              src={IMAGES.logo}
              alt={BRAND.name}
              width={32}
              height={32}
              className="transition-opacity group-hover:opacity-80"
            />
            <span className="text-[18px] font-bold tracking-tight text-brand-text transition-opacity group-hover:opacity-80">
              {NAVBAR.brandText}
            </span>
          </Link>

          {/* Nav links and login button with consistent spacing */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            {/* VPS link */}
            <Link
              href="/vps-hosting"
              className={cn(
                "flex items-center gap-0.5 px-3 py-2 text-[13px] font-medium whitespace-nowrap rounded transition-opacity",
                pathname === "/vps-hosting" || pathname?.startsWith("/vps-hosting")
                  ? "text-brand-text"
                  : "text-brand-text hover:opacity-80"
              )}
            >
              {LABELS.vps}
            </Link>

            {/* Game Hosting link with dropdown */}
            <div
              ref={gameHostingRef}
              className="relative"
              onMouseEnter={() => {
                clearCloseTimeout();
                openDropdown('gameHosting');
              }}
              onMouseLeave={() => {
                scheduleClose();
              }}
            >
              <Link
                href="/game-hosting"
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-[13px] font-medium whitespace-nowrap rounded transition-opacity",
                  pathname === "/game-hosting"
                    ? "text-brand-text"
                    : "text-brand-text hover:opacity-80"
                )}
              >
                <span>{LABELS.games}</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    gameHostingOpen && "rotate-180"
                  )}
                />
              </Link>

              {/* Game Hosting dropdown panel (hidden when coming soon) */}
              {!gamesShowComingSoon && (
                <AnimatePresence>
                  {gameHostingOpen && (
                  <>
                    {/* Backdrop overlay (only for click-open) */}
                    {gameHostingOpenByClick && (
                      <motion.div
                        className="fixed inset-0 z-310"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => {
                          setGameHostingOpen(false);
                          setGameHostingOpenByClick(false);
                        }}
                      />
                    )}
                    <motion.div
                      className="absolute top-full left-1/2 mt-2 z-320"
                      onMouseEnter={() => clearCloseTimeout()}
                      onMouseLeave={() => scheduleClose()}
                      initial={{ opacity: 0, x: '-50%', y: -12, scale: 0.92 }}
                      animate={{ opacity: 1, x: '-50%', y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: '-50%', y: -12, scale: 0.92 }}
                      transition={{
                        type: "spring",
                        duration: 0.35,
                        bounce: 0.15
                      }}
                    >
                      <div className="bg-brand-surface-alt/95 backdrop-blur-xs border border-brand-border rounded-lg shadow-xl shadow-brand-bg/40 p-4 w-[620px]">
                        {/* Game grid */}
                        <div className="grid grid-cols-3 gap-1.5">
                          {gameHostingDropdown.map((game) => (
                            <Link
                              key={game.id}
                              href={game.href}
                              className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg border border-brand-border bg-brand-surface/60 transition-all duration-150 hover:border-brand-border hover:bg-brand-surface/60 group"
                              onClick={() => setGameHostingOpen(false)}
                            >
                              <div
                                className="shrink-0 w-[72px] h-[36px] rounded-md overflow-hidden relative"
                              >
                                {game.banner ? (
                                  <Image
                                    src={game.banner}
                                    alt={game.name}
                                    fill
                                    sizes="72px"
                                    className="w-full h-full object-cover object-center"
                                    priority={false}
                                  />
                                ) : (
                                  <Gamepad2 size={24} />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[12px] font-semibold text-brand-text transition-colors group-hover:text-brand-strong truncate">
                                  {game.name}
                                </p>
                                <p className="text-[10px] text-brand-muted truncate group-hover:text-brand-muted">
                                  {game.subtitle}
                                </p>
                              </div>
                            </Link>
                          ))}
                          {/* View More link */}
                          <Link
                            href="/game-hosting"
                            className="flex items-center justify-center gap-2 px-2.5 py-2 rounded-lg border border-brand-border bg-brand-surface/60 transition-all duration-150 hover:border-brand-border hover:bg-brand-surface/60 group"
                            onClick={() => setGameHostingOpen(false)}
                          >
                            <ExternalLink size={16} className="text-brand-muted group-hover:text-brand-muted transition-colors" />
                            <span className="text-[12px] font-semibold text-brand-muted group-hover:text-brand-strong transition-colors">
                              View All Games
                            </span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
              )}
            </div>

            {/* other button with dropdown */}
            <div
              ref={otherRef}
              className="relative"
              onMouseEnter={() => {
                clearCloseTimeout();
                openDropdown('other');
              }}
              onMouseLeave={() => {
                scheduleClose();
              }}
            >
              <button
                onClick={() => toggleDropdown('other')}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium whitespace-nowrap rounded transition-opacity",
                  otherOpen
                    ? "text-brand-text"
                    : "text-brand-text hover:opacity-80"
                )}
              >
                {LABELS.other}
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    otherOpen && "rotate-180"
                  )}
                />
              </button>

              {/* other dropdown panel */}
              <AnimatePresence>
                {otherOpen && (
                  <>
                    {/* Backdrop overlay (only for click-open) */}
                    {otherOpenByClick && (
                      <motion.div
                        className="fixed inset-0 z-310"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => {
                          setotherOpen(false);
                          setotherOpenByClick(false);
                        }}
                      />
                    )}
                    <motion.div
                      className="absolute top-full left-1/2 mt-2 z-320"
                      onMouseEnter={() => clearCloseTimeout()}
                      onMouseLeave={() => scheduleClose()}
                      initial={{ opacity: 0, x: '-50%', y: -12, scale: 0.92 }}
                      animate={{ opacity: 1, x: '-50%', y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: '-50%', y: -12, scale: 0.92 }}
                      transition={{
                        type: "spring",
                        duration: 0.35,
                        bounce: 0.15
                      }}
                    >
                      <div className="bg-brand-surface-alt/95 backdrop-blur-xs border border-brand-border rounded-lg shadow-xl shadow-brand-bg/40 p-1 w-56">
                        <div className="flex flex-col gap-0.5">
                          {otherLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors duration-150 group hover:bg-brand-surface/60"
                              onClick={() => setotherOpen(false)}
                            >
                              <div className={cn(
                                "shrink-0 w-6 h-6 flex items-center justify-center rounded-md transition-colors",
                                "bg-brand-surface/60 text-brand-muted group-hover:bg-brand-surface/50 group-hover:text-brand-muted"
                              )}>
                                <link.icon size={14} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[12px] font-medium text-brand-text transition-colors group-hover:text-brand-strong">
                                  {link.label}
                                </p>
                                <p className="text-[11px] text-brand-muted transition-colors truncate group-hover:text-brand-muted">
                                  {link.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Login dropdown */}
            <div
              ref={loginRef}
              className="relative"
              onMouseEnter={() => {
                clearLoginCloseTimeout();
                openDropdown('login');
              }}
              onMouseLeave={() => {
                scheduleLoginClose();
              }}
            >
              <button
                onClick={() => toggleDropdown('login')}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium whitespace-nowrap rounded transition-opacity",
                  loginOpen
                    ? "text-brand-text"
                    : "text-brand-text hover:opacity-80"
                )}
              >
                Panels
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    loginOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Login dropdown panel */}
              <AnimatePresence>
                {loginOpen && (
                  <>
                    {/* Backdrop overlay (only for click-open) */}
                    {loginOpenByClick && (
                      <motion.div
                        className="fixed inset-0 z-310"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => {
                          setLoginOpen(false);
                          setLoginOpenByClick(false);
                        }}
                      />
                    )}
                    <motion.div
                      className="absolute top-full left-1/2 mt-2 z-320"
                      onMouseEnter={() => clearLoginCloseTimeout()}
                      onMouseLeave={() => scheduleLoginClose()}
                      initial={{ opacity: 0, x: '-50%', y: -12, scale: 0.92 }}
                      animate={{ opacity: 1, x: '-50%', y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: '-50%', y: -12, scale: 0.92 }}
                      transition={{
                        type: "spring",
                        duration: 0.35,
                        bounce: 0.15
                      }}
                    >
                      <div className="bg-brand-surface-alt/95 backdrop-blur-xs border border-brand-border rounded-lg shadow-xl shadow-brand-bg/40 p-1 w-56">
                        <div className="flex flex-col gap-0.5">
                          {loginLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors duration-150 group"
                              onClick={() => setLoginOpen(false)}
                            >
                              <div className={cn(
                                "shrink-0 w-6 h-6 flex items-center justify-center rounded-md transition-colors",
                                "bg-brand-surface/60 text-brand-muted group-hover:bg-brand-surface/50 group-hover:text-brand-muted"
                              )}>
                                <link.icon size={14} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[12px] font-medium text-brand-text transition-colors group-hover:text-brand-strong">
                                  {link.label}
                                </p>
                                <p className="text-[11px] text-brand-muted transition-colors truncate group-hover:text-brand-muted">
                                  {link.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Discord icon button */}
            <Link
              href={URLS.discord}
              target="_blank"
                className="flex items-center justify-center w-9 h-9 rounded text-brand-text hover:opacity-80 transition-opacity"
                aria-label="Join us on Discord"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2765-3.6807-.2765-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2934a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0845-2.1569-2.4187 0-1.3342.9555-2.4187 2.157-2.4187 1.2108 0 2.1757 1.0952 2.1568 2.4187 0 1.3342-.9555 2.4187-2.1569 2.4187zm7.9748 0c-1.1825 0-2.1569-1.0845-2.1569-2.4187 0-1.3342.9554-2.4187 2.1569-2.4187 1.2108 0 2.1757 1.0952 2.1568 2.4187 0 1.3342-.946 2.4187-2.1568 2.4187z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-brand-text hover:text-brand-strong transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-brand-bg border-t border-brand-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {/* VPS link */}
              <Link
                href="/vps-hosting"
                className="flex items-center text-brand-text py-2 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {LABELS.vps}
              </Link>
              {/* Game Hosting link */}
              <Link
                href="/game-hosting"
                className="flex items-center text-brand-text py-2 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <Gamepad2 size={14} className="mr-2" />
                {LABELS.games}
              </Link>
              {/* Other Hosting links */}
              {otherHostingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center text-brand-text py-2 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon size={14} className="mr-2" />
                  {link.label}
                </Link>
              ))}
              {/* Quick game links */}
              <div className="py-2 border-t border-brand-border">
                <p className="text-xs text-brand-muted px-2 mb-2">{LABELS.popularGames}</p>
                <div className="grid grid-cols-2 gap-1">
                  {gameHostingDropdown.slice(0, 4).map((game) => (
                    <Link
                      key={game.id}
                      href={game.href}
                      className="flex items-center gap-2 px-2 py-1.5 text-sm text-brand-muted hover:text-brand-strong hover:bg-brand-surface/60 rounded transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="truncate">{game.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="py-2 border-t border-brand-border">
<p className="text-xs text-brand-muted px-2 mb-2">{LABELS.resources}</p>
                {otherLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center text-brand-text py-2 text-sm font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}