/**
 * Oyuncu sayfası metin/ikon içeriği — TEK KAYNAK.
 * Hem sinematik bölümler (PlayerExperience) hem statik fallback (PlayerStatic)
 * hem de app/page.tsx buradan okur. Eski app/page.tsx'ten taşındı, metinler
 * birebir korunmuştur.
 */

export const FEATURES = [
  {
    title: "Müsait Saatleri Anlık Gör",
    description:
      "Sahanın boş ve dolu saatlerini canlı takvimde gör, uygun saati seç ve anında rezervasyon yap. Onay durumunu da aynı ekrandan takip et.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Halı Saha Kiralama",
    description:
      "100'den fazla saha arasından konumuna en yakın müsait sahayı bul, anlık rezervasyon yap.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Joker Havuzu",
    description:
      "Takımından oyuncu eksik mi? Pozisyonuna ve seviyene uygun oyuncuları filtrele, anında davet et.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Fair Play Puanı",
    description:
      "Her maçtan sonra verilen puanlarla güvenilir bir topluluk oluştur. Fair Play skoru ile güvenle adım at.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Takımını Kur",
    description: "Uygulamayı indir, takımını oluştur, oyuncularını ekle. Konum ve seviyeni belirle.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sahayı Seç",
    description: "İşletmelerin değerlendirmelerine bak, ücretleri karşılaştır, uzaklığını gör. Müsait saati seç ve rezervasyon yap.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Maçını Ayarla",
    description: "Kendi aranızda oyna ya da ilanlar arasından rakip bul, meydan oku. Maç anında netleşir.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Takımınla Haberleş",
    description: "Her maça özel sohbet odası: maç saatine kadar anlık gelişmeleri takımınla paylaş. Onay, saat değişikliği, kadro — hepsi tek yerde.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Joker Ekle",
    description: "Son dakika adam eksiği mi var? Joker Havuzu'ndan pozisyonuna uygun oyuncuyu anında davet et.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Sahaya Çık",
    description: "Her şey tamam — takım hazır, saha kilitli. Sahaya çık, oyna ve kazanmanın keyfini çıkar.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/** Sinematik bölümlerde kullanılan ekran görüntüleri (640w webp). */
export const SHOTS = {
  sahalar: { src: "/3d/tex/sahalar.webp", alt: "Dimli saha bulma ekranı" },
  rezervasyon: { src: "/3d/tex/rezervasyon.webp", alt: "Dimli rezervasyon ekranı" },
  sohbet: { src: "/3d/tex/sohbet_kesinlesti.webp", alt: "Dimli takım sohbeti ekranı" },
  rakipIletisim: { src: "/3d/tex/rakiple_iletisim.webp", alt: "Dimli rakiple iletişim ekranı" },
  joker: { src: "/3d/tex/joker_havuzu.webp", alt: "Dimli joker havuzu ekranı" },
  macDegerlendirme: { src: "/3d/tex/mac_degerlendirme.webp", alt: "Dimli işletme puanlama ekranı" },
  rakipDegerlendirme: { src: "/3d/tex/rakip_degerlendirme.webp", alt: "Dimli fair play puanlama ekranı" },
} as const;
