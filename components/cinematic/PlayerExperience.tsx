"use client";

/**
 * Oyuncu sayfası sinematik deneyimi (/).
 *
 * Kurgu: F0 gece hava planı hero → F1 yol ayrımı (Oyuncuyum / İşletmeyim) →
 * P1 saha kiralama → P2 maç duyuruları → P3 takım sohbeti → P4 joker →
 * P5 fair play → P6 final CTA. Kamera, storyRef boyunca global scroll
 * ilerlemesiyle PLAYER_RAIL üzerinde sürülür; metinler DOM'da (SEO).
 *
 * quality "off" → PlayerStatic (three chunk'ı hiç inmez).
 */

import { useRef } from "react";
import dynamic from "next/dynamic";
import { m, useTransform } from "framer-motion";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import { FadeIn, MagneticButton, Reveal, Stagger, StaggerItem, Tilt3DCard, AuroraBackground } from "@/components/motion";
import { useQuality } from "@/components/three/core/useQuality";
import { useStoryProgress } from "@/components/three/core/useStoryProgress";
import CanvasLoader from "@/components/three/core/CanvasLoader";
import SmoothScroll from "./SmoothScroll";
import Chapter from "./Chapter";
import ForkDoors from "./ForkDoors";
import PhoneShot from "./PhoneShot";
import ScrollHint from "./ScrollHint";
import PlayerStatic from "./fallback/PlayerStatic";
import { FEATURES, STEPS, SHOTS } from "./playerContent";

const PlayerCanvas = dynamic(
  () => import("@/components/three/scenes/PlayerCanvas"),
  { ssr: false }
);

