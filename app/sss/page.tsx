import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular — Dimli",
  description:
    "Dimli hakkında sık sorulan sorular: Dimli nedir, ücretsiz mi, nasıl saha kiralarım, rakip nasıl bulurum, telefonum kiminle paylaşılır ve işletme olarak nasıl katılırım?",
  alternates: { canonical: "/sss" },
};

// answer: JSON-LD ve görünür metin için düz metin. extra: yalnızca görünür ek (link vb.).
const faqs: { q: string; a: string; extra?: React.ReactNode }[] = [
  {
    q: "Dimli nedir?",
    a: "Dimli, halı saha deneyimini tek uygulamada toplayan dijital bir platformdur. Rakip bulur, saha kiralar, takımını yönetir, joker oyuncu bulur ve maçını organize edersin.",
  },
  {
    q: "Dimli ücretsiz mi?",
    a: "Evet, oyuncular için Dimli ücretsizdir. iOS ve Android'de indirip kullanabilirsin. Halı saha işletmeleri için ise abonelik planları vardır (ilk 3 ay ücretsiz).",
  },
  {
    q: "Nasıl saha kiralarım / rezervasyon yaparım?",
    a: "Uygulamada konumuna yakın sahaları listeler, saat bazlı doluluğu görür ve müsait bir saat için rezervasyon talebi gönderirsin. İşletme talebini onayladığında rezervasyonun kesinleşir.",
  },
  {
    q: "Rakip nasıl bulurum?",
    a: "Kendi maç ilanını oluşturabilir ya da yakınındaki takımların ilanlarına meydan okuyabilirsin. İki taraf da onayladığında maç grubu otomatik oluşur.",
  },
  {
    q: "Joker nedir, nasıl çalışır?",
    a: "Takımında eksik oyuncu varsa, pozisyon ve seviyeye göre joker oyuncu havuzundan uygun oyuncuyu davet edersin. Joker kabul edince maç grubuna katılır.",
  },
  {
    q: "Telefon numaram kiminle paylaşılır?",
    a: "Telefon numaran yalnızca organizasyonun tarafları arasında iletişim için paylaşılır: rezervasyon talebinde takım kaptanının numarası ilgili işletmeye; maç eşleşmesinde her iki kaptanın numarası maç grubundaki taraflara görünür. İşletmenin iletişim telefonu ise arayabilmen için kullanıcılara açıktır. Ayrıntılar Gizlilik Politikası'nda.",
    extra: (
      <>
        {" "}
        <Link href="/kvkk" className="text-turf-400 hover:text-turf-300 underline underline-offset-2">
          Gizlilik Politikası'nı oku
        </Link>
        .
      </>
    ),
  },
  {
    q: "Halı saha işletmesiyim, nasıl katılırım?",
    a: "İşletme kaydını uygulamadan yapar, sahalarını ve çalışma saatlerini tanımlarsın. Rezervasyonları, doluluğu ve geliri tek panelden yönetirsin. İlk 3 ay ücretsizdir.",
    extra: (
      <>
        {" "}
        <Link href="/is-ortagi" className="text-ember-400 hover:text-ember-300 underline underline-offset-2">
          İş Ortağı sayfasına göz at
        </Link>
        .
      </>
    ),
  },
  {
    q: "Hangi cihazlarda çalışır?",
    a: "Dimli, iOS ve Android telefonlarda çalışır. App Store veya Google Play'den ücretsiz indirebilirsin.",
  },
  {
    q: "Fair Play puanı nedir?",
    a: "Her maçtan sonra taraflar birbirini ve sahayı değerlendirir. Bu puanlar güvenilir bir topluluk oluşturur; kiminle ve nerede oynayacağını bilerek adım atarsın.",
  },
  {
    q: "Hesabımı nasıl silerim?",
    a: "Uygulama içindeki hesap ayarlarından hesabını silebilirsin. Silme sonrası kişisel verilerin, yasal saklama süreleri saklı kalmak kaydıyla makul süre içinde sistemden kaldırılır.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SssPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="pt-20 md:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <Reveal className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-medium mb-4">
              Yardım
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Sıkça Sorulan Sorular</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Dimli hakkında en çok merak edilenler. Aradığını bulamazsan{" "}
              <Link href="/iletisim" className="text-turf-400 hover:text-turf-300 underline underline-offset-2">
                bize yazabilirsin
              </Link>
              .
            </p>
          </Reveal>

          {/* FAQ list — native <details> (JS gerektirmez, erişilebilir) */}
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-pitch-surface border border-slate-700/50 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-white font-semibold hover:bg-white/[0.02] transition-colors">
                  <span>{f.q}</span>
                  <svg
                    className="w-5 h-5 shrink-0 text-turf-500 transition-transform duration-200 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 -mt-1 text-slate-300/90 text-sm leading-relaxed">
                  {f.a}
                  {f.extra}
                </div>
              </details>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
