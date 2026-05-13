import { ReactNode } from "react";

interface BusinessFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BusinessFeatureCard({ icon, title, description }: BusinessFeatureCardProps) {
  return (
    <div className="group relative p-6 rounded-2xl border border-slate-700/50 bg-pitch-surface/40 hover:border-ember-500/40 hover:bg-pitch-surface/70 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-ember-500/10 flex items-center justify-center text-ember-500 mb-4 group-hover:bg-ember-500/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
