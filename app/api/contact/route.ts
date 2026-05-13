import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// IP başına saatte max 3 istek (in-memory, instance başına çalışır)
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const WINDOW_MS = 60 * 60 * 1000; // 1 saat
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.windowStart > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (record.count >= MAX_REQUESTS) return true;
  record.count++;
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUBJECTS: Record<string, string> = {
  destek: "Teknik Destek",
  kvkk: "KVKK / Veri Talebi",
  oneri: "Öneri / Geri Bildirim",
  isbirligi: "İş Birliği",
  diger: "Diğer",
};

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Çok fazla istek gönderdiniz. Lütfen bir süre bekleyin." },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const { name, email, subject, message, _hp } = body;

  // Honeypot — bot tuzağı
  if (_hp) {
    return NextResponse.json({ ok: true }); // bota başarı döndür, sessizce at
  }

  // Alan doğrulama
  if (!name?.trim() || name.trim().length < 2) {
    return NextResponse.json({ error: "Geçerli bir ad girin." }, { status: 400 });
  }
  if (!email?.trim() || !EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: "Geçerli bir e-posta adresi girin." }, { status: 400 });
  }
  if (!message?.trim() || message.trim().length < 10) {
    return NextResponse.json({ error: "Mesajınız en az 10 karakter olmalıdır." }, { status: 400 });
  }

  const subjectLabel = SUBJECTS[subject] ?? "Diğer";

  try {
    await resend.emails.send({
      from: "Dimli İletişim <destek@dimli.com.tr>",
      to: ["destek@dimli.com.tr"],
      replyTo: email.trim(),
      subject: `[Dimli İletişim] ${subjectLabel} — ${name.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#22c55e;margin-bottom:4px">Dimli İletişim Formu</h2>
          <p style="color:#64748b;font-size:14px;margin-top:0">Yeni bir mesaj aldınız.</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="color:#64748b;font-size:13px;padding:6px 0;width:100px">Ad Soyad</td>
              <td style="color:#0f172a;font-size:14px;font-weight:600">${name.trim()}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:6px 0">E-posta</td>
              <td style="color:#0f172a;font-size:14px;font-weight:600">
                <a href="mailto:${email.trim()}" style="color:#22c55e">${email.trim()}</a>
              </td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:6px 0">Konu</td>
              <td style="color:#0f172a;font-size:14px;font-weight:600">${subjectLabel}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
          <p style="color:#64748b;font-size:13px;margin-bottom:8px">Mesaj</p>
          <p style="color:#0f172a;font-size:14px;line-height:1.7;white-space:pre-wrap">${message.trim()}</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
          <p style="color:#94a3b8;font-size:12px">Yanıtlamak için doğrudan bu e-postayı yanıtlayabilirsiniz.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
