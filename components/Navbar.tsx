"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-pitch/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-28">

        <Link href="/" className="flex items-center">
          <Image src="/icon.png" alt="Dimli" width={108} height={108} className="rounded-2xl object-contain" />
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
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menüyü aç"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden bg-pitch-surface border-t border-slate-800 px-6 py-6 flex flex-col gap-5">
          <Link href="/#ozellikler" className="text-slate-300 hover:text-white text-lg font-semibold" onClick={() => setOpen(false)}>
            Özellikler
          </Link>
          <Link href="/#nasil-calisir" className="text-slate-300 hover:text-white text-lg font-semibold" onClick={() => setOpen(false)}>
            Nasıl Çalışır?
          </Link>
          <Link href="/iletisim" className="text-slate-300 hover:text-white text-lg font-semibold" onClick={() => setOpen(false)}>
            İletişim
          </Link>
          <Link href="/kvkk" className="text-slate-300 hover:text-white text-lg font-semibold" onClick={() => setOpen(false)}>
            KVKK
          </Link>
          <Link
            href="/is-ortagi"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-400 text-lg font-bold"
            onClick={() => setOpen(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Dimli İş Ortağı
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-turf-600 to-turf-500 text-white text-lg font-bold"
            onClick={() => setOpen(false)}
          >
            İletişim
          </Link>
        </div>
      )}
    </nav>
  );
}
