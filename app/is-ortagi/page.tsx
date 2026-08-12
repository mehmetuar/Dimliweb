import type { Metadata } from "next";
import BusinessNavbar from "@/components/BusinessNavbar";
import Footer from "@/components/Footer";
import BusinessExperience from "@/components/cinematic/BusinessExperience";

export const metadata: Metadata = {
  title: "Dimli İş Ortağı — Halı Sahanı Dimli'ye Taşı",
  description:
    "Rezervasyonlarını yönet, gelirinizi takip et, müşteri memnuniyetini artır. Dimli İş Ortağı platformuyla halı sahanı büyüt.",
  alternates: { canonical: "/is-ortagi" },
};

/**
 * İşletme sayfası — sinematik 3D scroll deneyimi (tesis turu).
 * İçerik tek kaynaktan: components/cinematic/businessContent.tsx.
 * Reduced-motion / WebGL'siz cihazlar statik düzene düşer (BusinessStatic).
 */
export default function IsOrtagiPage() {
  return (
    <div className="min-h-screen bg-pitch text-white">
      <BusinessNavbar />
      <BusinessExperience />
      <div className="relative z-10 bg-pitch">
        <Footer />
      </div>
    </div>
  );
}
