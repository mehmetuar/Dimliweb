import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneCarousel from "@/components/PhoneCarousel";
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

const features = [
  {
    title: "Maç Duyuruları",
    description:
      "Kendi maç duyurunu oluştur ya da yakınındaki takımların ilanlarını keşfet. Anlık meydan okuma sistemiyle rakip bul.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Halı Saha Kiralama",
    description:
      "100'den fazla saha arasından konumuna en yakın müsait sahayı bul, anlık rezervasyon yap.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Joker Havuzu",
    description:
      "Takımından oyuncu eksik mi? Pozisyonuna ve seviyene uygun oyuncuları filtrele, anında davet et.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Fair Play Puanı",
    description:
      "Her maçtan sonra verilen puanlarla güvenilir bir topluluk oluştur. Fair Play skoru ile güvenle adım at.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Takımını Kur",
    description: "Uygulamayı indir, takımını oluştur, oyuncularını ekle. Konum ve seviyeni belirle.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sahayı Seç",
    description: "İşletmelerin değerlendirmelerine bak, ücretleri karşılaştır, uzaklığını gör. Müsait saati seç ve rezervasyon yap.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Maçını Ayarla",
    description: "Kendi aranızda oyna ya da ilanlar arasından rakip bul, meydan oku. Maç anında netleşir.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Takımınla Haberleş",
    description: "Maç saatine kadar anlık gelişmeleri Chat kanalında paylaş. Onay, saat değişikliği, kadro — hepsi tek yerde.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Joker Ekle",
    description: "Son dakika adam eksiği mi var? Joker Havuzu'ndan pozisyonuna uygun oyuncuyu anında davet et.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Sahaya Çık",
    description: "Her şey tamam — takım hazır, saha kilitli. Sahaya çık, oyna ve kazanmanın keyfini çıkar.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* Store Badges */
const GooglePlayBadge = ({ className = "" }: { className?: string }) => (
  <a
    href="https://play.google.com/store/apps/details?id=com.dimli.app&hl=tr"
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#111827] border border-white/10 text-white hover:border-turf-500/40 hover:bg-[#0d1520] transition-all duration-200 active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#4285F4"/>
      <path d="M6.05 2.66L16.81 8.88 14.54 11.15 6.05 2.66Z" fill="#34A853"/>
      <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5 15.39 12 17.89 9.5 20.16 10.81Z" fill="#EA4335"/>
      <path d="M16.81 15.12L6.05 21.34 14.54 12.85 16.81 15.12Z" fill="#FBBC04"/>
    </svg>
    <div className="text-left">
      <div className="text-[10px] text-white/50 leading-none font-medium tracking-wide uppercase">Get it on</div>
      <div className="text-[15px] font-bold leading-tight mt-0.5">Google Play</div>
    </div>
  </a>
);

const AppStoreBadge = ({ className = "" }: { className?: string }) => (
  <a
    href="https://apps.apple.com/tr/app/dimli/id6764278538?l=tr"
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-black border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200 active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
    <div className="text-left">
      <div className="text-[10px] text-white/50 leading-none font-medium tracking-wide uppercase">Download on the</div>
      <div className="text-[15px] font-bold leading-tight mt-0.5">App Store</div>
    </div>
  </a>
);

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-24 md:pt-44 pb-20 px-4 sm:px-6 overflow-hidden">
          {/* Background aurora + parallax glow */}
          <AuroraBackground variant="turf" />
          <Parallax speed={70} className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-turf-500/5 rounded-full blur-2xl" />
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-turf-600/3 rounded-full blur-2xl" />
          </Parallax>

          <div className="relative max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">

              {/* Premium platform badge */}
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
                  style={{
                    background: "linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.04) 100%)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turf-500 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-turf-500" />
                  </span>
                  <span className="text-turf-400 text-sm font-semibold tracking-wide">
                    Türkiye&apos;nin Dijital Halı Saha Platformu
                  </span>
                </div>
              </FadeIn>

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

              {/* Store buttons — visually differentiated */}
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

              {/* Social proof micro-text */}
              <FadeIn delay={0.4}>
                <p className="mt-5 text-slate-500 text-xs">
                  iOS &amp; Android · Ücretsiz · Türkiye geneli
                </p>
              </FadeIn>
            </div>

            {/* Phone showcase */}
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
                Halı sahada ihtiyacın olan{" "}
                <span className="text-turf-500">her şey</span>
              </h2>
              <p className="text-slate-400 text-base max-w-xl mx-auto">
                Dimli, maçtan önce ve sonra tüm süreçleri tek bir uygulamada toplar.
              </p>
            </Reveal>

            {/* 2×2 on mobile, 4 cols on desktop */}
            <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {features.map((f) => (
                <StaggerItem key={f.title}>
                  <Tilt3DCard glow="turf" className="group h-full flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-pitch-surface border border-slate-700/50 hover:border-turf-500/40 hover:bg-slate-800/60 transition-colors duration-300">
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
                Sahaya çıkana kadar{" "}
                <span className="text-turf-500">her adım burada</span>
              </h2>
              <p className="text-slate-400 text-base max-w-xl mx-auto">
                Takımını kur, sahayı bul, maçı ayarla — Dimli tüm süreci yönetir.
              </p>
            </Reveal>

            {/* Mobile: horizontal scroll snap / Desktop: 3-col grid */}
            <Stagger className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scroll-px-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {steps.map((step, index) => (
                <StaggerItem key={step.number} className="flex-none w-[72vw] sm:w-auto snap-start">
                  <Tilt3DCard glow="turf" intensity={6} className="h-full p-5 sm:p-6 rounded-2xl bg-pitch-surface border border-slate-700/50 hover:border-turf-500/30 transition-colors group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-turf-500/10 border border-turf-500/20 flex items-center justify-center text-turf-500 group-hover:bg-turf-500/15 transition-colors">
                        {step.icon}
                      </div>
                      <span className="text-4xl font-black text-turf-500/12 leading-none select-none">{step.number}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    {index === steps.length - 1 && (
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
              Sahaya çıkmaya{" "}
              <span className="text-turf-500">hazır mısın?</span>
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

      <Footer />
    </>
  );
}
