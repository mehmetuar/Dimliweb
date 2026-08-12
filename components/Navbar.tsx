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
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";

const NAV_ITEMS: NavItem[] = [
  { label: "Özellikler", href: "/ozellikler" },
  { label: "Nasıl Çalışır?", href: "/#nasil-calisir" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
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
            ? "bg-pitch/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/30"
            : "bg-gradient-to-b from-pitch-deep/90 via-pitch-deep/40 to-transparent border-b border-transparent"
        }`}
      >
        {scrolled && <NavAtmosphere theme="turf" />}

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 md:h-20" : "h-16 md:h-28"
          }`}
        >
          <Link href="/" className="flex items-center" aria-label="Dimli ana sayfa">
            <LogoBall theme="turf" scrolled={scrolled} />
          </Link>

          {/* Desktop nav links */}
          <ScoreboardLinks theme="turf" items={NAV_ITEMS} />

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/is-ortagi"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-400 text-sm font-bold hover:bg-ember-500/20 hover:border-ember-500/50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Dimli İş Ortağı
            </Link>
            <KickoffButton>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-turf-600 to-turf-500 text-white text-base font-bold hover:from-turf-500 hover:to-turf-400 transition-all shadow-neon-sm"
              >
                İletişim
              </Link>
            </KickoffButton>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/60 transition-all"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="relative z-10 md:hidden animate-menu-in bg-pitch-surface border-t border-slate-800 px-5 py-5 flex flex-col"
            style={{ paddingBottom: "max(20px, env(safe-area-inset-bottom))" }}
          >
            {/* Nav links */}
            <div className="flex flex-col">
              {[
                { label: "Özellikler", href: "/ozellikler" },
                { label: "Nasıl Çalışır?", href: "/#nasil-calisir" },
                { label: "Hakkımızda", href: "/hakkimizda" },
                { label: "İndir", href: "/indir" },
                { label: "İletişim", href: "/iletisim" },
              ].map((item, i, arr) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 py-3.5 text-slate-300 hover:text-white text-base font-semibold transition-colors ${
                    i < arr.length - 1 ? "border-b border-slate-800/60" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-turf-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-turf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-700/60 my-4" />

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              <Link
                href="/is-ortagi"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-400 text-sm font-bold hover:bg-ember-500/20 transition-all"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Dimli İş Ortağı
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-gradient-to-r from-turf-600 to-turf-500 text-white text-sm font-bold shadow-neon-sm"
                onClick={() => setOpen(false)}
              >
                İletişim
              </Link>
            </div>

            <div className="border-t border-slate-700/60 my-4" />

            {/* App download */}
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-3">Uygulamayı İndir</p>
              <div className="flex flex-col gap-2.5">
                <AppStoreBadge className="!justify-start !py-3" />
                <GooglePlayBadge className="!justify-start !py-3" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
