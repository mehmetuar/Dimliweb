import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dimli — Türkiye'nin Dijital Halı Saha Platformu",
  description:
    "Dimli ile rakip bul, takımını yönet, sahayı kirala. Türkiye'nin en büyük dijital halı saha platformu.",
  keywords: "halı saha, futbol, rakip bul, takım yönetimi, saha kiralama, Türkiye",
  icons: {
    icon: '/dimli.png',
    apple: '/dimli.png',
  },
  openGraph: {
    title: "Dimli — Türkiye'nin Dijital Halı Saha Platformu",
    description:
      "Rakip bul, takımını yönet, sahayı kirala. Dimli ile dijital halı saha deneyimi.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.className}>
      <body className="min-h-screen bg-pitch text-white antialiased">{children}</body>
    </html>
  );
}