/** Bölüm başlığı üstündeki küçük renkli etiket. */
function Kicker({ children, tone = "turf" }: { children: React.ReactNode; tone?: "turf" | "ember" }) {
  const cls = tone === "turf" ? "text-turf-400 bg-turf-500/10 border-turf-500/25" : "text-ember-400 bg-ember-500/10 border-ember-500/25";
  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-wide mb-5 backdrop-blur-sm ${cls}`}>
      {children}
    </span>
  );
}

export default function PlayerExperience() {
  const quality = useQuality();
  const storyRef = useRef<HTMLDivElement>(null);
  const progress = useStoryProgress(storyRef);

  // Hero metni alçalma başlarken kaybolur. Canvas hikâye boyunca görünür kalır
  // (P6 neon finali); hikâye sonrası bölümler opak arka planla üzerini örter.
  const heroOpacity = useTransform(progress, [0, 0.025, 0.085], [1, 1, 0]);
  const heroY = useTransform(progress, [0.02, 0.085], [0, -60]);
  const hintOpacity = useTransform(progress, [0, 0.02], [1, 0]);

  if (quality === "off") return <PlayerStatic />;

  return (
    <SmoothScroll>
      <main>
        <div ref={storyRef} className="relative">
          <CanvasLoader
            poster={
              <div className="absolute inset-0 bg-[#0c1426]">
                <AuroraBackground variant="turf" />
              </div>
            }
          >
            <PlayerCanvas progress={progress} quality={quality} />
          </CanvasLoader>

          {/* ── F0: Hero — gece hava planı ── */}
          <section className="relative" style={{ minHeight: "200vh" }}>
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
              <m.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 pt-16">
                <FadeIn delay={0.1}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-5 [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
                    Halı Sahanın hikayesi{" "}
                    <span className="text-turf-500">Dimli&apos;de başlar.</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                    Saha kirala, takım yönet, joker bul, fair play kazan. Tek uygulama, tam deneyim.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    <MagneticButton className="w-full sm:w-auto">
                      <AppStoreBadge className="w-full" />
                    </MagneticButton>
                    <MagneticButton className="w-full sm:w-auto">
                      <GooglePlayBadge className="w-full" />
                    </MagneticButton>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <p className="mt-5 text-slate-400 text-xs">iOS &amp; Android · Ücretsiz · Türkiye geneli</p>
                </FadeIn>
              </m.div>

              {/* Kaydırma ipucu */}
              <m.div style={{ opacity: hintOpacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <ScrollHint label="Sahaya İn" tone="turf" />
              </m.div>
            </div>
          </section>

          {/* ── F1: Yol ayrımı ── */}
          <Chapter align="center" height="160vh" maxWidth="max-w-3xl w-full">
            <Kicker>Yolunu seç</Kicker>
            <h2 className="text-3xl sm:text-4xl font-black mb-8 [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
              Dimli&apos;de iki taraf var: <span className="text-turf-500">saha</span> ve{" "}
              <span className="text-ember-500">tesis</span>
            </h2>
            <ForkDoors />
          </Chapter>

          {/* ── P1: Halı Saha Kiralama ── */}
          <Chapter id="ozellikler" align="left" height="150vh" maxWidth="max-w-2xl">
            {(p) => (
              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
                <div>
                  <Kicker>Saha Bul</Kicker>
                  <h2 className="text-3xl sm:text-4xl font-black mb-4 [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
                    {FEATURES[1].title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                    {FEATURES[1].description}
                  </p>
                </div>
                <PhoneShot progress={p} src={SHOTS.sahalar.src} alt={SHOTS.sahalar.alt} />
              </div>
            )}
          </Chapter>

          {/* ── P2: Maç Duyuruları ── */}
          <Chapter align="right" height="150vh" maxWidth="max-w-2xl">
            {(p) => (
              <div className="flex flex-col sm:flex-row-reverse items-center gap-8 sm:gap-12">
                <div>
                  <Kicker>Rakip Bul</Kicker>
                  <h2 className="text-3xl sm:text-4xl font-black mb-4 [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
                    {FEATURES[0].title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                    {FEATURES[0].description}
                  </p>
                </div>
                <PhoneShot progress={p} src={SHOTS.rezervasyon.src} alt={SHOTS.rezervasyon.alt} />
              </div>
            )}
          </Chapter>

          {/* ── P3: Takımınla Haberleş ── */}
          <Chapter align="left" height="150vh" maxWidth="max-w-2xl">
            {(p) => (
              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10">
                <div>
                  <Kicker>Takım Sohbeti</Kicker>
                  <h2 className="text-3xl sm:text-4xl font-black mb-4 [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
                    {STEPS[3].title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                    {STEPS[3].description}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <PhoneShot progress={p} src={SHOTS.sohbet.src} alt={SHOTS.sohbet.alt} tilt={-4} />
                  <PhoneShot
                    progress={p}
                    src={SHOTS.rakipIletisim.src}
                    alt={SHOTS.rakipIletisim.alt}
                    tilt={4}
                  />
                </div>
              </div>
            )}
          </Chapter>

          {/* ── P4: Joker Havuzu ── */}
          <Chapter align="right" height="150vh" maxWidth="max-w-2xl">
            {(p) => (
              <div className="flex flex-col sm:flex-row-reverse items-center gap-8 sm:gap-12">
                <div>
                  <Kicker tone="ember">Eksik Oyuncuya Çözüm</Kicker>
                  <h2 className="text-3xl sm:text-4xl font-black mb-4 [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
                    {FEATURES[2].title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                    {FEATURES[2].description}
                  </p>
                </div>
                <PhoneShot progress={p} src={SHOTS.joker.src} alt={SHOTS.joker.alt} accent="ember" />
              </div>
            )}
          </Chapter>

          {/* ── P5: Fair Play ── */}
          <Chapter align="left" height="150vh" maxWidth="max-w-2xl">
            {(p) => (
              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10">
                <div>
                  <Kicker>Güvenilir Topluluk</Kicker>
                  <h2 className="text-3xl sm:text-4xl font-black mb-4 [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
                    {FEATURES[3].title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                    {FEATURES[3].description}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <PhoneShot progress={p} src={SHOTS.macDegerlendirme.src} alt={SHOTS.macDegerlendirme.alt} tilt={-4} />
                  <PhoneShot
                    progress={p}
                    src={SHOTS.rakipDegerlendirme.src}
                    alt={SHOTS.rakipDegerlendirme.alt}
                    tilt={4}
                  />
                </div>
              </div>
            )}
          </Chapter>

          {/* ── P6: Final CTA — kamera açılış planına döner, neon Dimli yanar ── */}
          <Chapter align="center" height="180vh" maxWidth="max-w-2xl w-full" fadeOut={[0.9, 1]} className="mt-[30vh]">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]">
              Sahaya çıkmaya <span className="text-turf-500">hazır mısın?</span>
            </h2>
            <p className="text-slate-300 text-base mb-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
              Binlerce takım ve oyuncu seni bekliyor. Dimli&apos;yi indir, takımını oluştur.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <MagneticButton className="w-full sm:w-auto">
                <AppStoreBadge className="w-full" />
              </MagneticButton>
              <MagneticButton className="w-full sm:w-auto">
                <GooglePlayBadge className="w-full" />
              </MagneticButton>
            </div>
          </Chapter>
        </div>

        {/* ── Hikâye sonrası: nasıl çalışır (normal DOM şeridi) ── */}
        <div className="relative z-10 bg-pitch">
          <section id="nasil-calisir" className="py-20 px-4 sm:px-6 bg-pitch-surface/30">
            <div className="max-w-6xl mx-auto">
              <Reveal className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-black mb-4">
                  Sahaya çıkana kadar <span className="text-turf-500">her adım burada</span>
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto">
                  Takımını kur, sahayı bul, maçı ayarla — Dimli tüm süreci yönetir.
                </p>
              </Reveal>

              <Stagger className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scroll-px-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                {STEPS.map((step, index) => (
                  <StaggerItem key={step.number} className="flex-none w-[72vw] sm:w-auto snap-start">
                    <Tilt3DCard
                      glow="turf"
                      intensity={6}
                      className="h-full p-5 sm:p-6 rounded-2xl bg-pitch-surface border border-slate-700/50 hover:border-turf-500/30 transition-colors group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-turf-500/10 border border-turf-500/20 flex items-center justify-center text-turf-500 group-hover:bg-turf-500/15 transition-colors">
                          {step.icon}
                        </div>
                        <span className="text-4xl font-black text-turf-500/12 leading-none select-none">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                      {index === STEPS.length - 1 && (
                        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-turf-500/40 to-transparent rounded-b-2xl" />
                      )}
                    </Tilt3DCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        </div>
      </main>
    </SmoothScroll>
  );
}
