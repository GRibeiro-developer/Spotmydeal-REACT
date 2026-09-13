import { useNavigate } from 'react-router-dom';
import type { Member } from '@/types';

interface MemberCardProps {
  member: Member;
}

/**
 * Card de integrante. O botão "Ver perfil" usa `useNavigate` para levar o
 * usuário à rota dinâmica `/integrantes/:id`, lida via `useParams` na página
 * de detalhe (MemberDetail).
 */
export default function MemberCard({ member }: MemberCardProps) {
  const navigate = useNavigate();

  function goToProfile() {
    navigate(`/integrantes/${member.id}`);
  }

  return (
    <article className="group relative flex flex-col items-center overflow-hidden rounded-lg border border-line bg-surface-2 p-9 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-glow-lg">
      <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan to-transparent" />

      <button
        type="button"
        onClick={goToProfile}
        className="mb-4 h-24 w-24 overflow-hidden rounded-full ring-2 ring-transparent transition-all hover:ring-cyan"
        aria-label={`Ver perfil de ${member.name}`}
      >
        <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
      </button>

      <div className="mb-1 font-display text-xs uppercase tracking-[3px] text-cyan">{member.rm}</div>
      <h2 className="mb-2 text-2xl text-white">{member.name}</h2>
      <span className="mb-4 inline-block rounded-full border border-line-strong bg-cyan/10 px-3.5 py-1 font-display text-[11px] tracking-[2px] text-cyan">
        {member.turma}
      </span>
      <p className="mb-6 text-sm text-ink-muted">{member.role}</p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-[#0a66c2]/40 bg-[#0a66c2]/15 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-[#4d9fe8] transition-colors hover:bg-[#0a66c2]/30"
        >
          in LinkedIn
        </a>
        <a
          href={member.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-line-strong bg-cyan/10 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-cyan transition-colors hover:bg-cyan/20"
        >
          ⌥ GitHub
        </a>
        <button
          type="button"
          onClick={goToProfile}
          className="rounded-sm border border-line-strong bg-transparent px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
        >
          Ver perfil →
        </button>
      </div>
    </article>
  );
}
