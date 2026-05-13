import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KVKK & Gizlilik Politikası — Dimli",
  description:
    "Dimli uygulamasının kişisel verilerin korunması kanunu (KVKK) kapsamındaki gizlilik politikası ve aydınlatma metni.",
};

const sections = [
  {
    title: "1. Veri Sorumlusu",
    content: `Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla **Mehmet Uçar** (bireysel geliştirici, "Dimli") tarafından hazırlanmıştır.

**Veri Sorumlusu:** Mehmet Uçar
**Web:** dimli.com.tr
**İletişim:** destek@dimli.com.tr

Dimli uygulaması ve web sitesi ("Platform") aracılığıyla toplanan kişisel verileriniz, işbu Gizlilik Politikası ve KVKK'nın öngördüğü usul ve esaslara uygun olarak işlenmektedir.`,
  },
  {
    title: "2. Toplanan Kişisel Veriler",
    content: `Platform'u kullanmanız sırasında aşağıdaki kişisel verileriniz toplanabilir:

• **Kimlik Verileri:** Ad, soyad, kullanıcı adı
• **İletişim Verileri:** E-posta adresi, telefon numarası
• **Konum Verileri:** Yakın saha ve takım araması için coğrafi konum bilgisi (yalnızca uygulama ön planda iken)
• **Kullanım Verileri:** Uygulama içi işlemler, maç geçmişi, puanlama bilgileri
• **Teknik Veriler:** Cihaz modeli, işletim sistemi, IP adresi, uygulama versiyonu`,
  },
  {
    title: "3. Kişisel Verilerin İşlenme Amaçları",
    content: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:

• Kullanıcı hesabı oluşturulması ve yönetilmesi
• Maç eşleştirme ve takım yönetimi hizmetlerinin sunulması
• Saha rezervasyon hizmetinin sağlanması
• Joker oyuncu havuzunun oluşturulması ve yönetilmesi
• Fair Play puanlama sisteminin işletilmesi
• Bildirim ve uygulama içi mesajlaşma hizmetlerinin sunulması
• Yasal yükümlülüklerin yerine getirilmesi
• Kullanıcı deneyiminin iyileştirilmesi ve hizmet kalitesinin artırılması`,
  },
  {
    title: "4. Kişisel Verilerin İşlenme Hukuki Sebebi",
    content: `Kişisel verileriniz;

• Sözleşmenin kurulması veya ifası için gerekli olması (KVKK m. 5/2-c)
• Veri sorumlusunun hukuki yükümlülüklerini yerine getirmesi (KVKK m. 5/2-ç)
• Meşru menfaatler doğrultusunda (KVKK m. 5/2-f)
• Açık rızanıza dayanılarak (KVKK m. 5/1)

hukuki sebeplerine dayanılarak işlenmektedir.`,
  },
  {
    title: "5. Kişisel Verilerin Aktarımı",
    content: `Kişisel verileriniz; hizmetin sunulması amacıyla yurt içi ve yurt dışındaki iş ortakları, altyapı sağlayıcıları (bulut depolama, sunucu hizmetleri) ile yetkili kamu kurum ve kuruluşlarıyla paylaşılabilir.

Yurt dışına veri aktarımı, KVKK'nın 9. maddesinde belirtilen güvenceler sağlandığında gerçekleştirilmektedir.

**SMS Doğrulama Altyapısı:**
Telefon numaranızı doğrulamak amacıyla kullanılan SMS hizmeti, **Netgsm Bilişim Hizmetleri A.Ş.** altyapısı üzerinden iletilmektedir. Bu hizmet kapsamında telefon numaranız yalnızca doğrulama kodunun iletilmesi için işlenmekte olup üçüncü taraflarla paylaşılmamaktadır.

SMS mesajları, teknik altyapı gereklilikleri nedeniyle **"Seyda"** gönderen kimliğiyle (başlık/header) iletilmektedir. Bu gönderen adı Dimli uygulamasına ait teknik bir altyapı tanımlamasıdır; farklı bir kişi veya kuruluşla ilgisi bulunmamaktadır.`,
  },
  {
    title: "6. Veri İşleyenler",
    content: `Hizmetin sunulması amacıyla aşağıdaki üçüncü taraf veri işleyenlerden yararlanılmaktadır:

• **Netgsm Bilişim Hizmetleri A.Ş.** — Telefon numarası doğrulama (OTP) SMS hizmeti
• **Bulut altyapı sağlayıcısı** — Uygulama sunucusu ve veritabanı hizmetleri

Bu veri işleyenler, yalnızca hizmetin ifası için gerekli ölçüde ve KVKK ile uygulama gizlilik politikamız kapsamında veri işlemektedir.`,
  },
  {
    title: "7. Kişisel Verilerin Saklanma Süresi",
    content: `Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve yasal yükümlülükler kapsamında öngörülen sürelere uygun olarak saklanmaktadır.

Hesabınızı silmeniz durumunda kişisel verileriniz, yasal saklama süreleri saklı kalmak kaydıyla 30 gün içinde sistemlerimizden silinmektedir.`,
  },
  {
    title: "8. KVKK Kapsamındaki Haklarınız",
    content: `KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenmişse buna ilişkin bilgi talep etme
• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
• Eksik veya yanlış işlenmişse düzeltilmesini isteme
• KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme
• İtiraz etme ve zararın giderilmesini talep etme

Bu haklarınızı kullanmak için **destek@dimli.com.tr** adresine e-posta gönderebilirsiniz.`,
  },
  {
    title: "9. Çerezler (Cookies)",
    content: `Web sitemiz temel işlevselliği sağlamak amacıyla zorunlu çerezler kullanmaktadır. Analitik veya pazarlama amaçlı çerezler yalnızca açık onayınız alındıktan sonra kullanılmaktadır.`,
  },
  {
    title: "10. İletişim",
    content: `Gizlilik politikamız hakkında sorularınız veya kişisel verilerinize ilişkin talepleriniz için:

**E-posta:** destek@dimli.com.tr
**Web:** dimli.com.tr/iletisim`,
  },
  {
    title: "11. Politika Güncellemeleri",
    content: `Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler uygulama içi bildirim veya e-posta yoluyla duyurulacaktır. Son güncelleme tarihini bu sayfanın altında bulabilirsiniz.`,
  },
];

export default function KvkkPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 md:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              KVKK Uyumlu
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Gizlilik Politikası
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında şeffaf bilgi sunuyoruz.
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
            <h3 className="text-turf-400 font-bold mb-2">KVKK Başvuruları</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kişisel verilerinize ilişkin taleplerinizi <strong className="text-white">destek@dimli.com.tr</strong> adresine
              yazabilir veya{" "}
              <a href="/iletisim" className="text-turf-500 hover:text-turf-400 underline underline-offset-2">
                iletişim formunu
              </a>{" "}
              kullanabilirsiniz. Talebinizi en geç 30 gün içinde yanıtlarız.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
