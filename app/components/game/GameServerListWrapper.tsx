/**
 * Wraps GameServerList in Suspense and shows a loading spinner while it loads.
 * Used by: app/game-hosting/GameClient.tsx
 */

"use client";

import { Suspense } from "react";
import GameServerList from "./GameServerList";

function GameServerListFallback() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-brand-accent" />
    </div>
  );
}

export default function GameServerListWrapper() {
  return (
    <Suspense fallback={<GameServerListFallback />}>
      <GameServerList />
    </Suspense>
  );
}