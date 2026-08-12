"use client";

/**
 * /is-ortagi ortak kuyruğu: fiyatlandırma + 5 adımda yayına gir + CTA.
 * Hem sinematik deneyimin hikâye-sonrası DOM şeridi hem statik fallback
 * bunu kullanır (eski sayfadan birebir taşındı).
 */

import PricingCard from "@/components/PricingCard";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import { Reveal, Stagger, StaggerItem, Tilt3DCard, MagneticButton } from "@/components/motion";
import { PLANS, STEPS } from "./businessContent";

export default function PricingSection() {
  return (
    <>
      {/* ─── PRICING ─── */}
      <section id="fiyatlandirma" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ember-500/10 border border-ember-500/20 text-ember-400 text-sm font-bold mb-5">
              Fiyatlandırma
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Saha Sayına Göre Plan Seç</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Her plan, yönetebileceğin saha sayısına göre belirlenir.{" "}
              <span className="text-white font-semibold">Kaç sahanız varsa o plana abone olursunuz.</span>{" "}
              Abonelik uygulama içi satın alma ile yapılır — App Store veya Google Play üzerinden güvenli ödeme.
            </p>
          </Reveal>

          <div className="flex items-start gap-3 max-w-2xl mx-auto mb-12 p-4 rounded-xl bg-ember-500/5 border border-ember-500/20">
            <svg className="w-5 h-5 text-ember-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="text-ember-400 font-semibold">Uygulama içi satın alma:</span>{" "}
              Abonelikler yalnızca Dimli uygulaması üzerinden yapılır. Ödeme App Store veya Google Play tarafından güvenle işlenir. İstediğin zaman iptal edebilirsin.{" "}
              <span className="text-slate-300 font-medium">İlk 3 ay ücretsiz.</span>
            </p>
          </div>

          <Stagger stagger={0.06} className="flex lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scroll-px-4 -mx-4 px-4 lg:mx-0 lg:px-0 items-start">
            {PLANS.map((plan) => (
              <StaggerItem key={plan.planName} className="flex-none w-[80vw] sm:w-[60vw] lg:w-auto snap-start">
                <Tilt3DCard glow="ember" intensity={6} className="rounded-2xl">
                  <PricingCard
                    pitchCount={plan.pitchCount}
                    planName={plan.planName}
                    price={plan.price}
                    features={plan.features}
                    popular={plan.popular}
                  />
                </Tilt3DCard>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 p-6 rounded-2xl bg-pitch-surface/40 border border-slate-700/50 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-ember-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1">Örnek</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  2 sahanız olan bir işletme, <span className="text-ember-400 font-semibold">Basic planına</span> (₺2.999,99/ay) abone olur ve her iki sahayı da Dimli üzerinden yönetebilir.
                  3 sahalı bir işletme için <span className="text-ember-400 font-semibold">Pro planı</span> (₺3.849,99/ay) gereklidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW TO START ─── */}
      <section id="nasil-baslanir" className="py-24 bg-pitch-surface/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ember-500/10 border border-ember-500/20 text-ember-400 text-sm font-bold mb-5">
              Başlangıç Rehberi
            </div>
            <h2 className="text-4xl font-black text-white mb-4">5 Adımda Yayına Gir</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Kayıt işlemi dakikalar alıyor. Her şey Dimli uygulaması üzerinden yapılır — ayrı bir sisteme gerek yok.
            </p>
          </Reveal>

          <Stagger className="flex flex-col gap-4">
            {STEPS.map((step) => (
              <StaggerItem key={step.number}>
                <Tilt3DCard
                  glow="ember"
                  intensity={5}
                  className="flex items-start gap-5 p-5 rounded-2xl border border-slate-700/50 bg-pitch-surface/40 hover:border-ember-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center text-ember-500 shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-ember-500/50 text-sm font-black">{step.number}</span>
                      <h3 className="text-white font-bold text-base">{step.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </Tilt3DCard>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <MagneticButton>
              <AppStoreBadge />
            </MagneticButton>
            <MagneticButton>
              <GooglePlayBadge />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24">
        <Reveal className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="p-10 rounded-3xl border border-ember-500/20 bg-pitch-surface/30"
            style={{ boxShadow: "0 0 60px rgba(249,115,22,0.08)" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center text-ember-500 mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-3xl font-black text-white mb-4">
              Hemen Başlamak için<br />Uygulamayı İndir
            </h2>
            <p className="text-slate-400 mb-3 leading-relaxed">
              Tüm kayıt ve abonelik işlemleri Dimli uygulaması üzerinden yapılır.
              İlk 3 ay ücretsiz dene, beğenirsen devam et.
            </p>
            <p className="text-slate-500 text-sm mb-8">
              Sorun mu yaşıyorsun?{" "}
              <a href="/iletisim" className="text-ember-400 hover:text-ember-300 transition-colors font-semibold">
                Bizimle iletişime geç
              </a>
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton>
                <AppStoreBadge />
              </MagneticButton>
              <MagneticButton>
                <GooglePlayBadge />
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
