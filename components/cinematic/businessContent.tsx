/**
 * İşletme sayfası (is-ortagi) metin/ikon içeriği — TEK KAYNAK.
 * Sinematik bölümler (BusinessExperience), statik fallback (BusinessStatic)
 * ve fiyatlandırma DOM bölümü buradan okur. Eski app/is-ortagi/page.tsx'ten
 * taşındı, metinler birebir korunmuştur.
 */

export const PLANS = [
  {
    pitchCount: 1 as number | string,
    planName: "Starter",
    price: "₺1.709,99",
    popular: false,
    features: [
      "1 saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
  {
    pitchCount: 2 as number | string,
    planName: "Basic",
    price: "₺2.999,99",
    popular: false,
    features: [
      "2 saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
  {
    pitchCount: 3 as number | string,
    planName: "Pro",
    price: "₺3.849,99",
    popular: true,
    features: [
      "3 saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
  {
    pitchCount: 4 as number | string,
    planName: "Business",
    price: "₺4.649,99",
    popular: false,
    features: [
      "4 saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
  {
    pitchCount: "5+" as number | string,
    planName: "Enterprise",
    price: "₺5.399,99",
    popular: false,
    features: [
      "5 ve üzeri saha yönetimi",
      "Rezervasyon paneli",
      "Gelir & istatistik takibi",
      "Müşteri değerlendirmeleri",
      "Dimli listesinde görünürlük",
      "Anlık bildirimler",
    ],
  },
];

export const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Rezervasyon Yönetimi",
    description:
      "Gelen rezervasyonları onayla, reddet ya da düzenle. Saat bazlı doluluk takvimiyle çakışmaları anında fark et.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Gelir Takibi",
    description:
      "Günlük, haftalık ve aylık ciro özetlerini tek bakışta gör. Hangi sahanın ne kadar kazandırdığını analiz et.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Müşteri Değerlendirmeleri",
    description:
      "Dimli kullanıcılarının bıraktığı puanları ve yorumları gör. Yüksek puan, daha fazla müşteri demektir.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Saha Konfigürasyonu",
    description:
      "Sahanın özelliklerini, saatlik ücretini ve çalışma saatlerini uygulama üzerinden kolayca güncelle.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Anlık Bildirimler",
    description:
      "Yeni rezervasyon, iptal ve değerlendirme anında bildirimi gelsin. Hiçbir şeyi kaçırma.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Tam Mobil Yönetim",
    description:
      "İşletmeni her yerden yönet. Dimli uygulaması iOS ve Android'de sana özel işletme paneli sunar.",
  },
];

export const STEPS = [
  {
    number: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Dimli'yi İndir",
    description: "App Store veya Google Play'den Dimli uygulamasını telefonuna ücretsiz olarak yükle.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "İşletme Paneline Geç",
    description: "Giriş ekranında \"İşletme Paneline Geç\" butonuna dokun. Oyuncu ve işletme girişleri ayrıdır.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "İşletmeni Kaydet",
    description: "İşletme adı, adres ve iletişim bilgilerini gir. Ekibimiz başvurunu inceler ve onaylar.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Planını Seç ve Abone Ol",
    description: "Kaç sahanız varsa o plana abone ol. Ödeme App Store veya Google Play üzerinden güvenli şekilde yapılır. İlk 3 ay ücretsiz.",
  },
  {
    number: "05",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sahalarını Ekle, Yayına Gir",
    description: "Saha bilgilerini, ücretleri ve çalışma saatlerini gir. Dimli kullanıcıları seni anında keşfetmeye başlar.",
  },
];

/** Sinematik bölümlerde kullanılan işletme ekran görüntüleri (640w webp). */
export const SHOTS = {
  rezervasyon: { src: "/3d/tex/isletme.webp", alt: "Dimli işletme rezervasyon paneli" },
  istatistik: { src: "/3d/tex/isletme3.webp", alt: "Dimli işletme gelir ve istatistik ekranı" },
  giris: { src: "/3d/tex/isletme1.webp", alt: "Dimli işletme paneli girişi" },
  abonelik: { src: "/3d/tex/isletme2.webp", alt: "Dimli işletme abonelik yönetimi" },
} as const;
