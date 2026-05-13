"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BusinessNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-pitch/80 backdrop-blur-md border-b border-ember-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-28">

        <Link href="/" className="flex items-center">
          <Image src="/icon.png" alt="Dimli" width={108} height={108} className="rounded-2xl object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#ozellikler" className="text-slate-300 hover:text-ember-400 text-base font-semibold transition-colors">
            Özellikler
          </Link>
          <Link href="#fiyatlandirma" className="text-slate-300 hover:text-ember-400 text-base font-semibold transition-colors">
            Fiyatlandırma
          </Link>
          <Link href="#nasil-baslanir" className="text-slate-300 hover:text-ember-400 text-base font-semibold transition-colors">
            Nasıl Başlanır?
          </Link>
          <Link href="/" className="text-slate-400 hover:text-white text-base font-semibold transition-colors">
            Ana Sayfa
          </Link>
        </div>

        <Link
          href="/iletisim"
          className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-ember-600 to-ember-500 text-white text-base font-bold hover:from-ember-500 hover:to-ember-400 transition-all shadow-neon-ember-sm"
        >
          İletişime Geç
        </Link>

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
        <div className="md:hidden bg-pitch-surface border-t border-ember-500/20 px-6 py-6 flex flex-col gap-5">
          <Link href="#ozellikler" className="text-slate-300 hover:text-ember-400 text-lg font-semibold" onClick={() => setOpen(false)}>
            Özellikler
          </Link>
          <Link href="#fiyatlandirma" className="text-slate-300 hover:text-ember-400 text-lg font-semibold" onClick={() => setOpen(false)}>
            Fiyatlandırma
          </Link>
          <Link href="#nasil-baslanir" className="text-slate-300 hover:text-ember-400 text-lg font-semibold" onClick={() => setOpen(false)}>
            Nasıl Başlanır?
          </Link>
          <Link href="/" className="text-slate-400 hover:text-white text-lg font-semibold" onClick={() => setOpen(false)}>
            ← Ana Sayfaya Dön
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-ember-600 to-ember-500 text-white text-lg font-bold"
            onClick={() => setOpen(false)}
          >
            İletişime Geç
          </Link>
        </div>
      )}
    </nav>
  );
}
