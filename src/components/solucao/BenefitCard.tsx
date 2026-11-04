interface BenefitCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function BenefitCard({ emoji, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start gap-4 rounded border border-line bg-surface-2 p-6 transition-colors hover:border-line-strong">
      <span className="mt-0.5 flex-shrink-0 text-2xl">{emoji}</span>
      <div>
        <h4 className="mb-1.5 text-base text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  );
}
