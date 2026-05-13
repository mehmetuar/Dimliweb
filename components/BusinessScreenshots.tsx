"use client";

import Image from "next/image";

const SCREENSHOTS = [
  {
    src: "/isletme/isletme1.png",
    label: "Kolay Giriş",
    desc: "İşletme panelinize güvenli erişim",
  },
  {
    src: "/isletme/isletme.png",
    label: "Rezervasyon Paneli",
    desc: "Saat bazlı doluluk ve slot yönetimi",
  },
  {
    src: "/isletme/isletme3.png",
    label: "Gelir & İstatistik",
    desc: "Günlük ve aylık ciro, puan ortalaması",
  },
  {
    src: "/isletme/isletme2.png",
    label: "Abonelik Yönetimi",
    desc: "Plan değiştir, fatura görüntüle",
  },
];

export default function BusinessScreenshots() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
      {SCREENSHOTS.map((shot) => (
        <div key={shot.src} className="flex flex-col items-center gap-3">
          <div
            className="relative rounded-[2.8rem] overflow-hidden border-[3px] border-slate-700/80 bg-black"
            style={{
              width: 200,
              height: 432,
              boxShadow: "0 0 30px rgba(249,115,22,0.08), 0 20px 50px rgba(0,0,0,0.7)",
            }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
            <Image
              src={shot.src}
              alt={shot.label}
              fill
              className="object-cover object-top"
              sizes="200px"
            />
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-sm">{shot.label}</p>
            <p className="text-slate-500 text-xs mt-0.5">{shot.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
