"use client";

import Link from "next/link";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  NavAtmosphere,
  ScoreboardLinks,
  LogoBall,
  KickoffButton,
  type NavItem,
} from "@/components/motion";

const NAV_ITEMS: NavItem[] = [
  { label: "Özellikler", href: "/#ozellikler" },
  { label: "Nasıl Çalışır?", href: "/#nasil-calisir" },
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

      <nav
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "bg-pitch/95 border-slate-800 shadow-lg shadow-black/30"
            : "bg-pitch/85 border-slate-800/80"
        }`}
      >
        <NavAtmosphere theme="turf" />

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
              <Link
                href="/#ozellikler"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-white text-base font-semibold transition-colors border-b border-slate-800/60"
                onClick={() => setOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg bg-turf-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-turf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
                Özellikler
              </Link>
              <Link
                href="/#nasil-calisir"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-white text-base font-semibold transition-colors border-b border-slate-800/60"
                onClick={() => setOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg bg-turf-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-turf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Nasıl Çalışır?
              </Link>
              <Link
                href="/iletisim"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-white text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg bg-turf-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-turf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                İletişim
              </Link>
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
                <a
                  href="https://apps.apple.com/tr/app/dimli/id6764278538?l=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-all"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <div className="text-[10px] text-white/50 leading-none uppercase tracking-wide">Download on the</div>
                    <div className="text-[14px] font-bold leading-tight mt-0.5">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dimli.app&hl=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-white transition-all"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#4285F4"/>
                    <path d="M6.05 2.66L16.81 8.88 14.54 11.15 6.05 2.66Z" fill="#34A853"/>
                    <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5 15.39 12 17.89 9.5 20.16 10.81Z" fill="#EA4335"/>
                    <path d="M16.81 15.12L6.05 21.34 14.54 12.85 16.81 15.12Z" fill="#FBBC04"/>
                  </svg>
                  <div>
                    <div className="text-[10px] text-white/50 leading-none uppercase tracking-wide">Get it on</div>
                    <div className="text-[14px] font-bold leading-tight mt-0.5">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
