"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "dimli_cookie_consent";

/**
 * Hafif çerez onay banner'ı (framer YOK, sade CSS geçiş). İlk ziyarette görünür;
 * karar localStorage'da saklanır → tekrar çıkmaz. Analytics eklenmediği için
 * işlevsel/zorunlu çerez odaklı; kabul/ret yalnız tercihi kaydeder.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* storage erişilemezse banner gösterme */
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* yok say */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-[max(16px,env(safe-area-inset-bottom))] animate-slide-up"
      role="dialog"
      aria-label="Çerez bilgilendirmesi"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-700/70 bg-pitch-surface/95 backdrop-blur-md shadow-lift p-4 sm:p-5 sm:flex sm:items-center sm:gap-5">
        <p className="text-slate-300 text-sm leading-relaxed flex-1">
          Bu sitede yalnızca sitenin çalışması için gerekli/işlevsel çerezler kullanılır.
          Ayrıntılar için{" "}
          <Link
            href="/cerez-politikasi"
            className="text-turf-400 hover:text-turf-300 underline underline-offset-2"
          >
            Çerez Politikası
          </Link>
          .
        </p>
        <div className="flex gap-2.5 mt-3 sm:mt-0 shrink-0">
          <button
            onClick={() => decide("rejected")}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-700/60 hover:bg-slate-700 transition-colors"
          >
            Reddet
          </button>
          <button
            onClick={() => decide("accepted")}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-turf-600 hover:bg-turf-500 transition-colors"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
