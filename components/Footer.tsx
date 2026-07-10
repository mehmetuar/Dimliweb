import Link from "next/link";
import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";

export default function Footer() {
  return (
    <footer className="bg-pitch-surface border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center">
              <Image src="/icon.png" alt="Dimli" width={48} height={48} unoptimized className="w-12 h-12 rounded-xl" />
            </div>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              Türkiye'nin dijital halı saha platformu. Rakip bul, sahayı kirala, takımını yönet.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://www.instagram.com/dimliofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all hover:scale-110"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FCB045"/>
                      <stop offset="50%" stopColor="#FD1D1D"/>
                      <stop offset="100%" stopColor="#833AB4"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://x.com/dimliapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all hover:scale-110"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Keşfet</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/ozellikler", label: "Özellikler" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/sss", label: "Sıkça Sorulan Sorular" },
                { href: "/indir", label: "Uygulamayı İndir" },
                { href: "/is-ortagi", label: "İşletmeler İçin" },
                { href: "/iletisim", label: "İletişim" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-turf-500 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Yasal</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/kvkk", label: "KVKK / Gizlilik Politikası" },
                { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
                { href: "/cerez-politikasi", label: "Çerez Politikası" },
                { href: "/mesafeli-satis", label: "Mesafeli Satış Sözleşmesi" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-turf-500 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Uygulamayı İndir</h4>
            <div className="flex flex-col gap-3 max-w-[220px]">
              <AppStoreBadge className="!justify-start" />
              <GooglePlayBadge className="!justify-start" />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} <span className="text-turf-500">Dimli</span>. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/kvkk" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Kullanım Şartları
            </Link>
            <Link href="/iletisim" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
