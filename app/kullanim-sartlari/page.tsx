import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kullanım Şartları — Dimli",
  description:
    "Dimli uygulamasının kullanım şartları, abonelik koşulları ve son kullanıcı lisans sözleşmesi (EULA).",
  alternates: { canonical: "/kullanim-sartlari" },
};

const sections = [
  {
    title: "1. Taraflar ve Kapsam",
    content: `Bu Kullanım Şartları ("Şartlar"), **Mehmet Uçar** (bireysel geliştirici, bundan böyle "Dimli") tarafından sunulan Dimli mobil uygulaması ve web sitesi ("Platform") ile bu Platform'u kullanan gerçek veya tüzel kişiler ("Kullanıcı") arasındaki hukuki ilişkiyi düzenler.

Platform'u indirerek, yükleyerek veya kullanmaya başlayarak işbu Şartları kabul etmiş olursunuz. Şartları kabul etmiyorsanız Platform'u kullanmayınız.`,
  },
  {
    title: "2. Hizmetin Tanımı",
    content: `Dimli; halı saha rezervasyonu, rakip takım eşleştirme, takım yönetimi, joker oyuncu havuzu ve Fair Play puanlama gibi hizmetleri sunan dijital bir spor platformudur. Platform, bireysel oyunculara ve halı saha işletmelerine yönelik ayrı kullanıcı rolleri içerir.

Dimli, yalnızca bir aracı platform olup; sahalar arasındaki rezervasyon, maç ve anlaşmazlıklardan doğrudan sorumlu değildir.`,
  },
  {
    title: "3. Hesap Oluşturma ve Güvenlik",
    content: `Platform'u kullanabilmek için kayıt olmanız ve doğru, güncel bilgiler sağlamanız gerekmektedir. Hesap güvenliğinizden siz sorumlusunuz; şifrenizi kimseyle paylaşmayınız.

18 yaşından küçük kullanıcıların Platform'u kullanması için yasal temsilcilerinin onayı gereklidir. Dimli, sahte veya yanıltıcı bilgilerle oluşturulan hesapları askıya alma veya silme hakkını saklı tutar.`,
  },
  {
    title: "4. Abonelik ve Ödeme Şartları",
    content: `**4.1 Ücretli Planlar**
İşletme hesapları için Starter, Basic, Pro, Business ve Enterprise planları mevcuttur. Tüm planlar aylık abonelik modeliyle sunulmaktadır.

**4.2 Otomatik Yenileme**
Aboneliğiniz, mevcut dönem bitmeden en az 24 saat önce iptal edilmezse otomatik olarak yenilenir. Yenileme tutarı, satın alma sırasında gösterilen fiyat üzerinden Apple App Store veya Google Play hesabınızdan tahsil edilir.

**4.3 Deneme Süresi**
Belirli koşullarda ücretsiz deneme süresi sunulabilir. Deneme süresi sona ermeden iptal etmezseniz ücretli aboneliğe geçişiniz otomatik gerçekleşir.

**4.4 İptal**
iOS kullanıcıları: App Store → Hesap → Abonelikler üzerinden; Android kullanıcıları: Google Play → Abonelikler üzerinden iptal yapabilir. İptal işlemi mevcut dönemin sonunda geçerli olur; kalan süre için iade yapılmaz.

**4.5 İadeler**
Yürürlükteki App Store veya Google Play iade politikaları geçerlidir. Dimli kendi başına iade işlemi gerçekleştirmez.`,
  },
  {
    title: "5. Kullanıcı Yükümlülükleri",
    content: `Platform'u kullanırken aşağıdaki kurallara uymayı kabul edersiniz:

• Yanlış, yanıltıcı veya başkasına ait bilgileri kullanmamak
• Hizmetin normal işleyişini bozacak eylemlerden kaçınmak (spam, bot, otomatik istek vb.)
• Diğer kullanıcılara hakaret, taciz veya tehdit içeren iletişimden kaçınmak
• Platform'u yalnızca yasal amaçlarla kullanmak
• Dimli'nin yazılı onayı olmaksızın içerikleri kopyalamamak, çoğaltmamak veya dağıtmamak`,
  },
  {
    title: "6. Kullanıcı Tarafından Oluşturulan İçerik ve Moderasyon Politikası",
    content: `Kullanıcılar tarafından yüklenen profil bilgileri, yorumlar, puanlar ve maç verileri ("Kullanıcı İçeriği") üzerindeki haklar Kullanıcı'ya aittir. Ancak Kullanıcı, Dimli'ye bu içerikleri Platform dahilinde kullanma, görüntüleme ve dağıtma için geri alınamaz, ücretsiz bir lisans vermektedir.

**Dimli, uygunsuz içerik ve kullanıcı davranışına sıfır tolerans politikası uygular.**

Kullanıcılar aşağıdaki nitelikte içerik paylaşmamalıdır:

• Hakaret, nefret söylemi, taciz veya tehdit içeren mesajlar
• Müstehcen veya yasadışı materyaller
• Başkalarının kişisel bilgileri veya rızasız paylaşılan içerikler
• Spam, yanıltıcı bilgi veya dolandırıcılık amaçlı içerikler

**Şikayet ve Engelleme Mekanizması**

Kullanıcılar, uygunsuz içerikleri uygulama içindeki "Bildir" özelliğiyle doğrudan ekibimize iletebilir. Ayrıca istemedikleri kullanıcıları anında engelleyebilir; engellenen kullanıcının mesajları engelleyen kişinin beslemesinden derhal kaldırılır.

Bildirilen içerikler **24 saat içinde** incelenir. Kural ihlali tespit edilen kullanıcılar platformdan çıkarılır, ilgili içerikler kaldırılır. Dimli, topluluk kurallarını veya yürürlükteki mevzuatı ihlal eden içerikleri önceden bildirim yapmaksızın kaldırma hakkını saklı tutar.`,
  },
  {
    title: "7. Fikri Mülkiyet",
    content: `Platform'daki tüm tasarım, yazılım, marka, logo ve içerikler Dimli'ye veya lisans veren üçüncü taraflara aittir. İşbu Şartlar size yalnızca kişisel, devredilemez ve sınırlı bir kullanım hakkı tanır; aksi öngörülmedikçe herhangi bir fikri mülkiyet hakkı devredilmez.`,
  },
  {
    title: "8. Sorumluluk Sınırlaması",
    content: `Dimli, Platform üzerinden gerçekleştirilen rezervasyonlar, maçlar veya kullanıcılar arası anlaşmazlıklardan sorumlu değildir. Platform "olduğu gibi" sunulmakta olup; kesintisiz veya hatasız çalışacağı garanti edilmez.

Yürürlükteki Türk hukuku çerçevesinde zorunlu tutulanlar dışında, Dimli'nin sorumluluğu hiçbir koşulda ödenen abonelik bedelini aşamaz.`,
  },
  {
    title: "9. Hesap Askıya Alma ve Fesih",
    content: `Dimli, bu Şartları ihlal eden kullanıcıların hesaplarını önceden bildirmeksizin askıya alabilir veya silebilir. Kullanıcılar, hesaplarını dilediği zaman Platform üzerinden silebilir. Hesap silinmesi, aktif aboneliğin otomatik iptali anlamına gelmez; iptal için ilgili uygulama mağazasında ayrıca işlem yapılmalıdır.`,
  },
  {
    title: "10. Değişiklikler",
    content: `Dimli, bu Şartları zaman zaman güncelleyebilir. Önemli değişiklikler uygulama içi bildirim veya e-posta ile duyurulacaktır. Değişiklikler yayınlandıktan sonra Platform'u kullanmaya devam etmeniz yeni Şartları kabul ettiğiniz anlamına gelir.`,
  },
  {
    title: "11. Uygulanacak Hukuk ve Uyuşmazlık Çözümü",
    content: `Bu Şartlar Türk hukukuna tabidir. Taraflar arasında doğabilecek uyuşmazlıklarda İstanbul Merkez Mahkemeleri ve İcra Daireleri yetkilidir.`,
  },
  {
    title: "12. İletişim",
    content: `Bu Şartlara ilişkin sorularınız için:

**E-posta:** destek@dimli.com.tr
**Web:** dimli.com.tr/iletisim`,
  },
];

export default function KullanimSartlariPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 md:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Son Kullanıcı Lisans Sözleşmesi (EULA)
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Kullanım Şartları
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Dimli platformunu kullanarak kabul ettiğiniz şartlar ve koşullar.
            </p>
            <div className="mt-4 text-slate-500 text-sm">
              Son güncellenme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="p-6 rounded-2xl bg-pitch-surface border border-slate-700/50 animate-fade-in">
                <h2 className="text-white font-bold text-lg mb-4">{section.title}</h2>
                <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {section.content.split("**").map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="text-white font-semibold">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-10 p-6 rounded-2xl bg-turf-500/5 border border-turf-500/20">
            <h3 className="text-turf-400 font-bold mb-2">Sorularınız için</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kullanım şartlarına ilişkin sorularınızı <strong className="text-white">destek@dimli.com.tr</strong> adresine
              yazabilir veya{" "}
              <a href="/iletisim" className="text-turf-500 hover:text-turf-400 underline underline-offset-2">
                iletişim formunu
              </a>{" "}
              kullanabilirsiniz.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
