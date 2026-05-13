import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İletişim — Dimli",
  description:
    "Dimli destek ekibiyle iletişime geç. Uygulama ile ilgili sorularınız, geri bildirimleriniz veya KVKK talepleriniz için buradayız.",
};

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "E-posta",
    value: "destek@dimli.com.tr",
    href: "mailto:destek@dimli.com.tr",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Adres",
    value: "[Şirket adresi buraya eklenecek]",
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: "Web",
    value: "dimli.com.tr",
    href: "https://dimli.com.tr",
  },
];

export default function IletisimPage() {
  return (
    <>
      <Navbar />

      <main className="pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Destek
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Bizimle İletişime Geç
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Uygulama hakkında sorunuz mu var? Geri bildirim mi vermek istiyorsunuz? KVKK kapsamında talepte mi bulunacaksınız? Ekibimiz size yardımcı olmaktan mutluluk duyar.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 animate-fade-in">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl bg-pitch-surface border border-slate-700/50 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-turf-500/10 flex items-center justify-center text-turf-500">
                  {item.icon}
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white text-sm font-semibold hover:text-turf-500 transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white text-sm font-semibold">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-pitch-surface border border-slate-700/50 animate-slide-up">
            <h2 className="text-white font-bold text-xl mb-2">Mesaj Gönder</h2>
            <p className="text-slate-400 text-sm mb-6">
              Formu doldur, en kısa sürede geri dönelim. Genellikle 24 saat içinde yanıt veriyoruz.
            </p>

            <form
              action={`mailto:destek@dimli.com.tr`}
              method="get"
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-1.5" htmlFor="name">
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Adınızı girin"
                    className="w-full px-4 py-3 rounded-xl bg-pitch border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-turf-500 focus:ring-1 focus:ring-turf-500/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-1.5" htmlFor="email">
                    E-posta
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="eposta@ornek.com"
                    className="w-full px-4 py-3 rounded-xl bg-pitch border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-turf-500 focus:ring-1 focus:ring-turf-500/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-sm font-medium mb-1.5" htmlFor="subject">
                  Konu
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-pitch border border-slate-700 text-white text-sm focus:outline-none focus:border-turf-500 focus:ring-1 focus:ring-turf-500/20 transition-colors appearance-none"
                >
                  <option value="">Konu seçin</option>
                  <option value="destek">Teknik Destek</option>
                  <option value="kvkk">KVKK / Veri Talebi</option>
                  <option value="oneri">Öneri / Geri Bildirim</option>
                  <option value="isbirligi">İş Birliği</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 text-sm font-medium mb-1.5" htmlFor="message">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={5}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full px-4 py-3 rounded-xl bg-pitch border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-turf-500 focus:ring-1 focus:ring-turf-500/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-turf-600 to-turf-500 text-white font-bold text-sm hover:from-turf-500 hover:to-turf-400 transition-all shadow-neon-sm active:scale-[0.98]"
              >
                Mesaj Gönder
              </button>

              <p className="text-slate-600 text-xs text-center">
                Mesaj gönderdiğinizde e-posta istemciniz açılacaktır.
              </p>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
