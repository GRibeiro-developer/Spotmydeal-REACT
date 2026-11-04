import type { InfoItemData } from '@/types';

export const contactInfoItems: InfoItemData[] = [
  {
    emoji: '🎓',
    label: 'Instituição',
    value: 'FIAP — Faculdade de Informática e Administração Paulista',
  },
  {
    emoji: '🏢',
    label: 'Parceria',
    value: 'SoulUp — Upcycling & Sustentabilidade',
  },
  {
    emoji: '👥',
    label: 'Equipe',
    value: 'Gabriel Augusto · Nycolas Melo · Rodrigo Banharelli · Tayna Jimenes',
  },
  {
    emoji: '💼',
    label: 'LinkedIn da Equipe',
    value: 'Ver todos os perfis →',
    linkTo: '/integrantes',
  },
  {
    emoji: '⏱',
    label: 'Resposta',
    value: 'Em até 48 horas úteis',
  },
];

export const contactSubjects = [
  { value: '', label: 'Selecione um assunto' },
  { value: 'projeto', label: 'Sobre o projeto SpotMyDeal' },
  { value: 'soulup', label: 'Parceria SoulUp' },
  { value: 'fiap', label: 'Trabalho FIAP' },
  { value: 'demo', label: 'Dúvidas sobre a Demo' },
  { value: 'outro', label: 'Outro' },
];
