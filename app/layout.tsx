import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";
import CookieConsent from "@/components/CookieConsent";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/components/StoreBadges";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

const SITE_URL = "https://dimli.com.tr";
const SITE_DESC =
  "Dimli ile rakip bul, takımını yönet, sahayı kirala. Türkiye'nin dijital halı saha platformu — iOS ve Android'de ücretsiz.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dimli — Türkiye'nin Dijital Halı Saha Platformu",
  description: SITE_DESC,
  applicationName: "Dimli",
  keywords: [
    "halı saha",
    "halı saha rezervasyon",
    "futbol",
    "rakip bul",
    "takım yönetimi",
    "saha kiralama",
    "joker oyuncu",
    "Dimli",
    "Türkiye",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/dimli.png", apple: "/dimli.png" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Dimli",
    title: "Dimli — Türkiye'nin Dijital Halı Saha Platformu",
    description: SITE_DESC,
  },
  twitter: {
    card: "summary_large_image",
    site: "@dimliapp",
    title: "Dimli — Türkiye'nin Dijital Halı Saha Platformu",
    description: SITE_DESC,
  },
};

// Site geneli yapılandırılmış veri (Google zengin sonuç / sitelink için).
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dimli",
    url: SITE_URL,
    logo: `${SITE_URL}/dimli.png`,
    sameAs: [
      "https://www.instagram.com/dimliofficial",
      "https://x.com/dimliapp",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dimli",
    url: SITE_URL,
    inLanguage: "tr-TR",
  },
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Dimli",
    operatingSystem: "iOS, Android",
    applicationCategory: "SportsApplication",
    inLanguage: "tr-TR",
    url: SITE_URL,
    downloadUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.className}>
      <body className="min-h-screen bg-pitch text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
