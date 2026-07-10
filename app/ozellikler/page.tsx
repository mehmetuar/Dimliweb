import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Özellikler — Dimli",
  description:
    "Rakip bulma, halı saha rezervasyonu, joker havuzu, Fair Play puanlama, takım yönetimi ve anlık sohbet. Dimli'nin halı saha deneyimini tek uygulamada toplayan özellikleri.",
  alternates: { canonical: "/ozellikler" },
};

const mainFeatures = [
  {
    title: "Rakip Bul & Maç Duyuruları",
    desc: "Kendi maç ilanını oluştur ya da yakınındaki takımların ilanlarını keşfet. Anlık meydan okuma sistemiyle rakip bulmak dakikalar sürer; kendi aranızda maç da kurabilirsin.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Halı Saha Rezervasyonu",
    desc: "Konumuna en yakın müsait sahayı bul, saat bazlı doluluğu gör ve anında rezervasyon talebi gönder. Sahanın müsaitliği anlık güncellenir; boş yere gidip dönmek yok.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Joker Havuzu",
    desc: "Takımından oyuncu mu eksik? Pozisyonuna ve seviyene uygun oyuncuları filtrele, anında davet et. Son dakika adam eksiği artık maçı bozmuyor.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Fair Play Puanı",
    desc: "Her maçtan sonra verilen puanlarla güvenilir bir topluluk oluşur. Rakip ve saha değerlendirmeleriyle kiminle, nerede oynayacağını bilerek adım atarsın.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
];

const secondary = [
  { title: "Takım Yönetimi", desc: "Kadronu oluştur, oyuncuları ekle, kaptan ve yardımcı kaptan belirle." },
  { title: "Anlık Sohbet", desc: "Maç grubu, takım içi ve rakiple sohbet — onay, saat değişikliği, kadro tek yerde." },
  { title: "Anlık Müsaitlik", desc: "Sahaların boş/dolu saatleri gerçek zamanlı; herkes aynı bilgiyi görür." },
  { title: "Konum & Mesafe", desc: "Sana en yakın sahayı ve rakibi mesafeye göre keşfet." },
  { title: "Bildirimler", desc: "Meydan okuma, onay, joker daveti ve maç güncellemeleri anında telefonunda." },
  { title: "Değerlendirmeler", desc: "Saha ve rakip puanlarıyla topluluk şeffaf ve güvenilir kalır." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://dimli.com.tr" },
    { "@type": "ListItem", position: 2, name: "Özellikler", item: "https://dimli.com.tr/ozellikler" },
  ],
};

export default function OzelliklerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="pt-20 md:pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <Reveal className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-medium mb-4">
              Özellikler
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Halı sahada ihtiyacın olan <span className="text-turf-500">her şey</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Dimli, maçtan önce ve sonra tüm süreçleri tek bir uygulamada toplar. İşte sahaya çıkana kadar
              seni yalnız bırakmayan özellikler.
            </p>
          </Reveal>

          {/* Main features — alternating rows */}
          <div className="space-y-5 mb-20">
            {mainFeatures.map((f, i) => (
              <Reveal key={f.title}>
                <div
                  className={`flex flex-col sm:flex-row items-start gap-5 p-7 sm:p-8 rounded-3xl bg-pitch-surface border border-slate-700/50 ${
                    i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                  }`}
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-turf-500/10 border border-turf-500/20 flex items-center justify-center text-turf-500">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={f.icon} />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl sm:text-2xl mb-2">{f.title}</h2>
                    <p className="text-slate-300/90 leading-relaxed max-w-xl">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Secondary grid */}
          <Reveal className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Ve dahası</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {secondary.map((s) => (
              <StaggerItem key={s.title}>
                <div className="h-full p-6 rounded-2xl bg-pitch-surface/70 border border-slate-700/50">
                  <div className="w-9 h-9 rounded-lg bg-turf-500/10 flex items-center justify-center text-turf-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-base mb-1.5">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* CTA */}
          <Reveal className="p-8 sm:p-10 rounded-3xl bg-turf-500/5 border border-turf-500/20 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Hepsi tek uygulamada</h2>
            <p className="text-slate-400 mb-7 max-w-lg mx-auto">
              Dimli'yi ücretsiz indir, ilk maçını dakikalar içinde ayarla.
            </p>
            <Link
              href="/indir"
              className="inline-block px-8 py-3.5 rounded-xl bg-turf-600 hover:bg-turf-500 text-white font-bold transition-colors"
            >
              Uygulamayı İndir
            </Link>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
