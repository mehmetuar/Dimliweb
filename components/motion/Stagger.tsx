"use client";

import { m } from "framer-motion";
import { staggerContainer } from "./transitions";

/**
 * Çocuklarını (StaggerItem) sırayla açan kapsayıcı.
 * className grid/flex layout'u korur — sarmalanan eleman doğrudan bu div olur.
 */
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
  once?: boolean;
}

export default function Stagger({
  children,
  className,
  stagger = 0.08,
  amount = 0.2,
  once = true,
}: StaggerProps) {
  return (
    <m.div
      className={className}
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </m.div>
  );
}
