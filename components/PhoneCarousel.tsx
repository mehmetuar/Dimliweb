"use client";

import Image from "next/image";

const ITEMS = [
  { src: "/screenshots/sahalar.png",       label: "Saha Bul",           desc: "Konumuna yakın sahayı anında keşfet" },
  { src: "/screenshots/rezervasyon.png",   label: "Rezervasyon",        desc: "Müsait saatleri gör, kolayca rezerve et" },
  { src: "/screenshots/joker_havuzu.png",  label: "Joker Havuzu",       desc: "Eksik oyuncu derdine son, joker bul" },
  { src: "/screenshots/sohbet_kesinlesti.png", label: "Takım Sohbeti",  desc: "Maç durumunu takımınla anlık paylaş" },
  { src: "/screenshots/rakiple_iletisim.png", label: "Rakiple İletişim", desc: "Rakip takımla detayları netleştir" },
  { src: "/screenshots/mac_degerlendirme.png", label: "Tesis Değerlendirme", desc: "Oynadığın sahayı puanla" },
  { src: "/screenshots/rakip_degerlendirme.png", label: "Rakip Değerlendirme", desc: "Rakip takımın fair play puanını ver" },
];

export default function PhoneCarousel() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />

      <div
        className="animate-marquee flex gap-6 pb-4"
        style={{ width: `calc(${doubled.length} * (260px + 24px))` }}
      >
        {doubled.map(({ src, label, desc }, i) => (
          <div key={i} className="flex flex-col items-center gap-3 flex-shrink-0">
            {/* Label above phone */}
            <div className="text-center w-[260px]">
              <div className="text-white font-bold text-sm">{label}</div>
              <div className="text-slate-400 text-xs mt-0.5">{desc}</div>
            </div>

            {/* iPhone frame with Dynamic Island */}
            <div
              className="relative w-[260px] rounded-[2.8rem] bg-black border-[3px] border-slate-700/80 overflow-hidden"
              style={{ boxShadow: "0 0 40px rgba(34,197,94,0.07), 0 20px 50px rgba(0,0,0,0.6)" }}
            >
              {/* Dynamic Island pill */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-10" />
              <Image
                src={src}
                alt={label}
                width={260}
                height={562}
                className="w-full h-[562px] object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
