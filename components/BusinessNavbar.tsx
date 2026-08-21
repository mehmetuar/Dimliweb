"use client";

import Link from "next/link";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  NavAtmosphere,
  ScoreboardLinks,
  KickoffButton,
  LogoBall,
  type NavItem,
} from "@/components/motion";

const NAV_ITEMS: NavItem[] = [
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Fiyatlandırma", href: "#fiyatlandirma" },
  { label: "Nasıl Başlanır?", href: "#nasil-baslanir" },
];

/** Ana sayfadaki turuncu "Dimli İş Ortağı" pill'inin yeşil aynası — oyuncu tarafına dönüş. */
const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

export default function BusinessNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-pitch/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Tepede: şeffaf degrade perde — 3D sahne navbarın altından akarak görünür.
          Scroll'da: opak + blur + border (okunurluk). */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-pitch/95 backdrop-blur-md border-b border-ember-500/30 shadow-lg shadow-black/30"
            : "bg-gradient-to-b from-pitch-deep/90 via-pitch-deep/40 to-transparent border-b border-transparent"
        }`}
      >
        {scrolled && <NavAtmosphere theme="ember" />}

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 md:h-20" : "h-16 md:h-28"
          }`}
        >
          <Link href="/" className="flex items-center" aria-label="Dimli ana sayfa">
            <LogoBall theme="ember" scrolled={scrolled} />
          </Link>

          {/* Desktop nav links */}
          <ScoreboardLinks theme="ember" items={NAV_ITEMS} />

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-bold hover:bg-turf-500/20 hover:border-turf-500/50 transition-all"
            >
              <HomeIcon />
              Ana Sayfa
            </Link>
            <KickoffButton>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-ember-600 to-ember-500 text-white text-base font-bold hover:from-ember-500 hover:to-ember-400 transition-all shadow-neon-ember-sm"
              >
                İletişime Geç
              </Link>
            </KickoffButton>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="relative z-10 md:hidden animate-menu-in bg-pitch-surface border-t border-ember-500/20 px-5 py-5 flex flex-col"
            style={{ paddingBottom: "max(20px, env(safe-area-inset-bottom))" }}
          >
            {/* Nav links */}
            <div className="flex flex-col">
              <Link
                href="#ozellikler"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-ember-400 text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 text-ember-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
                Özellikler
              </Link>
              <Link
                href="#fiyatlandirma"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-ember-400 text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 text-ember-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Fiyatlandırma
              </Link>
              <Link
                href="#nasil-baslanir"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-ember-400 text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 text-ember-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Nasıl Başlanır?
              </Link>
            </div>

            <div className="border-t border-slate-700/60 my-3" />

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-bold hover:bg-turf-500/20 transition-all"
                onClick={() => setOpen(false)}
              >
                <HomeIcon />
                Ana Sayfa
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-gradient-to-r from-ember-600 to-ember-500 text-white text-sm font-bold shadow-neon-ember-sm"
                onClick={() => setOpen(false)}
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
