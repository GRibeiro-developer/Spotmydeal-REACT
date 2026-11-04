import type { RoadmapStep } from '@/types';
import RoadmapItem from './RoadmapItem';

interface RoadmapProps {
  steps: RoadmapStep[];
}

export default function Roadmap({ steps }: RoadmapProps) {
  return (
    <div className="mt-16">
      <p className="mb-8 font-display text-xs uppercase tracking-[4px] text-cyan">
        — Roadmap do Projeto
      </p>
      <div className="flex flex-col">
        {steps.map((step, index) => (
          <RoadmapItem
            key={step.id}
            title={step.title}
            description={step.description}
            done={step.done}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
