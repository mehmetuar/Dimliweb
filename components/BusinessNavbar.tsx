"use client";

import Link from "next/link";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  NavAtmosphere,
  ScoreboardLinks,
  KickoffButton,
  type NavItem,
} from "@/components/motion";

const NAV_ITEMS: NavItem[] = [
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Fiyatlandırma", href: "#fiyatlandirma" },
  { label: "Nasıl Başlanır?", href: "#nasil-baslanir" },
  { label: "Ana Sayfa", href: "/", muted: true },
];

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

      <nav
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "bg-pitch/95 border-ember-500/30 shadow-lg shadow-black/30"
            : "bg-pitch/80 border-ember-500/20"
        }`}
      >
        <NavAtmosphere theme="ember" />

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 md:h-20" : "h-16 md:h-28"
          }`}
        >
          <Link href="/" className="flex items-center" aria-label="Dimli ana sayfa">
            {/* Geçici metin marka — gerçek logo hazır olunca <LogoBall theme="ember" scrolled={scrolled} /> ile değiştir */}
            <span className="text-2xl md:text-3xl font-black tracking-tight text-white">Dimli</span>
          </Link>

          {/* Desktop nav links */}
          <ScoreboardLinks theme="ember" items={NAV_ITEMS} />

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
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
              <Link
                href="/"
                className="flex items-center gap-3 py-3.5 text-slate-400 hover:text-white text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ana Sayfaya Dön
              </Link>
            </div>

            <div className="border-t border-slate-700/60 my-3" />

            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-gradient-to-r from-ember-600 to-ember-500 text-white text-sm font-bold shadow-neon-ember-sm"
              onClick={() => setOpen(false)}
            >
              İletişime Geç
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
