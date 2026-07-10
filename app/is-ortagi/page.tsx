import type { Metadata } from "next";
import BusinessNavbar from "@/components/BusinessNavbar";
import BusinessFeatureCard from "@/components/BusinessFeatureCard";
import BusinessScreenshots from "@/components/BusinessScreenshots";
import PricingCard from "@/components/PricingCard";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  title: "Dimli İş Ortağı — Halı Sahanı Dimli'ye Taşı",
  description:
    "Rezervasyonlarını yönet, gelirinizi takip et, müşteri memnuniyetini artır. Dimli İş Ortağı platformuyla halı sahanı büyüt.",
  alternates: { canonical: "/is-ortagi" },
};


const PLANS = [
  {
    pitchCount: 1,
    planName: "Starter",
    price: "₺1.709,99",
    features: [
      "1 saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
  {
    pitchCount: 2,
    planName: "Basic",
    price: "₺2.999,99",
    popular: false,
    features: [
      "2 saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
  {
    pitchCount: 3,
    planName: "Pro",
    price: "₺3.849,99",
    popular: true,
    features: [
      "3 saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
  {
    pitchCount: 4,
    planName: "Business",
    price: "₺4.649,99",
    features: [
      "4 saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
  {
    pitchCount: "5+",
    planName: "Enterprise",
    price: "₺5.399,99",
    features: [
      "5 ve üzeri saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Rezervasyon Yönetimi",
    description:
      "Gelen rezervasyonları onayla, reddet ya da düzenle. Saat bazlı doluluk takvimiyle çakışmaları anında fark et.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Gelir Takibi",
    description:
      "Günlük, haftalık ve aylık ciro özetlerini tek bakışta gör. Hangi sahanın ne kadar kazandırdığını analiz et.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Müşteri Değerlendirmeleri",
    description:
      "Dimli kullanıcılarının bıraktığı puanları ve yorumları gör. Yüksek puan, daha fazla müşteri demektir.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Saha Konfigürasyonu",
    description:
      "Sahanın özelliklerini, saatlik ücretini ve çalışma saatlerini uygulama üzerinden kolayca güncelle.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Anlık Bildirimler",
    description:
      "Yeni rezervasyon, iptal ve değerlendirme anında bildirimi gelsin. Hiçbir şeyi kaçırma.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Tam Mobil Yönetim",
    description:
      "İşletmeni her yerden yönet. Dimli uygulaması iOS ve Android'de sana özel işletme paneli sunar.",
  },
];

const STEPS = [
  {
    number: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Dimli'yi İndir",
    description: "App Store veya Google Play'den Dimli uygulamasını telefonuna ücretsiz olarak yükle.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "İşletme Paneline Geç",
    description: "Giriş ekranında \"İşletme Paneline Geç\" butonuna dokun. Oyuncu ve işletme girişleri ayrıdır.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "İşletmeni Kaydet",
    description: "İşletme adı, adres ve iletişim bilgilerini gir. Ekibimiz başvurunu inceler ve onaylar.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Planını Seç ve Abone Ol",
    description: "Kaç sahanız varsa o plana abone ol. Ödeme App Store veya Google Play üzerinden güvenli şekilde yapılır. İlk 3 ay ücretsiz.",
  },
  {
    number: "05",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sahalarını Ekle, Yayına Gir",
    description: "Saha bilgilerini, ücretleri ve çalışma saatlerini gir. Dimli kullanıcıları seni anında keşfetmeye başlar.",
  },
];

export default function IsOrtagiPage() {
  return (
    <div className="min-h-screen bg-pitch text-white">
      <BusinessNavbar />

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

            {/* Left: copy */}
            <div>
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-400 text-sm font-bold mb-8">
                  <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse" />
                  Halı Saha Yönetim Platformu
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
                  İşletmeni{" "}
                  <span className="text-ember-500">Dimli&apos;ye</span>{" "}
                  Taşı
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

              {/* Trust strip */}
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-6 mt-10 pt-10 border-t border-slate-800">
                  <div className="text-center">
                    <p className="text-2xl font-black text-ember-400">
                      <CountUp to={500} suffix="+" />
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

            {/* Right: screenshots 2×2 — sinematik 3D */}
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
                        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-pitch-deep rounded-full z-10" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={shot.src}
                          alt={shot.label}
                          className="w-full h-full object-cover object-top"
                        />
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

          {/* 2-col on mobile, 3-col on desktop */}
          <Stagger className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <BusinessFeatureCard icon={f.icon} title={f.title} description={f.description} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── SCREENSHOTS SHOWCASE ─── */}
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

          {/* In-app purchase note */}
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

          {/* Mobile: horizontal swipe / Desktop: 5-col grid */}
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

          {/* Example box */}
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

          {/* Download CTA under steps */}
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

      <Footer />
    </div>
  );
}
