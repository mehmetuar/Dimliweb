import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Hakkımızda — Dimli",
  description:
    "Dimli, amatör futbolun dijital sahası. Rakip bulmayı, saha kiralamayı ve takım yönetimini tek uygulamada toplayan Türkiye'nin dijital halı saha platformunun hikayesi.",
  alternates: { canonical: "/hakkimizda" },
};

const values = [
  {
    title: "Oyuncu Odaklı",
    desc: "Her kararı, sahaya çıkmayı kolaylaştırmak için alıyoruz. Karmaşa değil, tek dokunuşla oyun.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Güvenilir Topluluk",
    desc: "Fair Play puanlaması ve şeffaf değerlendirmelerle güvenle oynayabileceğin bir topluluk.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "İşletme Dostu",
    desc: "Halı saha işletmelerinin doluluğunu artıran, rezervasyonu ve geliri tek panelden yöneten araçlar.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m-5-4h1m4 0h1",
  },
  {
    title: "Yerli ve Bize Özel",
    desc: "Türkiye'deki halı saha kültürüne göre tasarlandı; ihtiyaçların tam olarak burada karşılanır.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://dimli.com.tr" },
    { "@type": "ListItem", position: 2, name: "Hakkımızda", item: "https://dimli.com.tr/hakkimizda" },
  ],
};

export default function HakkimizdaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="pt-20 md:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <Reveal className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-medium mb-4">
              Hakkımızda
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Amatör futbolun <span className="text-turf-500">dijital sahası</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Dimli; rakip bulmayı, saha kiralamayı, takım yönetimini ve maç organizasyonunu tek bir
              uygulamada toplar. Amacımız, halı sahaya çıkmanı kolaylaştırmak — telefon trafiği ve dağınık
              gruplar olmadan, her şey tek yerde.
            </p>
          </Reveal>

          {/* Story */}
          <Reveal className="grid md:grid-cols-2 gap-5 mb-16">
            <div className="p-7 rounded-2xl bg-pitch-surface border border-slate-700/50">
              <h2 className="text-white font-bold text-xl mb-3">Neden Dimli?</h2>
              <p className="text-slate-300/90 text-sm leading-relaxed">
                Halı saha oyunu; rakip aramak, saha bulmak, eksik oyuncu tamamlamak ve herkesle haberleşmek
                gibi dağınık adımlarla doludur. Dimli bu adımları tek akışta birleştirir: ilan ver, rakip bul,
                sahayı ayarla, joker çağır ve sahaya çık.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-pitch-surface border border-slate-700/50">
              <h2 className="text-white font-bold text-xl mb-3">Misyonumuz</h2>
              <p className="text-slate-300/90 text-sm leading-relaxed">
                Türkiye'deki her mahalleyi, her takımı ve her sahayı dijital olarak bir araya getirmek.
                Oyuncular için daha çok maç, işletmeler için daha yüksek doluluk ve herkes için daha güvenli
                bir topluluk.
              </p>
            </div>
          </Reveal>

          {/* Values */}
          <Reveal className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Değerlerimiz</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full p-6 rounded-2xl bg-pitch-surface border border-slate-700/50 flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-turf-500/10 border border-turf-500/20 flex items-center justify-center text-turf-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={v.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1.5">{v.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* CTA */}
          <Reveal className="p-8 sm:p-10 rounded-3xl bg-turf-500/5 border border-turf-500/20 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Sen de sahaya çık</h2>
            <p className="text-slate-400 mb-7 max-w-lg mx-auto">
              Dimli'yi indir, takımını kur ve ilk maçını dakikalar içinde ayarla.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/indir"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-turf-600 hover:bg-turf-500 text-white font-bold transition-colors"
              >
                Uygulamayı İndir
              </Link>
              <Link
                href="/is-ortagi"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-400 font-bold hover:bg-ember-500/20 transition-colors"
              >
                İşletme misin? İş Ortağı Ol
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
