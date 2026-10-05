/**
 * TypeScript types for config/vps.json (VPS plans and categories). Used by: app/vps-hosting/page.tsx
 */

export interface VPSPlan {
  id: string;
  name: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  price: number;
  orderLink: string;
  featured?: boolean;
  hidden?: boolean;
}

export interface VPSCategory {
  id: string;
  name: string;
  description: string;
  plans: VPSPlan[];
}

export interface VPSConfig {
  showComingSoon?: boolean;
  planCategories: VPSCategory[];
}
