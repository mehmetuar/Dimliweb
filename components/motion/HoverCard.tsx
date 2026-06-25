"use client";

import { m } from "framer-motion";
import { SPRING_SOFT } from "./transitions";

/**
 * Hover'da spring fiziğiyle yukarı kalkan kart sarmalayıcı.
 * NOT: Sarmalanan kartın Tailwind `hover:-translate-y-*` sınıfı kaldırılmalı (çakışan transform).
 * Stagger girişiyle birlikte kullanılırken <StaggerItem><HoverCard className="kart...">...
 */
interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  lift?: number;
}

export default function HoverCard({ children, className, lift = 6 }: HoverCardProps) {
  return (
    <m.div
      className={className}
      whileHover={{ y: -lift }}
      whileTap={{ scale: 0.985 }}
      transition={SPRING_SOFT}
    >
      {children}
    </m.div>
  );
}
