import type { ProcessStep } from '@/types';
import StepTimelineItem from './StepTimelineItem';

interface StepTimelineProps {
  steps: ProcessStep[];
}

export default function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="relative mb-16 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-y-0">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-gradient-to-r from-transparent via-cyan to-transparent md:block"
      />
      {steps.map((step) => (
        <StepTimelineItem
          key={step.title}
          emoji={step.emoji}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}
