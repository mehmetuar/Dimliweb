import type { Variants, Transition, SpringOptions } from "framer-motion";

/**
 * Paylaşılan easing ve variant sabitleri.
 * Tüm motion primitive'leri buradan beslenir ki animasyon dili tutarlı kalsın.
 * (Bu dosya "use client" İÇERMEZ — sadece veri; hem server hem client import edebilir.)
 */

// Mevcut tailwind slide-up cubic-bezier'i ile birebir aynı his.
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.9,
};

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

/** useSpring() için sade spring ayarları (Transition değil — `type` alanı içermez). */
export const SPRING_SNAPPY_OPTS: SpringOptions = {
  stiffness: 400,
  damping: 30,
};

/** useSpring() için yumuşak varyant (SPRING_SOFT'un SpringOptions karşılığı). */
export const SPRING_SOFT_OPTS: SpringOptions = {
  stiffness: 260,
  damping: 28,
  mass: 0.9,
};

/** Scroll-reveal: opacity + hafif yukarı kayma. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

/** Stagger container — çocukları sırayla açar. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0.05): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Stagger item — parent'ın "visible" anahtarını miras alır. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

/** Hero metni için sade opacity-öncelikli giriş. */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

/** Telefon mockup'ları için: cihaz hissi veren yumuşak/ağır spring (Phone3D tilt). */
export const SPRING_DEVICE: SpringOptions = { stiffness: 150, damping: 18, mass: 0.6 };

/**
 * Telefon "kapı gibi açılma" girişi — rotateY ile. `custom={index}` ile kademeli gecikme.
 * Reduced-motion'da Phone3D bunun yerine sade opacity+y varyantı kullanır.
 */
export const deviceEnterVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateY: -22, scale: 0.94 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT, delay: i * 0.12 },
  }),
};

