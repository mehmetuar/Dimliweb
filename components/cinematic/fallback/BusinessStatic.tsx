"use client";

/**
 * İşletme sayfası STATİK fallback — reduced-motion / WebGL'siz cihazlar.
 * Eski /is-ortagi düzeninin birebir taşınmış hâli; three chunk'ı hiç inmez.
 * İçerik businessContent.tsx'ten okunur.
 */

import BusinessFeatureCard from "@/components/BusinessFeatureCard";
import BusinessScreenshots from "@/components/BusinessScreenshots";
import PricingCard from "@/components/PricingCard";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import {
  Reveal,
  Stagger,
  StaggerItem,
  FadeIn,
  CountUp,
  Parallax,
  AuroraBackground,
  Tilt3DCard,
  MagneticButton,
  Phone3D,
} from "@/components/motion";
import { PLANS, FEATURES, STEPS } from "../businessContent";
import PricingSection from "../PricingSection";

export default function BusinessStatic() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-24 md:pt-44 pb-24">
        <AuroraBackground variant="ember" />
        <Parallax speed={70} className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }}
          />
        </Parallax>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-400 text-sm font-bold mb-8">
                  <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse" />
                  Halı Saha Yönetim Platformu
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
                  İşletmeni <span className="text-ember-500">Dimli&apos;ye</span> Taşı
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                  Rezervasyonlarını yönet, gelirinizi takip et, müşteri memnuniyetini artır.
                  Tüm bunları tek bir panelden, telefonu bırakmadan.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-slate-500 text-sm mb-5 font-medium">
                  Dimli uygulamasını indir, işletme paneliyle hemen başla:
                </p>
                <div className="flex flex-wrap gap-4">
                  <MagneticButton>
                    <AppStoreBadge />
                  </MagneticButton>
                  <MagneticButton>
                    <GooglePlayBadge />
                  </MagneticButton>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex items-center gap-6 mt-10 pt-10 border-t border-slate-800">
                  <div className="text-center">
                    <p className="text-2xl font-black text-ember-400">
                      <CountUp to={10} suffix="+" />
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Aktif İşletme</p>
                  </div>
                  <div className="w-px h-10 bg-slate-800" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-ember-400">
                      <CountUp to={4.8} decimals={1} suffix="/5" />
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">İşletme Puanı</p>
                  </div>
                  <div className="w-px h-10 bg-slate-800" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-ember-400">
                      <CountUp to={3} suffix=" Ay" />
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Ücretsiz Deneme</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="relative hidden lg:flex justify-center">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { src: "/isletme/isletme1.png", label: "Kolay Giriş" },
                  { src: "/isletme/isletme.png", label: "Rezervasyon" },
                  { src: "/isletme/isletme3.png", label: "İstatistik" },
                  { src: "/isletme/isletme2.png", label: "Abonelik" },
                ].map((shot, i) => (
                  <div
                    key={shot.src}
                    className="flex flex-col items-center gap-2"
                    style={{ transform: i % 2 === 1 ? "translateY(24px)" : undefined }}
                  >
                    <Phone3D accent="ember" index={i} tiltMax={9} glow={false} sheen={false} radiusClass="rounded-[2.4rem]">
                      <div
                        className="relative rounded-[2.4rem] overflow-hidden border-[3px] border-slate-700/80 bg-pitch-deep"
                        style={{
                          width: 160,
                          height: 347,
                          boxShadow: "0 0 24px rgba(249,115,22,0.07), 0 14px 34px rgba(0,0,0,0.4)",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={shot.src} alt={shot.label} className="w-full h-full object-cover object-top" />
                      </div>
                    </Phone3D>
                    <p className="text-xs text-slate-500 font-medium">{shot.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="ozellikler" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ember-500/10 border border-ember-500/20 text-ember-400 text-sm font-bold mb-5">
              Neler Sunuyoruz?
            </div>
            <h2 className="text-4xl font-black text-white mb-4">İşletmeni Büyütecek Araçlar</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Dimli İş Ortağı paneli, halı saha yönetiminin her adımını kolaylaştırmak için tasarlandı.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <BusinessFeatureCard icon={f.icon} title={f.title} description={f.description} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── SCREENSHOTS ─── */}
      <section className="py-24 bg-pitch-surface/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ember-500/10 border border-ember-500/20 text-ember-400 text-sm font-bold mb-5">
              Uygulama İçi Görünüm
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Güçlü Panel, Sade Arayüz</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Karmaşık yazılımlara gerek yok. Dimli İş Ortağı uygulaması her şeyi parmaklarının ucuna taşır.
            </p>
          </Reveal>
          <BusinessScreenshots />
        </div>
      </section>

      {/* ─── PRICING + STEPS + CTA (sinematikle paylaşılan bölümler) ─── */}
      <PricingSection />
    </main>
  );
}
