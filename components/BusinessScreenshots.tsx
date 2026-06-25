"use client";

import Image from "next/image";
import { Phone3D } from "@/components/motion";

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
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />

      {/* Floodlight sweep — ember */}
      <span className="floodlight-sweep absolute top-0 left-0 h-full w-1/3 z-10 pointer-events-none bg-gradient-to-r from-transparent via-ember-500/15 to-transparent blur-2xl" />

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
            <Phone3D accent="ember" sheen={false} glow={false} enter={false} tiltMax={5}>
              <div
                className="relative w-[200px] rounded-[2.8rem] bg-black border-[3px] border-slate-700/80 overflow-hidden"
                style={{ boxShadow: "0 0 40px rgba(249,115,22,0.07), 0 20px 50px rgba(0,0,0,0.6)" }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-10" />
                <Image
                  src={src}
                  alt={label}
                  width={200}
                  height={432}
                  className="w-full h-[432px] object-cover object-top"
                  unoptimized
                />
              </div>
            </Phone3D>
          </div>
        ))}
      </div>
    </div>
  );
}
