interface PricingCardProps {
  pitchCount: number | string;
  planName: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  pitchCount,
  planName,
  price,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
        popular
          ? "border-2 border-ember-500 bg-pitch-surface"
          : "border border-slate-700/50 bg-pitch-surface/40 hover:border-ember-500/30 hover:bg-pitch-surface/70"
      }`}
      style={
        popular
          ? { boxShadow: "0 0 40px rgba(249,115,22,0.18), 0 20px 50px rgba(0,0,0,0.5)" }
          : undefined
      }
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ember-500 text-white text-xs font-black uppercase tracking-wider shadow-neon-ember-sm whitespace-nowrap">
            En Popüler
          </span>
        </div>
      )}

      {/* Saha count badge */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${popular ? "bg-ember-500/20 border border-ember-500/30" : "bg-ember-500/10 border border-ember-500/20"}`}>
        <span className={`text-2xl font-black ${popular ? "text-ember-400" : "text-ember-500"}`}>
          {pitchCount}
        </span>
      </div>

      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{planName}</p>
      <p className="text-white font-bold text-base mb-4">
        {typeof pitchCount === "number" ? `${pitchCount} Saha` : "5 ve Üzeri Saha"}
      </p>

      <div className="mb-5">
        <div className="flex items-end gap-1">
          <span className="text-3xl font-black text-white">{price}</span>
          <span className="text-slate-400 text-sm mb-1">/ay</span>
        </div>
        <p className="text-ember-400 text-xs font-semibold mt-1">İlk 3 ay ücretsiz</p>
      </div>

      <ul className="flex flex-col gap-2.5 mb-6 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-slate-300">
            <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-ember-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Store buttons */}
      <div className="flex flex-col gap-2">
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all active:scale-95 ${
            popular
              ? "bg-gradient-to-r from-ember-600 to-ember-500 hover:from-ember-500 hover:to-ember-400 text-white shadow-neon-ember-sm"
              : "bg-black border border-white/15 text-white hover:border-white/30"
          }`}
        >
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          App Store
        </a>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-black border border-white/15 text-white hover:border-white/30 transition-all active:scale-95"
        >
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#4285F4"/>
            <path d="M6.05 2.66L16.81 8.88 14.54 11.15 6.05 2.66Z" fill="#34A853"/>
            <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5 15.39 12 17.89 9.5 20.16 10.81Z" fill="#EA4335"/>
            <path d="M16.81 15.12L6.05 21.34 14.54 12.85 16.81 15.12Z" fill="#FBBC04"/>
          </svg>
          Google Play
        </a>
      </div>
    </div>
  );
}
