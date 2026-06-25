"use client";

import { m } from "framer-motion";
import { EASE_OUT } from "./transitions";

/** Mount anında (scroll beklemeden) opacity + hafif yukarı kayma ile giriş. Hero metni için. */
interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function FadeIn({ children, className, delay = 0, y = 16 }: FadeInProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </m.div>
  );
}
