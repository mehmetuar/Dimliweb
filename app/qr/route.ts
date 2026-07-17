import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/components/StoreBadges";

// Basılı afişlerdeki QR kodun hedefi. QR sabit metin taşır, cihaz kararını
// veremez — iPhone/Android ayrımı burada, User-Agent'a bakılarak yapılır.
// Afiş baskıya gittikten sonra bu yolun adresi (/qr) DEĞİŞTİRİLEMEZ.

// UA'ya bakıldığı için statik değerlendirme kapatılmalı; aksi halde ilk isteğin
// cevabı herkese servis edilir.
export const dynamic = "force-dynamic";

const IOS_UA = /iPhone|iPad|iPod/i;
const ANDROID_UA = /Android/i;

// Afiş varyantını ayırt etmek için (/qr?k=saha1). Ne gelirse gelsin mağaza
// URL'ine ham girdi eklenmez.
const CAMPAIGN_TAG = /^[a-z0-9_-]{1,32}$/;

export function GET(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";
  const rawTag = request.nextUrl.searchParams.get("k");
  const tag = rawTag && CAMPAIGN_TAG.test(rawTag) ? rawTag : null;

  let target: string;

  if (IOS_UA.test(ua)) {
    target = APP_STORE_URL;
  } else if (ANDROID_UA.test(ua)) {
    // Play Console > Kazanım raporunda kaynak olarak görünür. App Store tarafının
    // karşılığı (pt/ct) App Store Connect kurulumu istediği için eklenmedi.
    target = tag
      ? `${GOOGLE_PLAY_URL}&referrer=${encodeURIComponent(
          `utm_source=qr&utm_campaign=${tag}`,
        )}`
      : GOOGLE_PLAY_URL;
  } else {
    // Masaüstü, bot, tanınmayan cihaz: her iki rozeti de gösteren sayfa.
    target = new URL("/indir", request.nextUrl.origin).toString();
  }

  // 302 + no-store zorunlu: CDN bir iPhone'a verilen cevabı önbelleğe alırsa
  // Android kullanıcıları da App Store'a düşer ve afiş sessizce bozulur.
  return NextResponse.redirect(target, {
    status: 302,
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}
