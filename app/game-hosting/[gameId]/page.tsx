/**
 * Game detail page (/game-hosting/<game id>). One static page is built for every game in config/games.json.
 * SEO: config/seo.json -> game. Shows the 404 page if the id does not exist.
 */

import type { Metadata } from "next";
import GameDetails from "../../components/game/GameDetails";
import { CONFIG, getGamesConfig, getGameMetadata } from "@config/site";
import { notFound } from "next/navigation";

type Game = Awaited<ReturnType<typeof getGamesConfig>>["games"][number];

export async function generateStaticParams() {
  const config = await getGamesConfig();
  return config.games.map((game) => ({ gameId: game.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gameId: string }>;
}): Promise<Metadata> {
  const { gameId } = await params;
  const config = await getGamesConfig();
  const game = config.games.find((g: Game) => g.id === gameId);

  if (!game) {
    return {
      title: CONFIG.seo.game.notFoundTitle,
      description: CONFIG.seo.game.notFoundDescription,
      robots: { index: false, follow: false },
    };
  }

  // Title, description, keywords and OG images are built from config/seo.json -> game
  return getGameMetadata(game);
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;
  const config = await getGamesConfig();
  const game = config.games.find((g: Game) => g.id === gameId);

  if (!game) {
    notFound();
  }

  return <GameDetails gameId={gameId} />;
}
