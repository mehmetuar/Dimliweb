import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import PhoneCarousel from "@/components/PhoneCarousel";

const features = [
  {
    title: "Maç Duyuruları",
    description:
      "Kendi maç duyurunu oluştur ya da yakınındaki takımların ilanlarını keşfet. Anlık meydan okuma sistemiyle saniyeler içinde rakip bul.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Halı Saha Kiralama",
    description:
      "100'den fazla saha arasından konumuna en yakın müsait sahayı bul, anlık rezervasyon yap. Tesise gitmeden önce her şeyi gör.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Joker Havuzu",
    description:
      "Takımından oyuncu eksik mi? Joker Havuzu'ndan pozisyonuna ve seviyene uygun oyuncuları filtrele, anında davet et.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Fair Play Puanı",
    description:
      "Her maçtan sonra verilen puanlarla güvenilir bir topluluk oluştur. Fair Play skoru ile rakiplerine ve sahaya güvenle adım at.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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

/* Shared store badge button */
const GooglePlayBadge = ({ className = "" }: { className?: string }) => (
  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 justify-center px-5 py-3 rounded-2xl bg-black border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-all active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#4285F4"/>
      <path d="M6.05 2.66L16.81 8.88 14.54 11.15 6.05 2.66Z" fill="#34A853"/>
      <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5 15.39 12 17.89 9.5 20.16 10.81Z" fill="#EA4335"/>
      <path d="M16.81 15.12L6.05 21.34 14.54 12.85 16.81 15.12Z" fill="#FBBC04"/>
    </svg>
    <div className="text-left">
      <div className="text-[9px] text-white/60 leading-none">GET IT ON</div>
      <div className="text-[15px] font-semibold leading-tight tracking-tight">Google Play</div>
    </div>
  </a>
);

const AppStoreBadge = ({ className = "" }: { className?: string }) => (
  <a
    href="https://apps.apple.com"
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 justify-center px-5 py-3 rounded-2xl bg-black border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-all active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
    <div className="text-left">
      <div className="text-[9px] text-white/60 leading-none">Download on the</div>
      <div className="text-[15px] font-semibold leading-tight tracking-tight">App Store</div>
    </div>
  </a>
);

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-44 pb-24 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-turf-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-turf-500 animate-pulse" />
                Türkiye&apos;nin Dijital Halı Saha Platformu
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
                Rakip bul.{" "}
                <span className="text-turf-500">Sahaya çık.</span>
                <br />
                Her hafta.
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                Dimli ile takımını yönet, saha kirala, joker oyuncu bul ve anlık rakip meydan oku. Tek uygulama, tam halı saha deneyimi.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <GooglePlayBadge className="w-full sm:w-auto" />
                <AppStoreBadge className="w-full sm:w-auto" />
              </div>
            </div>

            {/* Phone showcase */}
            <div className="mt-16 animate-slide-up">
              <PhoneCarousel />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="ozellikler" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                Halı sahada ihtiyacın olan{" "}
                <span className="text-turf-500">her şey</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Dimli, maçtan önce ve sonra tüm süreçleri tek bir uygulamada toplar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f) => (
                <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="nasil-calisir" className="py-24 px-4 sm:px-6 bg-pitch-surface/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                Sahaya çıkana kadar{" "}
                <span className="text-turf-500">her adım burada</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Takımını kur, sahayı bul, maçı ayarla — Dimli tüm süreci yönetir.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative p-6 rounded-2xl bg-pitch-surface border border-slate-700/50 hover:border-turf-500/30 transition-colors group"
                >
                  {/* connector line — desktop only, right of each except last in row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-turf-500/10 border border-turf-500/20 flex items-center justify-center text-turf-500 group-hover:bg-turf-500/15 transition-colors">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-black text-turf-500/15 leading-none">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  {/* subtle bottom accent on last step */}
                  {index === steps.length - 1 && (
                    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-turf-500/40 to-transparent rounded-b-2xl" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-medium mb-6">
              Ücretsiz İndir
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Sahaya çıkmaya{" "}
              <span className="text-turf-500">hazır mısın?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Binlerce takım ve oyuncu seni bekliyor. Dimli&apos;yi indir, takımını oluştur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <GooglePlayBadge className="w-full sm:w-auto" />
              <AppStoreBadge className="w-full sm:w-auto" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
