interface StatHighlightProps {
  value: string;
  description: string;
}

export default function StatHighlight({ value, description }: StatHighlightProps) {
  return (
    <div className="mb-4 flex flex-col items-center justify-center rounded border border-line bg-surface-3 p-7 text-center last:mb-0">
      <span className="font-display text-5xl font-black leading-none text-cyan">{value}</span>
      <span className="mt-1.5 text-sm text-ink-muted">{description}</span>
    </div>
  );
}
