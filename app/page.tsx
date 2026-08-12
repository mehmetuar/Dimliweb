import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlayerExperience from "@/components/cinematic/PlayerExperience";

/**
 * Ana sayfa (oyuncu tarafı) — sinematik 3D scroll deneyimi.
 * Tüm metin/kopya PlayerExperience içindeki DOM bölümlerinde SSR'lanır
 * (client bileşenleri de sunucuda render edilir; SEO korunur).
 * İçerik tek kaynaktan: components/cinematic/playerContent.tsx.
 * Reduced-motion / WebGL'siz cihazlar statik düzene düşer (PlayerStatic).
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <PlayerExperience />
      <div className="relative z-10 bg-pitch">
        <Footer />
      </div>
    </>
  );
}
