import type { TriggerData, ProcessStep, CouponPreview, BenefitData } from '@/types';

export const triggers: TriggerData[] = [
  {
    number: '— Gatilho 01',
    emoji: '⚓',
    title: 'Ancoragem',
    description:
      'O usuário vê os cupons disponíveis e o que outros já conquistaram. Isso cria uma referência mental do que ele "deveria ter" — gerando desejo imediato de participar.',
  },
  {
    number: '— Gatilho 02',
    emoji: '📊',
    title: 'Comparação',
    description:
      'O ranking em tempo real mostra exatamente onde o usuário está em relação aos outros players. A posição no leaderboard se torna uma métrica de status social.',
  },
  {
    number: '— Gatilho 03',
    emoji: '⚔️',
    title: 'Disputa',
    description:
      'Os cupons são limitados e disputados em tempo real. O senso de urgência e a possibilidade de "perder para outro player" cria desconforto que motiva a ação.',
  },
];

export const mechanismSteps: ProcessStep[] = [
  { emoji: '♻️', title: 'Descarte', description: 'Usuário descarta resíduos em pontos parceiros SoulUp e recebe pontos' },
  { emoji: '🎯', title: 'Disputa', description: 'Usa os pontos para competir com outros players por cupons disponíveis' },
  { emoji: '🏆', title: 'Conquista', description: 'Vence a disputa e coleta o cupom no seu inventário de player' },
  { emoji: '💰', title: 'Conversão', description: 'Converte em desconto, energia, transporte ou saldo monetário' },
];

export const couponsShowcase: CouponPreview[] = [
  {
    id: 1,
    pct: '30%',
    label: 'de desconto',
    store: '🛒 Mercado Parceiro',
    playersDisputing: 14,
    status: 'live',
  },
  {
    id: 2,
    pct: 'R$50',
    label: 'em energia elétrica',
    store: '💡 Companhia Energética',
    playersDisputing: 32,
    status: 'hot',
  },
  {
    id: 3,
    pct: '🎫',
    label: 'passe mensal',
    store: '🚌 Transporte Público',
    playersDisputing: 8,
    status: 'rare',
  },
];

export const benefits: BenefitData[] = [
  {
    emoji: '👤',
    title: 'Para o Usuário',
    description:
      'Descontos reais, experiência gamificada, senso de progresso e recompensa tangível pelo descarte correto.',
  },
  {
    emoji: '🏢',
    title: 'Para a SoulUp',
    description:
      'Aquisição de novos usuários, reativação de perfis inativos e aumento do volume de descartes na plataforma.',
  },
  {
    emoji: '🤝',
    title: 'Para Parceiros',
    description:
      'Novo canal de marketing baseado em performance — cupons que só chegam a usuários altamente motivados.',
  },
  {
    emoji: '🌍',
    title: 'Para o Planeta',
    description: 'Mais descartes corretos = menos CO₂ e mais materiais entrando no ciclo de upcycling produtivo.',
  },
];
