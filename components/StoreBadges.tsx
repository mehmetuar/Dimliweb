export const GooglePlayBadge = ({ className = "" }: { className?: string }) => (
  <a
    href="https://play.google.com/store/apps/details?id=com.dimli.app&hl=tr"
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 justify-center px-5 py-3 rounded-2xl bg-[#111827] border border-white/10 text-white hover:border-white/25 hover:bg-[#0d1520] transition-all active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#4285F4"/>
      <path d="M6.05 2.66L16.81 8.88 14.54 11.15 6.05 2.66Z" fill="#34A853"/>
      <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5 15.39 12 17.89 9.5 20.16 10.81Z" fill="#EA4335"/>
      <path d="M16.81 15.12L6.05 21.34 14.54 12.85 16.81 15.12Z" fill="#FBBC04"/>
    </svg>
    <div className="text-left">
      <div className="text-[10px] text-white/50 leading-none font-medium tracking-wide uppercase">Get it on</div>
      <div className="text-[15px] font-bold leading-tight mt-0.5">Google Play</div>
    </div>
  </a>
);

export const AppStoreBadge = ({ className = "" }: { className?: string }) => (
  <a
    href="https://apps.apple.com/tr/app/dimli/id6764278538?l=tr"
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 justify-center px-5 py-3 rounded-2xl bg-[#111827] border border-white/10 text-white hover:border-white/25 hover:bg-[#0d1520] transition-all active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
    <div className="text-left">
      <div className="text-[10px] text-white/50 leading-none font-medium tracking-wide uppercase">Download on the</div>
      <div className="text-[15px] font-bold leading-tight mt-0.5">App Store</div>
    </div>
  </a>
);
