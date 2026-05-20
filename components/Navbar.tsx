"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-pitch/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav className="fixed top-0 inset-x-0 z-50 bg-pitch/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-28">

          <Link href="/" className="flex items-center">
            <Image
              src="/icon.png"
              alt="Dimli"
              width={108}
              height={108}
              className="w-9 h-9 md:w-[108px] md:h-[108px] rounded-xl md:rounded-2xl object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/#ozellikler" className="text-slate-300 hover:text-white text-base font-semibold transition-colors">
              Özellikler
            </Link>
            <Link href="/#nasil-calisir" className="text-slate-300 hover:text-white text-base font-semibold transition-colors">
              Nasıl Çalışır?
            </Link>
            <Link href="/iletisim" className="text-slate-300 hover:text-white text-base font-semibold transition-colors">
              İletişim
            </Link>
            <Link href="/kvkk" className="text-slate-300 hover:text-white text-base font-semibold transition-colors">
              KVKK
            </Link>
            <Link href="/kullanim-sartlari" className="text-slate-300 hover:text-white text-base font-semibold transition-colors">
              Kullanım Şartları
            </Link>
          </div>

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
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-turf-600 to-turf-500 text-white text-base font-bold hover:from-turf-500 hover:to-turf-400 transition-all shadow-neon-sm"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Menüyü aç"
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
          <div className="md:hidden animate-menu-in bg-pitch-surface border-t border-slate-800 px-5 py-5 flex flex-col">

            {/* Nav links */}
            <div className="flex flex-col">
              <Link
                href="/#ozellikler"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-white text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 text-turf-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
                Özellikler
              </Link>
              <Link
                href="/#nasil-calisir"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-white text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 text-turf-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Nasıl Çalışır?
              </Link>
              <Link
                href="/iletisim"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-white text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 text-turf-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                İletişim
              </Link>
              <Link
                href="/kvkk"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-white text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 text-turf-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                KVKK
              </Link>
              <Link
                href="/kullanim-sartlari"
                className="flex items-center gap-3 py-3.5 text-slate-300 hover:text-white text-base font-semibold transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 text-turf-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Kullanım Şartları
              </Link>
            </div>

            <div className="border-t border-slate-700/60 my-3" />

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

            <div className="border-t border-slate-700/60 my-3" />

            {/* App download */}
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-3">Uygulamayı İndir</p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-black border border-white/10 text-white hover:border-white/20 transition-all"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <div className="text-[9px] text-slate-400 leading-none">Download on the</div>
                    <div className="text-[13px] font-semibold leading-tight">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-black border border-white/10 text-white hover:border-white/20 transition-all"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.65.19.97.07l12.44-7.04-2.65-2.68-10.76 9.65zm-1.14-20.4C2 3.64 2 3.93 2 4.22v15.56c0 .29 0 .58.04.85l10.32-10.4L2.04 3.36zm19.34 8.32l-2.8-1.58-3.03 2.99 3.03 2.99 2.82-1.6c.8-.45.8-1.35-.02-1.8zM4.15.24C3.83.12 3.48.14 3.18.31L13.96 11.1 16.61 8.4 4.15.24z"/>
                  </svg>
                  <div>
                    <div className="text-[9px] text-slate-400 leading-none">GET IT ON</div>
                    <div className="text-[13px] font-semibold leading-tight">Google Play</div>
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
