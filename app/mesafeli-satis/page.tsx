import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi — Dimli",
  description:
    "Dimli işletme aboneliği için mesafeli satış sözleşmesi ve ön bilgilendirme: taraflar, hizmet, ücret, ödeme, otomatik yenileme ve cayma hakkı.",
  alternates: { canonical: "/mesafeli-satis" },
};

const sections = [
  {
    title: "1. Taraflar ve Konu",
    content: `İşbu Mesafeli Satış Sözleşmesi ve Ön Bilgilendirme Formu; bir yanda hizmet sağlayıcı **Mehmet Uçar** ("Dimli"), diğer yanda Dimli işletme (halı saha) aboneliğini satın alan işletme sahibi ("Alıcı") arasında, Alıcı'nın uygulama üzerinden elektronik ortamda abonelik satın alması kapsamında düzenlenmiştir. Bu sözleşme, işletme abonelik hizmetini kapsar; ücretsiz kullanan bireysel oyuncuları kapsamaz.`,
  },
  {
    title: "2. Hizmetin Tanımı",
    content: `Dimli işletme aboneliği; halı saha işletmelerinin sahalarını uygulamada listeleyebilmesi, rezervasyon taleplerini yönetebilmesi, doluluk ve gelir takibini yapabilmesi ve ilgili panel özelliklerini kullanabilmesini sağlayan, dijital olarak sunulan bir yazılım hizmetidir. Abonelik planları ve kapsadıkları saha sayısı, satın alma anında uygulamada belirtilir.`,
  },
  {
    title: "3. Ücret ve Ödeme",
    content: `Abonelik ücretleri, plan bazında uygulamada ve dimli.com.tr/is-ortagi sayfasında güncel olarak gösterilir. Ödemeler, **Apple App Store veya Google Play** üzerinden, ilgili platformun ödeme altyapısıyla tahsil edilir. Dimli, kart/ödeme bilgilerinizi saklamaz; bu bilgiler doğrudan Apple/Google tarafından işlenir.

Kampanya dönemlerinde (ör. "ilk 3 ay ücretsiz") deneme süresi ve sonrasında geçerli olacak ücret, satın alma ekranında açıkça belirtilir.`,
  },
  {
    title: "4. Otomatik Yenileme",
    content: `Abonelik, aksi belirtilmedikçe dönem sonunda otomatik olarak yenilenir ve ücreti ilgili mağaza hesabınızdan tahsil edilir. Otomatik yenilemeyi, dönem bitiminden en az 24 saat önce **Apple App Store veya Google Play hesap ayarlarınızdan** kapatabilirsiniz. Yenilemenin kapatılması, mevcut dönemin sonunda aboneliği sonlandırır.`,
  },
  {
    title: "5. Cayma Hakkı",
    content: `Mesafeli Sözleşmeler Yönetmeliği uyarınca, elektronik ortamda anında ifa edilen ve tüketiciye anında teslim edilen dijital içerik/hizmetlerde, hizmetin ifasına başlanmasıyla birlikte cayma hakkının kullanılamayabileceği hâller mevcuttur.

Bununla birlikte iade, iptal ve geri ödeme talepleri, satın almanın yapıldığı **Apple App Store veya Google Play'in iade politikaları** kapsamında ilgili mağaza üzerinden değerlendirilir. Talepleriniz için ayrıca destek@dimli.com.tr adresine yazabilirsiniz.`,
  },
  {
    title: "6. Sözleşmenin Süresi ve Fesih",
    content: `Sözleşme, abonelik aktif olduğu sürece geçerlidir. Alıcı, aboneliğini dilediği zaman mağaza ayarlarından iptal edebilir. Dimli, kullanım şartlarına aykırılık hâlinde hizmeti askıya alma veya sonlandırma hakkını saklı tutar. Ayrıntılar için Kullanım Şartları sayfasını inceleyiniz.`,
  },
  {
    title: "7. İletişim",
    content: `Sözleşme ve abonelik ile ilgili sorularınız için:

**E-posta:** destek@dimli.com.tr
**Web:** dimli.com.tr/iletisim`,
  },
];

export default function MesafeliSatisPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-400 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              İşletme Aboneliği
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Mesafeli Satış Sözleşmesi</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              İşletme aboneliğine ilişkin ön bilgilendirme; hizmet, ücret, ödeme, otomatik yenileme ve iade koşulları.
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
