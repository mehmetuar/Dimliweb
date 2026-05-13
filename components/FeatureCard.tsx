interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-6 rounded-2xl bg-pitch-surface border border-slate-700/50 hover:border-turf-500/40 hover:bg-slate-800/60 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-turf-500/10 flex items-center justify-center mb-4 group-hover:bg-turf-500/20 transition-colors">
        <div className="text-turf-500">{icon}</div>
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
