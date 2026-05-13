"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-pitch border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-turf-500 focus:ring-1 focus:ring-turf-500/20 transition-colors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _hp: (e.target as HTMLFormElement)._hp?.value ?? "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Bir hata oluştu.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setErrorMsg("Bağlantı hatası. Lütfen tekrar deneyin.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="p-6 sm:p-8 rounded-2xl bg-pitch-surface border border-turf-500/30 animate-scale-in text-center">
        <div className="w-16 h-16 rounded-full bg-turf-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-turf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-2">Mesajınız İletildi!</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Mesajınızı aldık. En kısa sürede, genellikle 24 saat içinde size dönüş yapacağız.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2.5 rounded-xl bg-turf-500/10 border border-turf-500/30 text-turf-400 text-sm font-semibold hover:bg-turf-500/20 transition-all"
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-pitch-surface border border-slate-700/50 animate-slide-up">
      <h2 className="text-white font-bold text-xl mb-2">Mesaj Gönder</h2>
      <p className="text-slate-400 text-sm mb-6">
        Formu doldur, en kısa sürede geri dönelim. Genellikle 24 saat içinde yanıt veriyoruz.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Honeypot — botlar doldurur, insanlar görmez */}
        <input
          type="text"
          name="_hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ display: "none" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-400 text-sm font-medium mb-1.5" htmlFor="name">
              Ad Soyad <span className="text-turf-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınızı girin"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-slate-400 text-sm font-medium mb-1.5" htmlFor="email">
              E-posta <span className="text-turf-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="eposta@ornek.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-400 text-sm font-medium mb-1.5" htmlFor="subject">
            Konu
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`${inputClass} appearance-none`}
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
            Mesajınız <span className="text-turf-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            minLength={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınızı buraya yazın..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-scale-in">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-turf-600 to-turf-500 text-white font-bold text-sm hover:from-turf-500 hover:to-turf-400 transition-all shadow-neon-sm active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Gönderiliyor...
            </span>
          ) : (
            "Mesaj Gönder"
          )}
        </button>
      </form>
    </div>
  );
}
