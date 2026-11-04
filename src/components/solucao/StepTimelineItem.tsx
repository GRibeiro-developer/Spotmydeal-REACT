interface StepTimelineItemProps {
  emoji: string;
  title: string;
  description: string;
}

export default function StepTimelineItem({ emoji, title, description }: StepTimelineItemProps) {
  return (
    <div className="relative z-10 flex flex-col items-center px-3 text-center">
      <div className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-line-strong bg-surface-2 text-2xl shadow-glow">
        {emoji}
      </div>
      <h4 className="mb-2 text-sm text-white">{title}</h4>
      <p className="text-[13px] leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}
