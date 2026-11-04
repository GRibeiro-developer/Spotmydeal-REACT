import type { Coupon, Player } from '@/types';

export const initialCoupons: Coupon[] = [
  { id: 1, pct: '30%', label: 'de desconto', store: '🛒 Mercado Parceiro', cost: 200, playersDisputing: 14, maxPlayers: 20, collected: false },
  { id: 2, pct: 'R$50', label: 'em energia', store: '💡 Companhia Energética', cost: 350, playersDisputing: 32, maxPlayers: 40, collected: false },
  { id: 3, pct: '🎫', label: 'Passe mensal', store: '🚌 Transporte Público', cost: 500, playersDisputing: 8, maxPlayers: 10, collected: false },
  { id: 4, pct: '15%', label: 'farmácia', store: '💊 Drogaria Parceira', cost: 150, playersDisputing: 6, maxPlayers: 15, collected: false },
];

export const initialPlayers: Player[] = [
  { id: 'gabriel', name: 'Gabriel A.', points: 2340, coupons: 12 },
  { id: 'nycolas', name: 'Nycolas M.', points: 1890, coupons: 9 },
  { id: 'rodrigo', name: 'Rodrigo B.', points: 1540, coupons: 7 },
  { id: 'voce', name: 'Você', points: 500, coupons: 0, isMe: true },
  { id: 'tayna', name: 'Tayna J.', points: 380, coupons: 2 },
];
