import { Link } from 'react-router-dom';
import { navLinks, contactNavItem, footerProjectLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2 px-6 pb-8 pt-12">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan font-display text-xl font-black text-white">
                S
              </span>
              <span className="font-display text-xl font-extrabold uppercase tracking-[2px] text-white">
                Spot<span className="text-cyan">My</span>Deal
              </span>
            </Link>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-ink-muted">
              Gamificação de cupons para atração e reativação de usuários. Um projeto FIAP em
              parceria com a SoulUp.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-xs uppercase tracking-[3px] text-cyan">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[...navLinks, contactNavItem].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-ink-muted transition-colors hover:text-cyan">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-xs uppercase tracking-[3px] text-cyan">
              Projeto
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerProjectLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-ink-muted transition-colors hover:text-cyan">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-sm text-ink-muted">
            © 2026 SpotMyDeal · Projeto FIAP · Todos os direitos reservados.
          </p>
          <span className="rounded-full border border-line-strong bg-cyan/10 px-3 py-1 font-display text-xs tracking-wider text-cyan">
            FIAP · 3º SPRINT
          </span>
        </div>
      </div>
    </footer>
  );
}
