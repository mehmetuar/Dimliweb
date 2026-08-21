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

const doubled = [...SCREENSHOTS, ...SCREENSHOTS];

export default function BusinessScreenshots() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-pitch to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-pitch to-transparent z-10 pointer-events-none" />

      <div
        className="animate-marquee flex gap-6 pb-4"
        style={{ width: `calc(${doubled.length} * (200px + 24px))` }}
      >
        {doubled.map(({ src, label, desc }, i) => (
          <div key={i} className="flex flex-col items-center gap-3 flex-shrink-0">
            {/* Label above phone */}
            <div className="text-center w-[200px]">
              <div className="text-white font-bold text-sm">{label}</div>
              <div className="text-slate-400 text-xs mt-0.5">{desc}</div>
            </div>

            {/* iPhone frame */}
            <div
              className="relative w-[200px] rounded-[2.8rem] bg-pitch-deep border-[3px] border-slate-700/80 overflow-hidden"
              style={{ boxShadow: "0 0 26px rgba(249,115,22,0.06), 0 14px 34px rgba(0,0,0,0.34)" }}
            >
              <Image
                src={src}
                alt={label}
                width={200}
                height={432}
                className="w-full h-[432px] object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
