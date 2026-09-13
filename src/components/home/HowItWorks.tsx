import type { ProcessStep } from '@/types';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import StepCard from './StepCard';

interface HowItWorksProps {
  steps: ProcessStep[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          label="Como funciona"
          title="Três passos para"
          highlight="vencer"
          description="O mecanismo de loot tracker transforma a coleta de cupons em uma experiência de disputa real entre players."
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              index={index + 1}
              emoji={step.emoji}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
