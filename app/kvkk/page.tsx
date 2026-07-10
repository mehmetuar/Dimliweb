import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KVKK & Gizlilik Politikası — Dimli",
  description:
    "Dimli'nin KVKK aydınlatma metni ve gizlilik politikası: hangi kişisel veriler toplanır, nasıl işlenir ve kiminle (diğer kullanıcılar, işletmeler, hizmet sağlayıcılar) paylaşılır.",
  alternates: { canonical: "/kvkk" },
};

const sections = [
  {
    title: "1. Veri Sorumlusu",
    content: `Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla **Mehmet Uçar** (bireysel geliştirici, "Dimli") tarafından hazırlanmıştır.

**Veri Sorumlusu:** Mehmet Uçar
**Web:** dimli.com.tr
**İletişim / Başvuru:** destek@dimli.com.tr

Dimli mobil uygulaması ve web sitesi ("Platform") aracılığıyla toplanan kişisel verileriniz, işbu Gizlilik Politikası ve KVKK'nın öngördüğü usul ve esaslara uygun olarak işlenmektedir.`,
  },
  {
    title: "2. Toplanan Kişisel Veriler",
    content: `Platform'u kullanmanız sırasında aşağıdaki kişisel verileriniz toplanabilir:

• **Kimlik Verileri:** Ad, soyad, kullanıcı adı
• **İletişim Verileri:** E-posta adresi, telefon numarası
• **Konum Verileri:** Yakın saha ve rakip/joker araması için coğrafi konum bilgisi (yalnızca uygulama ön planda iken, izin verirseniz)
• **Kullanım Verileri:** Uygulama içi işlemler, maç ve rezervasyon geçmişi, Fair Play puanlama bilgileri, sohbet mesajları
• **Görsel Veriler:** Profil fotoğrafı, takım/saha görselleri (yüklerseniz)
• **Teknik Veriler:** Cihaz modeli, işletim sistemi, IP adresi, uygulama versiyonu, bildirim (push) cihaz kimliği`,
  },
  {
    title: "3. Kişisel Verilerin İşlenme Amaçları",
    content: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:

• Kullanıcı/işletme hesabı oluşturulması ve yönetilmesi
• Maç eşleştirme, takım yönetimi ve rakip bulma hizmetlerinin sunulması
• Saha rezervasyon taleplerinin işletmelere iletilmesi ve organizasyonun sağlanması
• **Maç ve rezervasyon organizasyonu kapsamında taraflar arası iletişimin (ör. telefonla arama) sağlanması**
• Joker oyuncu havuzunun oluşturulması ve yönetilmesi
• Fair Play puanlama sisteminin işletilmesi
• Bildirim ve uygulama içi mesajlaşma hizmetlerinin sunulması
• Abonelik ve ödeme süreçlerinin yürütülmesi (işletmeler için)
• Yasal yükümlülüklerin yerine getirilmesi ve hizmet kalitesinin artırılması`,
  },
  {
    title: "4. Kişisel Verilerin İşlenme Hukuki Sebebi",
    content: `Kişisel verileriniz;

• Sözleşmenin kurulması veya ifası için gerekli olması (KVKK m. 5/2-c)
• Veri sorumlusunun hukuki yükümlülüklerini yerine getirmesi (KVKK m. 5/2-ç)
• Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması (KVKK m. 5/2-e)
• Meşru menfaatler doğrultusunda (KVKK m. 5/2-f)
• Gerekli hâllerde açık rızanıza dayanılarak (KVKK m. 5/1)

hukuki sebeplerine dayanılarak işlenmektedir.`,
  },
  {
    title: "5. Verilerin Diğer Kullanıcılar ve İşletmelerle Paylaşımı",
    content: `Dimli, oyuncuları, takımları ve halı saha işletmelerini bir araya getiren bir organizasyon platformudur. Bu nedenle bazı bilgileriniz, hizmetin doğası gereği ilgili diğer taraflarla paylaşılır. Bu paylaşımlar, maç ve rezervasyonun organize edilebilmesi ve tarafların birbirine ulaşabilmesi amacıyla yapılır:

• **Rezervasyon talebinde (kullanıcı → işletme):** Bir sahaya rezervasyon talebi oluşturduğunuzda, talebi değerlendirebilmesi ve sizinle iletişime geçebilmesi için **takım kaptanının adı ve telefon numarası** ilgili işletmenin paneline iletilir.

• **Maç eşleşmesinde (kullanıcı ↔ kullanıcı):** İki takım bir maçta eşleştiğinde, maçı koordine edebilmeniz için maç grubundaki taraflara **her iki takım kaptanının adı ve telefon numarası** görünür hâle gelir. Maç grubuna sonradan katılan joker oyuncular da bu bilgileri görebilir.

• **İşletme iletişim bilgisi (işletme → kullanıcılar):** Bir halı saha işletmesinin **iletişim telefonu**, rezervasyon yapabilmeniz için saha listelerinde ve ilgili sohbetlerde tüm kullanıcılara açık şekilde gösterilir.

• **Profil ve takım bilgileri:** Kullanıcı adınız, adınız, profil fotoğrafınız, takımınız, pozisyonunuz ve Fair Play puanınız gibi bilgiler; eşleştiğiniz rakiplere, takım arkadaşlarınıza veya ilgili işletmelere görünür olabilir. **Oyuncuların e-posta adresi ve tam konum (GPS) bilgisi diğer kullanıcılara gösterilmez.**

Telefon numaraları yalnızca ilgili organizasyonun tarafları arasında ve iletişim amacıyla paylaşılır; herkese açık bir rehber olarak yayımlanmaz.`,
  },
  {
    title: "6. Üçüncü Taraf Hizmet Sağlayıcılar (Veri İşleyenler)",
    content: `Hizmetin sunulabilmesi için aşağıdaki üçüncü taraf hizmet sağlayıcılardan (veri işleyen) yararlanılmaktadır. Bu sağlayıcılar verilerinizi yalnızca hizmetin ifası için gerekli ölçüde işler:

• **Netgsm Bilişim Hizmetleri A.Ş.** — BTK lisanslı SMS iletim altyapısı; telefon doğrulama (OTP) kodunun iletilmesi için telefon numaranız işlenir.
• **Seyda Tel İnşaat Mal. Emlak Otomotiv Tic. LTD ŞTİ.** — Netgsm SMS hattı hesap sahibi ("N. UCAR" gönderen adı); teknik iletim kanalıdır, kullanıcı verilerinize erişimi bulunmamaktadır (bkz. 7. bölüm).
• **Google Firebase (Firebase Cloud Messaging)** — Anlık bildirim (push) gönderimi; cihaz bildirim kimliği ile bildirim başlık/içeriği (ör. gönderen adı, mesaj önizlemesi) işlenir.
• **Cloudinary** — Görsel barındırma; profil fotoğrafı, takım ve saha görselleri saklanır.
• **RevenueCat + Apple App Store / Google Play** — İşletme aboneliği yönetimi ve ödeme; abonelik/satın alma kaydı işlenir. Ödeme kartı bilgileri doğrudan Apple/Google tarafından işlenir; Dimli kart bilgisi saklamaz.
• **Bulut sunucu ve veritabanı sağlayıcısı** — Uygulama sunucusu ve veritabanı barındırma hizmeti.

Not: Yakın saha/ilçe belirleme işlemi **sunucu tarafında çevrimdışı** yapılır; bu amaçla harici bir konum/harita servisine veri aktarılmaz.`,
  },
  {
    title: "7. SMS Doğrulama Altyapısı Hakkında",
    content: `Telefon numaranızı doğrulamak amacıyla gönderilen SMS'ler, **Netgsm** altyapısı üzerinden **"N. UCAR"** gönderen adıyla iletilir. Bu gönderen adı, Netgsm'deki SMS hattını tutan **Seyda Tel İnşaat Mal. Emlak Otomotiv Tic. LTD ŞTİ.** unvanlı firmanın hesabını temsil eder. Söz konusu firma, bireysel geliştiricinin doğrudan SMS hattı açamadığı dönemde bu hizmetin sunulabilmesi için kullanılan SMS altyapı hesap sahibidir.

Bu firma **kullanıcı verilerine erişmez;** telefon numaranız yalnızca Netgsm'nin teknik altyapısı üzerinden doğrulama (OTP) kodu iletimi için kullanılır. Telefon numaranız bu SMS hizmeti kapsamında pazarlama vb. başka bir amaçla kullanılmaz.`,
  },
  {
    title: "8. Yurt Dışına Veri Aktarımı",
    content: `Bazı hizmet sağlayıcıların sunucuları yurt dışında bulunabilir (örneğin bildirim için Google Firebase, görsel barındırma için Cloudinary, abonelik için RevenueCat/Apple/Google ve bulut sunucu hizmeti). Bu kapsamda kişisel verileriniz, ilgili hizmetin sağlanabilmesi için yurt dışına aktarılabilir.

Yurt dışına veri aktarımı, KVKK'nın 9. maddesinde öngörülen şartlar (açık rıza veya kanunda öngörülen diğer güvenceler) çerçevesinde gerçekleştirilmektedir.`,
  },
  {
    title: "9. Kişisel Verilerin Saklanma ve İmha Süresi",
    content: `Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve yasal yükümlülükler kapsamında öngörülen sürelere uygun olarak saklanır.

• **Hesap silme:** Hesabınızı sildiğinizde kişisel verileriniz, yasal saklama süreleri saklı kalmak kaydıyla makul süre içinde (30 gün) sistemlerimizden silinir.
• **Kayıt bütünlüğü:** Silme sonrasında; geçmiş maç, rezervasyon ve grup sohbeti kayıtlarının bütünlüğü için mesajlarınız gönderen kimliği anonim hâle getirilerek saklanabilir.
• **Sınırlı denetim kaydı:** Kötüye kullanım ve yasal yükümlülükler için, hesap silme işlemine ilişkin sınırlı bir kayıt (ör. ad, e-posta, telefon) denetim amacıyla tutulabilir. İşletme hesabı silindiğinde, geçmiş kayıtların gösterimi amacıyla işletme sahibinin ad/e-posta/telefon bilgisi arşiv amacıyla saklanabilir.`,
  },
  {
    title: "10. Reşit Olmayanların Verileri",
    content: `Platform'un kullanımı 18 yaş ve üzeri kullanıcılar için tasarlanmıştır. 18 yaşından küçük kullanıcıların Platform'u ancak veli/vasi onayıyla kullanması gerekir. Bir çocuğa ait kişisel verinin veli/vasi onayı olmaksızın işlendiğini fark ettiğimizde, ilgili veriyi sileriz. Bu tür bir durumu destek@dimli.com.tr adresine bildirebilirsiniz.`,
  },
  {
    title: "11. Çerezler",
    content: `Web sitemiz, yalnızca sitenin çalışması için gerekli/işlevsel çerezleri kullanır. Çerezlerin türleri, amaçları ve yönetimi hakkında ayrıntılı bilgi için **Çerez Politikası** sayfamızı inceleyebilirsiniz: dimli.com.tr/cerez-politikasi`,
  },
  {
    title: "12. KVKK Kapsamındaki Haklarınız",
    content: `KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenmişse buna ilişkin bilgi talep etme
• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
• Eksik veya yanlış işlenmişse düzeltilmesini isteme
• KVKK'nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme
• İşlenen verilerin münhasıran otomatik sistemlerle analizi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme
• Kanuna aykırı işleme nedeniyle zararınızın giderilmesini talep etme`,
  },
  {
    title: "13. Başvuru Usulü ve VERBİS",
    content: `Yukarıdaki haklarınıza ilişkin taleplerinizi, kimliğinizi tevsik edici bilgilerle birlikte **destek@dimli.com.tr** adresine e-posta ile veya dimli.com.tr/iletisim üzerinden iletebilirsiniz. Talebiniz, niteliğine göre en kısa sürede ve en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.

VERBİS (Veri Sorumluları Sicil Bilgi Sistemi) kayıt yükümlülüğü, veri sorumlusunun niteliği ve işleme ölçeğine göre değerlendirilmekte olup; kayıt yükümlülüğü doğduğu takdirde gerekli kayıt işlemleri yapılır.`,
  },
  {
    title: "14. İletişim ve Güncellemeler",
    content: `Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler uygulama içi bildirim veya e-posta yoluyla duyurulur; güncel sürümün tarihi bu sayfanın üstünde yer alır.

**E-posta:** destek@dimli.com.tr
**Web:** dimli.com.tr/iletisim`,
  },
];

export default function KvkkPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 md:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              KVKK Aydınlatma Metni
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Gizlilik Politikası
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Kişisel verilerinizin nasıl toplandığı, işlendiği ve <span className="text-white font-semibold">kiminle paylaşıldığı</span> hakkında şeffaf bilgi sunuyoruz.
            </p>
            <div className="mt-4 text-slate-500 text-sm">
              Son güncellenme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="p-6 rounded-2xl bg-pitch-surface border border-slate-700/50">
                <h2 className="text-white font-bold text-lg mb-4">{section.title}</h2>
                <div className="text-slate-300/90 text-sm leading-relaxed whitespace-pre-line">
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
          <div className="mt-8 p-6 rounded-2xl bg-turf-500/5 border border-turf-500/20">
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
