import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-turf-500/5 rounded-full blur-xl" />
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-turf-600/3 rounded-full blur-xl" />
          </Parallax>

          <div className="relative max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">

              {/* Premium platform badge */}
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09), 0 8px 24px rgba(0,0,0,0.28)",
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
