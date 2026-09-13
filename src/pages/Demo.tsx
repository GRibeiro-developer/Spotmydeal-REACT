import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import PlayerPanel from '@/components/demo/PlayerPanel';
import CouponArenaCard from '@/components/demo/CouponArenaCard';
import Leaderboard from '@/components/demo/Leaderboard';
import ToastNotification from '@/components/demo/ToastNotification';
import { useDemoGame } from '@/hooks/useDemoGame';

export default function Demo() {
  const {
    coupons,
    sortedPlayers,
    myPoints,
    inventory,
    levelProgressPct,
    toast,
    collectCoupon,
    addPoints,
  } = useDemoGame();

  return (
    <>
      <PageHero
        eyebrow={<Badge>🎮 Demo Interativa</Badge>}
        title={
          <>
            Loot Tracker <span className="text-cyan">ao vivo</span>
          </>
        }
        description="Simule o mecanismo real. Colete pontos, dispute cupons e suba no ranking. Veja como o sistema cria o senso de urgência e disputa."
      />

      <section className="py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
            {/* Arena principal */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[3px] text-cyan">
                  — Arena de Cupons
                </span>
                <span className="flex items-center gap-1.5 font-display text-xs uppercase tracking-[2px] text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-emerald-400" />
                  Disputas ao vivo
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {coupons.map((coupon) => (
                  <CouponArenaCard
                    key={coupon.id}
                    coupon={coupon}
                    canAfford={myPoints >= coupon.cost}
                    onCollect={collectCoupon}
                  />
                ))}
              </div>

              <div className="mb-6 mt-10">
                <span className="font-display text-xs uppercase tracking-[3px] text-cyan">
                  — Ranking de Players
                </span>
              </div>
              <Leaderboard players={sortedPlayers} />
            </div>

            {/* Painel do player */}
            <PlayerPanel
              points={myPoints}
              levelProgressPct={levelProgressPct}
              inventory={inventory}
              onAddPoints={addPoints}
            />
          </div>
        </Container>
      </section>

      <ToastNotification toast={toast} />
    </>
  );
}
