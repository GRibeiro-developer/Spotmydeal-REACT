import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import MemberCard from '@/components/integrantes/MemberCard';
import { members } from '@/data/members';

export default function Integrantes() {
  return (
    <>
      <PageHero
        label="Quem somos"
        title={
          <>
            A <span className="text-cyan">Equipe</span>
          </>
        }
        description="Estudantes de tecnologia da FIAP que uniram design, estratégia e desenvolvimento para construir o SpotMyDeal em parceria com a SoulUp."
      />
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
