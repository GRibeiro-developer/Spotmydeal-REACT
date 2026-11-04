import type { NavItem } from '@/types';

export const navLinks: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Solução', to: '/solucao' },
  { label: 'Demo', to: '/demo' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Equipe', to: '/integrantes' },
];

export const contactNavItem: NavItem = { label: 'Contato', to: '/contato' };

export const footerProjectLinks: NavItem[] = [
  { label: 'Contexto SoulUp', to: '/sobre#contexto' },
  { label: 'Loot Tracker', to: '/solucao#mecanismo' },
  { label: 'Gatilhos Psicológicos', to: '/solucao#gatilhos' },
  { label: 'Demonstração', to: '/demo' },
];
