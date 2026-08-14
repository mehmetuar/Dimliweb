"use client";

/**
 * İşletme sayfası sinematik deneyimi (/is-ortagi).
 *
 * Kurgu: B0 sokak/cephe hero → kapıdan içeri → B1 kasa/rezervasyon →
 * B2 arka ofis/gelir → B3 soyunma odası/değerlendirmeler → B4 yelek-krampon
 * kiralama/saha konfigürasyonu → B5 dış oturma alanı/mobil yönetim →
 * hikâye sonrası DOM: fiyatlandırma + 5 adım + CTA (PricingSection).
 */

import { useRef } from "react";
import dynamic from "next/dynamic";
import { m, useTransform } from "framer-motion";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import { FadeIn, MagneticButton, CountUp, AuroraBackground } from "@/components/motion";
import { useQuality } from "@/components/three/core/useQuality";
import { useStoryProgress } from "@/components/three/core/useStoryProgress";
import CanvasLoader from "@/components/three/core/CanvasLoader";
import SmoothScroll from "./SmoothScroll";
import Chapter from "./Chapter";
import PhoneShot from "./PhoneShot";
import ScrollHint from "./ScrollHint";
import BusinessStatic from "./fallback/BusinessStatic";
import PricingSection from "./PricingSection";
import { FEATURES, SHOTS } from "./businessContent";

const BusinessCanvas = dynamic(
  () => import("@/components/three/scenes/BusinessCanvas"),
  { ssr: false }
);

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-wide mb-5 backdrop-blur-sm text-ember-400 bg-ember-500/10 border-ember-500/25">
      {children}
    </span>
  );
}

const SHADOW_H2 = "[text-shadow:0_2px_20px_rgba(0,0,0,0.55)]";
const SHADOW_P = "[text-shadow:0_1px_12px_rgba(0,0,0,0.6)]";

