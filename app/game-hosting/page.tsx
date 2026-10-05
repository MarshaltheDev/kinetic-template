/**
 * Game hosting page (/game-hosting). SEO: config/seo.json -> pages["/game-hosting"].
 * The page itself is built in GameClient.tsx.
 */

import type { Metadata } from "next";
import { PAGE_META } from "@config/site";
import GameClient from "./GameClient";

export const metadata: Metadata = PAGE_META["/game-hosting"];

export default function GamesPage() {
  return <GameClient />;
}
