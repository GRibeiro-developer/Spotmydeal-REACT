import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import ContactInfoList from '@/components/contato/ContactInfoList';
import ContactForm from '@/components/contato/ContactForm';
import { contactInfoItems } from '@/data/contato';

export default function Contato() {
  return (
    <>
      <PageHero
        label="Fale conosco"
        title={<span className="text-cyan">Contato</span>}
        description="Tem dúvidas sobre o projeto, a solução ou quer saber mais sobre a parceria SoulUp? Manda a mensagem."
      />
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <span className="mb-3 block font-display text-xs uppercase tracking-[4px] text-cyan">
                Informações
              </span>
              <h2 className="mb-8 text-white">
                Onde <span className="text-cyan">nos achar</span>
              </h2>
              <ContactInfoList items={contactInfoItems} />
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}






