"use client";

/**
 * Oyuncu sayfası STATİK fallback — reduced-motion / WebGL'siz cihazlar.
 * Eski ana sayfa düzeninin birebir taşınmış hâli; three chunk'ı hiç inmez.
 * İçerik playerContent.tsx'ten okunur (sinematik varyantla tek kaynak).
 */

import PhoneCarousel from "@/components/PhoneCarousel";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import {
  Reveal,
  Stagger,
  StaggerItem,
  FadeIn,
  Parallax,
  AuroraBackground,
  Tilt3DCard,
  MagneticButton,
} from "@/components/motion";
import { FEATURES, STEPS } from "../playerContent";

export default function PlayerStatic() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-24 md:pt-44 pb-20 px-4 sm:px-6 overflow-hidden">
        <AuroraBackground variant="turf" />
        <Parallax speed={70} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-turf-500/5 rounded-full blur-xl" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-turf-600/3 rounded-full blur-xl" />
        </Parallax>

        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-5">
                Halı Sahanın hikayesi{" "}
                <span className="text-turf-500">Dimli&apos;de başlar.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
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
              <p className="mt-5 text-slate-500 text-xs">iOS &amp; Android · Ücretsiz · Türkiye geneli</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="mt-16">
            <PhoneCarousel />
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section id="ozellikler" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Halı sahada ihtiyacın olan <span className="text-turf-500">her şey</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Dimli, maçtan önce ve sonra tüm süreçleri tek bir uygulamada toplar.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <Tilt3DCard
                  glow="turf"
                  className="group h-full flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-pitch-surface border border-slate-700/50 hover:border-turf-500/40 hover:bg-slate-800/60 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-turf-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-turf-500/20 transition-colors">
                    <div className="text-turf-500">{f.icon}</div>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base mb-1.5 w-full">{f.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed w-full">{f.description}</p>
                </Tilt3DCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How it works */}
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

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-5">
            Sahaya çıkmaya <span className="text-turf-500">hazır mısın?</span>
          </h2>
          <p className="text-slate-400 text-base mb-10">
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
        </Reveal>
      </section>
    </main>
  );
}
