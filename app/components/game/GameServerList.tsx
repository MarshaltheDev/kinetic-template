/**
 * Searchable grid of games on /game-hosting. Data: config/games.json. Text: config/text.json -> pages.games.list.
 * Banner image: config/games.json (each game's "banner"). Shows a "coming soon" message if showComingSoon is true.
 * Used by: GameServerListWrapper.tsx
 */

"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import gamesConfig from "@config/games.json"
import { PAGES } from "@config/site"
import type { GamesConfig, Game } from "../../types/games"

const config = gamesConfig as GamesConfig
const SHOW_COMING_SOON = config.showComingSoon


export default function GameServerList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("all")

  const filteredAndSortedGames = useMemo(() => {
    const filtered = config.games.filter(game =>
      (!game.hidden) &&
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    if (sortBy === "popular") {
      return filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.name.localeCompare(b.name)
      })
    }
    return filtered.sort((a, b) => a.name.localeCompare(b.name))
  }, [searchTerm, sortBy])

  return (
    <section id="games" className="relative bg-brand-bg pt-0 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight mb-4">
              {PAGES.games.list.title} <span className="text-brand-text">{PAGES.games.list.highlight}</span>
            </h2>
            <p className="text-brand-muted text-base mt-0.5 max-w-2xl">
              {PAGES.games.list.description}
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3 mb-6 pb-5 border-b border-brand-border">
          {/* Filter pills */}
          <div className="flex items-center gap-2">
            {([['all', 'View All'], ['popular', 'Popular']] as const).map(([value, label]) => (
              <button
                key={value}
                onClick={() => setSortBy(value)}
                className={`h-8 px-4 rounded-lg text-sm font-medium border transition-all duration-150 ${
                  sortBy === value
                    ? 'bg-brand-primary border-brand-accent text-brand-strong'
                    : 'bg-brand-surface/60 border-brand-border text-brand-text hover:bg-brand-surface/60 hover:border-brand-border'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-muted" />
            <input
              type="text"
              placeholder={PAGES.games.list.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              suppressHydrationWarning
              className="h-8 w-64 pl-8 pr-3 rounded-lg bg-brand-surface/60 border border-brand-border text-brand-text placeholder:text-brand-placeholder text-sm focus:outline-hidden focus:border-brand-border transition-colors duration-150"
            />
          </div>
        </div>

        {/* Grid */}
        {SHOW_COMING_SOON ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <h3 className="text-5xl font-semibold text-brand-text mb-4">
              {PAGES.games.list.comingSoonTitle}
            </h3>
            <p className="text-brand-muted text-sm max-w-md">
              {PAGES.games.list.comingSoonDescription}
            </p>
          </div>
        ) : filteredAndSortedGames.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-14 h-14 rounded-full bg-brand-surface/60 border border-brand-border flex items-center justify-center mb-4">
              <Search className="w-5 h-5 text-brand-muted" />
            </div>
            <p className="text-brand-text font-medium text-sm mb-1">No games found</p>
            <p className="text-brand-muted text-xs">Try a different search term or filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filteredAndSortedGames.map((game: Game) => (
              <Link
                key={game.id}
                href={`/game-hosting/${game.id}`}
                className="group relative flex flex-col gap-2"
              >
                {/* Image */}
                 <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl border border-brand-border group-hover:border-brand-accent transition-colors duration-150">
                  <Image
                    src={game.banner}
                    alt={game.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                    className="object-cover"
                    quality={80}
                    loading="lazy"
                  />
                  {/* Scrim */}
                  <div className="absolute inset-0 bg-linear-to-t from-brand-bg/50 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1.5 px-1 pb-1">
                  <p className="text-brand-text font-medium text-sm leading-snug line-clamp-1">
                    {game.name}
                  </p>
                  <p className="text-brand-muted text-sm leading-none">
                    Starting at{' '}
                    <span className="text-brand-text font-medium">{game.startingAt}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}