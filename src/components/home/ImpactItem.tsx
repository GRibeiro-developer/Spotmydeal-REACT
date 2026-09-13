interface ImpactItemProps {
  emoji: string;
  title: string;
  description: string;
}

export default function ImpactItem({ emoji, title, description }: ImpactItemProps) {
  return (
    <div className="flex items-center gap-5 border-b border-line py-5 last:border-b-0">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-line-strong bg-cyan/10 text-xl">
        {emoji}
      </div>
      <div>
        <strong className="block font-display text-lg font-bold tracking-wide text-white">
          {title}
        </strong>
        <span className="text-sm text-ink-muted">{description}</span>
      </div>
    </div>
  );
}