export default function BusinessExperience() {
  const quality = useQuality();
  const storyRef = useRef<HTMLDivElement>(null);
  const progress = useStoryProgress(storyRef);

  const heroOpacity = useTransform(progress, [0, 0.03, 0.1], [1, 1, 0]);
  const heroY = useTransform(progress, [0.025, 0.1], [0, -60]);
  const hintOpacity = useTransform(progress, [0, 0.02], [1, 0]);

  if (quality === "off") return <BusinessStatic />;

  return (
    <SmoothScroll>
      <main>
        <div ref={storyRef} className="relative">
          <CanvasLoader
            poster={
              <div className="absolute inset-0 bg-[#0c1426]">
                <AuroraBackground variant="ember" />
              </div>
            }
          >
            <BusinessCanvas progress={progress} quality={quality} />
          </CanvasLoader>

          {/* ── B0: Hero — sokak, cephe ── */}
          <section className="relative" style={{ minHeight: "200vh" }}>
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
              <m.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 pt-16">
                <FadeIn delay={0}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-400 text-sm font-bold mb-8 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse" />
                    Halı Saha Yönetim Platformu
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-5 ${SHADOW_H2}`}>
                    İşletmeni <span className="text-ember-500">Dimli&apos;ye</span> Taşı
                  </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className={`text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto ${SHADOW_P}`}>
                    Rezervasyonlarını yönet, gelirinizi takip et, müşteri memnuniyetini artır.
                    Tüm bunları tek bir panelden, telefonu bırakmadan.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8">
                    <MagneticButton className="w-full sm:w-auto">
                      <AppStoreBadge className="w-full" />
                    </MagneticButton>
                    <MagneticButton className="w-full sm:w-auto">
                      <GooglePlayBadge className="w-full" />
                    </MagneticButton>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-pitch-deep/60 backdrop-blur-md border border-slate-700/40">
                    <div className="text-center">
                      <p className="text-xl font-black text-ember-400">
                        <CountUp to={10} suffix="+" />
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Aktif İşletme</p>
                    </div>
                    <div className="w-px h-8 bg-slate-700/60" />
                    <div className="text-center">
                      <p className="text-xl font-black text-ember-400">
                        <CountUp to={4.8} decimals={1} suffix="/5" />
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">İşletme Puanı</p>
                    </div>
                    <div className="w-px h-8 bg-slate-700/60" />
                    <div className="text-center">
                      <p className="text-xl font-black text-ember-400">
                        <CountUp to={3} suffix=" Ay" />
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Ücretsiz Deneme</p>
                    </div>
                  </div>
                </FadeIn>
              </m.div>

              <m.div style={{ opacity: hintOpacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <ScrollHint label="Tesise Gir" tone="ember" />
              </m.div>
            </div>
          </section>

          {/* ── B1: Kasa / Rezervasyon Yönetimi ── */}
          <Chapter id="ozellikler" align="right" height="150vh" maxWidth="max-w-2xl">
            {(p) => (
              <div className="flex flex-col sm:flex-row-reverse items-center gap-8 sm:gap-12">
                <div>
                  <Kicker>Resepsiyon · Kasa</Kicker>
                  <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${SHADOW_H2}`}>{FEATURES[0].title}</h2>
                  <p className={`text-slate-300 leading-relaxed ${SHADOW_P}`}>{FEATURES[0].description}</p>
                </div>
                <PhoneShot progress={p} src={SHOTS.rezervasyon.src} alt={SHOTS.rezervasyon.alt} accent="ember" />
              </div>
            )}
          </Chapter>

          {/* ── B2: Arka ofis / Gelir Takibi ── */}
          <Chapter align="right" height="150vh" maxWidth="max-w-2xl">
            {(p) => (
              <div className="flex flex-col sm:flex-row-reverse items-center gap-8 sm:gap-12">
                <div>
                  <Kicker>Arka Ofis</Kicker>
                  <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${SHADOW_H2}`}>{FEATURES[1].title}</h2>
                  <p className={`text-slate-300 leading-relaxed ${SHADOW_P}`}>{FEATURES[1].description}</p>
                </div>
                <PhoneShot progress={p} src={SHOTS.istatistik.src} alt={SHOTS.istatistik.alt} accent="ember" />
              </div>
            )}
          </Chapter>

          {/* ── B3: Soyunma odası / Değerlendirmeler + Bildirimler ── */}
          <Chapter align="left" height="150vh" maxWidth="max-w-2xl">
            {(p) => (
              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
                <div>
                  <Kicker>Soyunma Odası</Kicker>
                  <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${SHADOW_H2}`}>{FEATURES[2].title}</h2>
                  <p className={`text-slate-300 leading-relaxed mb-4 ${SHADOW_P}`}>{FEATURES[2].description}</p>
                  <p className={`text-slate-400 text-sm leading-relaxed ${SHADOW_P}`}>
                    <span className="text-ember-400 font-semibold">{FEATURES[4].title}:</span>{" "}
                    {FEATURES[4].description}
                  </p>
                </div>
                {/* Login ekranı yerine istatistik: işletme değerlendirmesi bu ekranda görünüyor */}
                <PhoneShot progress={p} src={SHOTS.istatistik.src} alt={SHOTS.istatistik.alt} accent="ember" />
              </div>
            )}
          </Chapter>

          {/* ── B4: Kiralama odası / Saha Konfigürasyonu ── */}
          <Chapter align="left" height="150vh" maxWidth="max-w-md">
            <Kicker>Yelek &amp; Krampon Kiralama</Kicker>
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${SHADOW_H2}`}>{FEATURES[3].title}</h2>
            <p className={`text-slate-300 leading-relaxed ${SHADOW_P}`}>{FEATURES[3].description}</p>
          </Chapter>

          {/* ── B5: Dış oturma alanı / Tam Mobil Yönetim ── */}
          <Chapter align="center" height="150vh" maxWidth="max-w-2xl">
            {(p) => (
              <div className="flex flex-col items-center gap-8">
                <div>
                  <Kicker>Oturma Alanı · Saha Manzarası</Kicker>
                  <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${SHADOW_H2}`}>{FEATURES[5].title}</h2>
                  <p className={`text-slate-300 leading-relaxed max-w-lg mx-auto ${SHADOW_P}`}>{FEATURES[5].description}</p>
                </div>
                <PhoneShot progress={p} src={SHOTS.abonelik.src} alt={SHOTS.abonelik.alt} accent="ember" />
              </div>
            )}
          </Chapter>

          {/* ── B6: veda planı — metin yok, kamera yükselir ── */}
          <section style={{ minHeight: "120vh" }} aria-hidden />
        </div>

        {/* ── Hikâye sonrası DOM: fiyatlandırma + adımlar + CTA ── */}
        <div className="relative z-10 bg-pitch">
          <PricingSection />
        </div>
      </main>
    </SmoothScroll>
  );
}
