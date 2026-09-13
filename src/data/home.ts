import type { Player, StatData, ProcessStep, ImpactItemData } from '@/types';
import gabrielAvatar from '@/assets/img/gabriel.jpeg';
import nycolasAvatar from '@/assets/img/nycolas.png';
import rodrigoAvatar from '@/assets/img/rodrigo.png';
import taynaAvatar from '@/assets/img/tayna.png';

/** Prévia estática do leaderboard exibida no card flutuante do Hero. */
export const heroLeaderboardPreview: Player[] = [
  { id: 'p1', name: 'Gabriel A.', points: 2340, coupons: 12, avatarUrl: gabrielAvatar },
  { id: 'p2', name: 'Nycolas M.', points: 1890, coupons: 9, avatarUrl: nycolasAvatar },
  { id: 'p3', name: 'Rodrigo B.', points: 1540, coupons: 7, avatarUrl: rodrigoAvatar },
  { id: 'p4', name: 'Tayna J.', points: 1120, coupons: 5, avatarUrl: taynaAvatar },
];

export const homeStats: StatData[] = [
  { value: '+3.2k', label: 'Usuários Ativos' },
  { value: '87%', label: 'Taxa de Reativação' },
  { value: 'CO₂↓', label: 'Impacto Ambiental' },
];

export const howItWorksSteps: ProcessStep[] = [
  {
    emoji: '♻️',
    title: 'Descarte & Pontue',
    description:
      'Descarte resíduos nos pontos parceiros da SoulUp e acumule pontos no seu perfil de player.',
  },
  {
    emoji: '🎯',
    title: 'Dispute Cupons',
    description:
      'Use seus pontos para competir com outros players pela captura de cupons exclusivos de estabelecimentos parceiros.',
  },
  {
    emoji: '💰',
    title: 'Converta & Ganhe',
    description:
      'Troque seus cupons por descontos, pague contas de energia ou converta em saldo para transporte público.',
  },
];

export const impactItems: ImpactItemData[] = [
  {
    emoji: '🌱',
    title: 'Redução de CO₂',
    description: 'Cada descarte correto impacta diretamente a emissão de carbono',
  },
  {
    emoji: '🔄',
    title: 'Upcycling',
    description: 'Transformando resíduos de baixo valor em pontos de alto valor',
  },
  {
    emoji: '⚡',
    title: 'Energia & Mobilidade',
    description: 'Pontos convertíveis em créditos de energia e transporte público',
  },
  {
    emoji: '🎮',
    title: 'Gamificação',
    description: 'Gatilhos de ancoragem, comparação e disputa para engajar usuários',
  },
];
