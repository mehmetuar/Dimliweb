"use client";

import { m } from "framer-motion";
import { staggerItem } from "./transitions";

/**
 * Stagger içinde tek bir öğe. Parent'ın "hidden"/"visible" orkestrasyonunu miras alır;
 * kendi whileInView'ı yoktur.
 */
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <m.div className={className} variants={staggerItem}>
      {children}
    </m.div>
  );
}
