import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneCarousel from "@/components/PhoneCarousel";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Uygulamayı İndir — Dimli",
  description:
    "Dimli'yi iOS ve Android'de ücretsiz indir. Dakikalar içinde takımını kur, saha kirala ve ilk maçını ayarla.",
  alternates: { canonical: "/indir" },
};

const steps = [
  { n: "01", title: "Uygulamayı indir", desc: "App Store veya Google Play'den Dimli'yi ücretsiz kur." },
  { n: "02", title: "Takımını kur", desc: "Hesabını oluştur, takımını ekle, konum ve seviyeni belirle." },
  { n: "03", title: "Sahaya çık", desc: "Rakip bul, sahayı ayarla, joker çağır — ilk maçın hazır." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://dimli.com.tr" },
    { "@type": "ListItem", position: 2, name: "İndir", item: "https://dimli.com.tr/indir" },
  ],
};

export default function IndirPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="pt-20 md:pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-medium mb-4">
              iOS &amp; Android · Ücretsiz
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Dakikalar içinde <span className="text-turf-500">sahadasın</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Dimli'yi ücretsiz indir, takımını kur ve ilk maçını dakikalar içinde ayarla.
            </p>
          </Reveal>

          {/* Store badges */}
          <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <AppStoreBadge className="w-full sm:w-56" />
            <GooglePlayBadge className="w-full sm:w-56" />
          </Reveal>

          {/* Screenshots */}
          <Reveal className="mb-16">
            <PhoneCarousel />
          </Reveal>

          {/* Steps */}
          <Reveal className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Nasıl başlarım?</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="h-full p-6 rounded-2xl bg-pitch-surface border border-slate-700/50">
                  <span className="text-4xl font-black text-turf-500/20 leading-none select-none">{s.n}</span>
                  <h3 className="text-white font-bold text-base mt-3 mb-1.5">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Bottom CTA */}
          <Reveal className="p-8 sm:p-10 rounded-3xl bg-turf-500/5 border border-turf-500/20 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">Hemen indir, sahaya çık</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <AppStoreBadge className="w-full sm:w-56" />
              <GooglePlayBadge className="w-full sm:w-56" />
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
