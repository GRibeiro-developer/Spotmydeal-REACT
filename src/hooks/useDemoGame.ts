import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Coupon, Player, ToastState } from '@/types';
import { initialCoupons, initialPlayers } from '@/data/demo';

const POINTS_PER_DISCARD = 200;
const LEVEL_SIZE = 1000;
const SIMULATION_INTERVAL_MS = 4000;
const TOAST_DURATION_MS = 3500;

interface UseDemoGameReturn {
  coupons: Coupon[];
  sortedPlayers: Player[];
  myPoints: number;
  inventory: string[];
  levelProgressPct: number;
  toast: ToastState;
  collectCoupon: (id: number) => void;
  addPoints: () => void;
}

/**
 * Hook que encapsula toda a lógica interativa da demo (Loot Tracker):
 * pontuação do player, arena de cupons, ranking em tempo real e inventário.
 * Mantém os componentes de apresentação (PlayerPanel, CouponArena, Leaderboard)
 * totalmente livres de estado — recebem apenas dados via props.
 */
export function useDemoGame(): UseDemoGameReturn {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [myPoints, setMyPoints] = useState<number>(500);
  const [inventory, setInventory] = useState<string[]>([]);
  const [toast, setToast] = useState<ToastState>({ visible: false, icon: '🎯', text: '', sub: '' });
  const [toastId, setToastId] = useState(0);

  const triggerToast = useCallback((icon: string, text: string, sub: string) => {
    setToast({ visible: true, icon, text, sub });
    setToastId((id) => id + 1);
  }, []);

  // Esconde o toast automaticamente após alguns segundos.
  useEffect(() => {
    if (toastId === 0) return;
    const timeoutId = window.setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, TOAST_DURATION_MS);
    return () => window.clearTimeout(timeoutId);
  }, [toastId]);

  // Simula outros players coletando pontos em tempo real (efeito com cleanup).
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setPlayers((prev) => {
        const bots = prev.filter((player) => !player.isMe);
        if (bots.length === 0) return prev;
        const chosen = bots[Math.floor(Math.random() * bots.length)];
        const bonus = Math.floor(Math.random() * 80) + 20;
        return prev.map((player) =>
          player.id === chosen.id ? { ...player, points: player.points + bonus } : player
        );
      });
    }, SIMULATION_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  const collectCoupon = useCallback(
    (id: number) => {
      const target = coupons.find((coupon) => coupon.id === id);
      if (!target || target.collected) return;

      if (myPoints < target.cost) {
        triggerToast('⚠️', 'Pontos insuficientes!', 'Faça descartes para ganhar mais pontos');
        return;
      }

      setMyPoints((prev) => prev - target.cost);
      setCoupons((prev) => prev.map((c) => (c.id === id ? { ...c, collected: true } : c)));
      setInventory((prev) => [...prev, `${target.pct} — ${target.store}`]);
      setPlayers((prev) =>
        prev.map((player) =>
          player.isMe
            ? { ...player, points: player.points - target.cost, coupons: player.coupons + 1 }
            : player
        )
      );
      triggerToast('🎯', 'Cupom coletado!', `${target.pct} ${target.label} adicionado ao inventário`);
    },
    [coupons, myPoints, triggerToast]
  );

  const addPoints = useCallback(() => {
    setMyPoints((prev) => prev + POINTS_PER_DISCARD);
    setPlayers((prev) =>
      prev.map((player) =>
        player.isMe ? { ...player, points: player.points + POINTS_PER_DISCARD } : player
      )
    );
    triggerToast('♻️', `+${POINTS_PER_DISCARD} pontos!`, 'Descarte registrado com sucesso');
  }, [triggerToast]);

  const sortedPlayers = useMemo(
    () => [...players].sort((a, b) => b.points - a.points),
    [players]
  );

  const levelProgressPct = useMemo(
    () => Math.min(Math.round((myPoints % LEVEL_SIZE) / 10), 100),
    [myPoints]
  );

  return {
    coupons,
    sortedPlayers,
    myPoints,
    inventory,
    levelProgressPct,
    toast,
    collectCoupon,
    addPoints,
  };
}
