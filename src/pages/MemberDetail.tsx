import { useParams, useNavigate } from 'react-router-dom';
import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getMemberById } from '@/data/members';


export default function MemberDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const member = getMemberById(id);

  if (!member) {
    return (
      <Container className="py-32 text-center">
        <h1 className="mb-4 text-white">Integrante não encontrado</h1>
        <p className="mb-8 text-ink-muted">
          Não encontramos nenhum integrante com esse identificador.
        </p>
        <Button to="/integrantes" variant="primary">
          ← Voltar para a equipe
        </Button>
      </Container>
    );
  }

  return (
    <>
      <PageHero label={member.rm} title={member.name} description={member.role} />

      <section className="py-16 lg:py-20">
        <Container>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-10 inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-cyan transition-colors hover:text-white"
          >
            ← Voltar
          </button>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[240px_1fr] md:items-start">
            <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border-2 border-line-strong md:mx-0">
              <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
            </div>

            <div>
              <span className="mb-3 inline-block rounded-full border border-line-strong bg-cyan/10 px-4 py-1.5 font-display text-xs tracking-[2px] text-cyan">
                {member.turma}
              </span>
              <h2 className="mb-4 text-white">{member.name}</h2>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-ink-muted">
                {member.role} no time responsável pelo desenvolvimento do SpotMyDeal — projeto FIAP
                em parceria com a SoulUp, atualmente na Sprint de Front-End Design Engineering
                (React + Vite + TypeScript).
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={member.linkedinUrl} target="_blank" variant="outline">
                  in LinkedIn
                </Button>
                <Button href={member.githubUrl} target="_blank" variant="outline">
                  ⌥ GitHub
                </Button>
                <Button to="/contato" variant="primary">
                  Falar com a equipe
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
