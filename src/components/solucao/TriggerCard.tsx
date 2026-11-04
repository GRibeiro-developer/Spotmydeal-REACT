interface TriggerCardProps {
  number: string;
  emoji: string;
  title: string;
  description: string;
}

export default function TriggerCard({ number, emoji, title, description }: TriggerCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-surface-2 p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-glow-lg">
      <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-cyan to-transparent" />
      <div className="mb-4 font-display text-xs uppercase tracking-[3px] text-cyan">{number}</div>
      <span className="mb-4 block text-4xl">{emoji}</span>
      <h3 className="mb-3 text-2xl text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}
