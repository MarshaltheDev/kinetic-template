/**
 * cn(): helper that merges Tailwind class names. Used by the UI primitives, Navbar and layout.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
