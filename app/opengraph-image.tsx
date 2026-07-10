import { ImageResponse } from "next/og";

export const alt = "Dimli — Türkiye'nin Dijital Halı Saha Platformu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Marka renklerinde dinamik OG kartı (paylaşımlarda ve Twitter'da görünür).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #172236 0%, #0e1626 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marka satırı */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#22c55e",
              display: "flex",
            }}
          />
          <div
            style={{
              marginLeft: 20,
              fontSize: 38,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Dimli
          </div>
        </div>

        {/* Başlık */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Türkiye'nin Dijital
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#22c55e",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Halı Saha Platformu
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#94a3b8" }}>
            Rakip bul · Saha kirala · Takımını yönet
          </div>
        </div>

        {/* Alt satır */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 26, color: "#64748b" }}>dimli.com.tr</div>
          <div style={{ fontSize: 26, color: "#fb923c", fontWeight: 700 }}>
            iOS &amp; Android · Ücretsiz
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
