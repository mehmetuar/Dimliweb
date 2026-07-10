import type { Metadata } from "next";
import Image from "next/image";
import { APP_STORE_URL, GOOGLE_PLAY_URL as PLAY_STORE_URL } from "@/components/StoreBadges";

export const metadata: Metadata = {
  title: "Takım Daveti — Dimli",
  description: "Bir arkadaşın seni Dimli'de takımına davet etti.",
};

export default function TeamInvitePage({
  params,
}: {
  params: { shortId: string };
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      <Image
        src="/icon.png"
        alt="Dimli"
        width={88}
        height={88}
        className="w-20 h-20 rounded-2xl object-contain mb-6"
      />

      <h1 className="text-2xl md:text-3xl font-extrabold mb-3">
        Bir Arkadaşın Seni Takımına Davet Etti!
      </h1>
      <p className="text-slate-400 max-w-md mb-8">
        Bu daveti kabul edip takıma katılmak için önce Dimli&apos;yi indir, giriş yap ve
        ardından bu linke tekrar tıkla — takım ({params.shortId}) otomatik olarak açılacak.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={APP_STORE_URL}
          className="px-6 py-3 rounded-xl bg-turf-600 hover:bg-turf-500 font-bold transition-colors"
        >
          App Store&apos;dan İndir
        </a>
        <a
          href={PLAY_STORE_URL}
          className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 font-bold transition-colors"
        >
          Google Play&apos;den İndir
        </a>
      </div>
    </main>
  );
}
