import { useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language, TranslationKey } from '../i18n/translations';
import './Faq.css';

interface FaqEntry {
  q: TranslationKey;
  a: TranslationKey;
  /** Versões com formatação (negrito/links) por idioma; sem elas usa o texto do dicionário. */
  rich?: Partial<Record<Language, ReactNode>>;
}

interface FaqGroup {
  category: TranslationKey;
  items: FaqEntry[];
}

const linkStyle = { color: 'var(--cyan)' } as const;

const FAQ_GROUPS: FaqGroup[] = [
  {
    category: 'faq.cat1',
    items: [
      { q: 'faq.q1', a: 'faq.a1' },
      { q: 'faq.q2', a: 'faq.a2' },
      { q: 'faq.q3', a: 'faq.a3' },
    ],
  },
  {
    category: 'faq.cat2',
    items: [
      { q: 'faq.q4', a: 'faq.a4' },
      {
        q: 'faq.q5',
        a: 'faq.a5',
        rich: {
          pt: (
            <>
              O SpotMyDeal usa três gatilhos comprovados pela psicologia comportamental:{' '}
              <strong>Ancoragem</strong> — o usuário vê o que outros já conquistaram e cria uma referência
              do que "deveria ter"; <strong>Comparação</strong> — o ranking em tempo real transforma a
              posição em status social; e <strong>Disputa</strong> — cupons limitados e urgência de não
              perder para outros players.
            </>
          ),
        },
      },
      { q: 'faq.q6', a: 'faq.a6' },
    ],
  },
  {
    category: 'faq.cat3',
    items: [
      {
        q: 'faq.q7',
        a: 'faq.a7',
        rich: {
          pt: (
            <>
              O projeto foi desenvolvido por quatro estudantes da FIAP: Gabriel Augusto (RM 573120),
              Nycolas Melo Escobar (RM 573052), Rodrigo Banharelli de Souza (RM 570539) e Tayna Jimenes
              Silva (RM 569337). Conheça a equipe na{' '}
              <Link to="/integrantes" style={linkStyle}>
                página de integrantes
              </Link>
              .
            </>
          ),
        },
      },
      {
        q: 'faq.q8',
        a: 'faq.a8',
        rich: {
          pt: (
            <>
              Use o formulário na{' '}
              <Link to="/contato" style={linkStyle}>
                página de contato
              </Link>{' '}
              ou acesse os perfis do LinkedIn de cada integrante na{' '}
              <Link to="/integrantes" style={linkStyle}>
                página da equipe
              </Link>
              . Respondemos em até 48 horas.
            </>
          ),
          en: (
            <>
              Use the form on the{' '}
              <Link to="/contato" style={linkStyle}>
                contact page
              </Link>{' '}
              or access each member's LinkedIn profile on the{' '}
              <Link to="/integrantes" style={linkStyle}>
                team page
              </Link>
              . We respond within 48 hours.
            </>
          ),
        },
      },
    ],
  },
];

interface FaqItemProps {
  question: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}

function FaqItem({ question, open, onToggle, children }: FaqItemProps) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // mede o conteúdo para animar max-height (também quando o idioma muda)
  useLayoutEffect(() => {
    if (open && answerRef.current) setHeight(answerRef.current.scrollHeight + 40);
  }, [open, children]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className={open ? 'faq-item open' : 'faq-item'}>
      <div
        className="faq-question"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={onToggle}
        onKeyDown={onKeyDown}
      >
        <span className="faq-q-text">{question}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </div>
      <div
        ref={answerRef}
        className="faq-answer"
        style={{
          maxHeight: open ? height : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, padding 0.35s ease',
        }}
      >
        <p>{children}</p>
      </div>
    </div>
  );
}

interface FaqGroupBlockProps {
  group: FaqGroup;
  openId: string | null;
  onChange: (id: string | null) => void;
}

function FaqGroupBlock({ group, openId, onChange }: FaqGroupBlockProps) {
  const { t, lang } = useLanguage();

  return (
    <>
      <p className="faq-category">{t(group.category)}</p>
      {group.items.map((item) => (
        <FaqItem
          key={item.q}
          question={t(item.q)}
          open={openId === item.q}
          onToggle={() => onChange(openId === item.q ? null : item.q)}
        >
          {item.rich?.[lang] ?? t(item.a)}
        </FaqItem>
      ))}
    </>
  );
}

export default function Faq() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  usePageMeta(
    'FAQ — SpotMyDeal',
    'FAQ SpotMyDeal — Perguntas frequentes sobre o projeto e a solução.',
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{t('faq.label')}</span>
          <h1>{t('faq.h1')}</h1>
          <p style={{ maxWidth: '540px', marginTop: '16px' }}>{t('faq.hero.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {FAQ_GROUPS.map((group) => (
              <FaqGroupBlock key={group.category} group={group} openId={openId} onChange={setOpenId} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
