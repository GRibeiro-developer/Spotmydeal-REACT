import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { faqEntries } from '@/data/faq';

export default function Faq() {
  return (
    <>
      <PageHero
        label="Dúvidas frequentes"
        title="FAQ"
        description="Respostas sobre o SpotMyDeal, o mecanismo de loot tracker e o projeto FIAP em parceria com a SoulUp."
      />
      <section className="py-20 lg:py-24">
        <Container>
          <FaqAccordion entries={faqEntries} />
        </Container>
      </section>
    </>
  );
}
