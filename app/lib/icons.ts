/**
 * Maps icon names written in config/text.json (for example "Server") to Lucide icon components.
 * To use a new icon in the config, import it here and add it to the list.
 * Used by: Navbar, the Features components and GameDetails.
 */

import {
  BookOpen,
  Bot,
  Clock,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Gamepad2,
  Globe,
  HardDrive,
  Headphones,
  Hexagon,
  Lock,
  MessageCircle,
  Monitor,
  Package,
  Server,
  Shield,
  ShieldCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Icons that can be referenced by name from config/text.json ("icon": "Server").
// To use another Lucide icon, import it here and add it to the map.
const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Bot,
  Clock,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Gamepad2,
  Globe,
  HardDrive,
  Headphones,
  Hexagon,
  Lock,
  MessageCircle,
  Monitor,
  Package,
  Server,
  Shield,
  ShieldCheck,
  Users,
  Zap,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Server;
}
