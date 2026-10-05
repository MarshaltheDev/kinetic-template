/**
 * TypeScript types for config/games.json (games, plans, locations).
 * Used by: GameServerList, GameDetails and config/site.ts.
 */

import { GamePlanType } from "./common";

export type PlanType = GamePlanType;

export interface GamePlan {
  id: string;
  name: string;
  type: "budget" | "premium";
  ram: string;
  cpu: string;
  storage: string;
  price: number;
  orderLink: string;
}

export interface Game {
  id: string;
  name: string;
  description: string;
  /** Square-ish logo shown on the game page. Path inside public/, e.g. /games/logo/logo.png */
  logo: string;
  /** Card image used in the game list and navbar dropdown, also the social share image. */
  banner: string;
  /** Wide background image at the top of the game page. */
  hero: string;
  featured: boolean;
  officialPartner?: boolean;
  platforms?: ("pc" | "mobile" | "console")[];
  startingAt: string;
  primaryColor: string;
  hidden?: boolean;
  plans: {
    budget?: GamePlan[];
    premium?: GamePlan[];
  };
}

export interface GameLocation {
  id: string;
  name: string;
  flag: string;
  availablePlanTypes: string[];
}

export interface GamesConfig {
  showComingSoon?: boolean;
  planTypes: PlanType[];
  locations: GameLocation[];
  games: Game[];
}