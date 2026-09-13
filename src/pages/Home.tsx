import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import HowItWorks from '@/components/home/HowItWorks';
import ImpactSection from '@/components/home/ImpactSection';
import CtaBanner from '@/components/home/CtaBanner';
import Button from '@/components/ui/Button';
import { homeStats, howItWorksSteps, impactItems } from '@/data/home';

export default function Home() {
  return (
    <>
      <Hero />

      <div className="-mt-10 mb-8">
        <StatsBar stats={homeStats} />
      </div>

      <HowItWorks steps={howItWorksSteps} />
      <ImpactSection items={impactItems} />

      <CtaBanner
        title={
          <>
            Pronto para <span className="text-cyan">disputar?</span>
          </>
        }
        description="Veja como o loot tracker funciona na prática e entenda por que os usuários não conseguem ficar de fora."
      >
        <Button to="/demo" variant="primary">
          Experimentar Demo
        </Button>
        <Button to="/solucao" variant="outline">
          Ver a solução completa
        </Button>
      </CtaBanner>
    </>
  );
}
