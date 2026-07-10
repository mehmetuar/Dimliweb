import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Çerez Politikası — Dimli",
  description:
    "Dimli web sitesinde kullanılan çerezler, türleri, amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.",
  alternates: { canonical: "/cerez-politikasi" },
};

const sections = [
  {
    title: "1. Çerez Nedir?",
    content: `Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Çerezler, sitenin düzgün çalışmasını sağlamak, tercihlerinizi hatırlamak ve deneyiminizi iyileştirmek için kullanılır.`,
  },
  {
    title: "2. Hangi Çerezleri Kullanıyoruz?",
    content: `Dimli web sitesi (dimli.com.tr), yalnızca sitenin çalışması için gerekli/işlevsel çerezleri kullanır:

• **Zorunlu Çerezler:** Sitenin temel işlevlerinin çalışması için gereklidir (ör. güvenlik, sayfa yönlendirme). Bu çerezler olmadan site düzgün çalışmaz.
• **İşlevsel Çerezler / Yerel Depolama:** Tercihlerinizi hatırlamak için kullanılır (ör. çerez bilgilendirmesini kapatma tercihiniz tarayıcınızın yerel depolamasında saklanır).

Şu anda web sitemizde **reklam veya üçüncü taraf pazarlama çerezi kullanılmamaktadır.** İleride analitik veya pazarlama çerezleri eklenmesi hâlinde, bunlar yalnızca açık onayınız alındıktan sonra çalıştırılacaktır.`,
  },
  {
    title: "3. Mobil Uygulamadaki Durum",
    content: `Bu Çerez Politikası dimli.com.tr web sitesini kapsar. Mobil uygulama, çerez yerine cihaz üzerinde yerel depolama ve oturum bilgilerini kullanır. Uygulamadaki kişisel veri işleme hakkında bilgi için Gizlilik Politikası'nı inceleyebilirsiniz.`,
  },
  {
    title: "4. Çerezleri Nasıl Yönetebilirsiniz?",
    content: `Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Ancak zorunlu çerezleri engellemeniz durumunda sitenin bazı bölümleri düzgün çalışmayabilir.

Çoğu tarayıcıda çerez yönetimi "Ayarlar → Gizlilik" bölümünde yer alır. Ayrıca sitedeki çerez bilgilendirme kutusundan tercihinizi belirtebilirsiniz.`,
  },
  {
    title: "5. Güncellemeler ve İletişim",
    content: `Bu Çerez Politikası zaman zaman güncellenebilir. Sorularınız için:

**E-posta:** destek@dimli.com.tr
**Web:** dimli.com.tr/iletisim

Ayrıca **Gizlilik Politikası** (dimli.com.tr/kvkk) sayfamızı da inceleyebilirsiniz.`,
  },
];

export default function CerezPolitikasiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z M8 9h.01M15 15h.01M9.5 14.5h.01M14 9.5h.01" />
              </svg>
              Çerez Bilgilendirmesi
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Çerez Politikası</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Web sitemizde hangi çerezleri, neden kullandığımızı ve tercihlerinizi nasıl yönetebileceğinizi açıklıyoruz.
            </p>
            <div className="mt-4 text-slate-500 text-sm">
              Son güncellenme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="p-6 rounded-2xl bg-pitch-surface border border-slate-700/50">
                <h2 className="text-white font-bold text-lg mb-4">{section.title}</h2>
                <div className="text-slate-300/90 text-sm leading-relaxed whitespace-pre-line">
                  {section.content.split("**").map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="text-white font-semibold">{part}</strong>
                    ) : (
                      part
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
