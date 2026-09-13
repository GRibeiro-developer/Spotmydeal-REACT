interface RoadmapItemProps {
  title: string;
  description: string;
  done: boolean;
  isLast: boolean;
}

export default function RoadmapItem({ title, description, done, isLast }: RoadmapItemProps) {
  return (
    <div className="relative flex gap-6 pb-8">
      {!isLast && (
        <span className="absolute left-4 top-8 bottom-0 w-px bg-line" aria-hidden />
      )}
      <div
        className={`relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm ${
          done ? 'border-cyan bg-cyan text-surface' : 'border-line-strong bg-surface-2 text-ink-muted'
        }`}
      >
        {done ? '✓' : '→'}
      </div>
      <div>
        <h4 className="mb-1 text-base text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  );
}
