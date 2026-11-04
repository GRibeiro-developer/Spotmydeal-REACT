import type { Coupon } from '@/types';

interface CouponArenaCardProps {
  coupon: Coupon;
  canAfford: boolean;
  onCollect: (id: number) => void;
}

export default function CouponArenaCard({ coupon, canAfford, onCollect }: CouponArenaCardProps) {
  const disputePct = Math.round((coupon.playersDisputing / coupon.maxPlayers) * 100);

  return (
    <div
      className={`flex flex-col gap-4 rounded border border-line bg-surface-2 p-6 transition-colors md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-5 ${
        coupon.collected ? 'opacity-50' : 'hover:border-line-strong'
      }`}
    >
      <div className="text-center font-display text-3xl font-black leading-none text-cyan md:min-w-[80px]">
        {coupon.pct}
      </div>

      <div>
        <h4 className="mb-1 text-base text-white">
          {coupon.label} — {coupon.store}
        </h4>
        <div className="flex flex-wrap gap-4">
          <span className="text-xs text-ink-muted">⚡ {coupon.playersDisputing} players disputando</span>
          <span className="text-xs text-ink-muted">💎 Custo: {coupon.cost} pts</span>
        </div>
        <div className="mt-3">
          <div className="h-1 overflow-hidden rounded-full bg-gray-700">
            <div
              className="h-full rounded-full bg-cyan transition-all duration-700"
              style={{ width: `${disputePct}%` }}
            />
          </div>
          <div className="mt-1 text-[11px] text-ink-muted">
            Intensidade da disputa: {disputePct}%
          </div>
        </div>
      </div>

      <button
        type="button"
        disabled={coupon.collected}
        onClick={() => onCollect(coupon.id)}
        className={`whitespace-nowrap rounded-sm px-5 py-3 font-display text-sm font-bold uppercase tracking-wider transition-all ${
          coupon.collected
            ? 'cursor-not-allowed bg-gray-600 text-ink-muted'
            : canAfford
              ? 'bg-cyan text-surface hover:scale-105 hover:bg-white'
              : 'bg-gray-600 text-ink-muted hover:bg-gray-500'
        }`}
      >
        {coupon.collected ? '✓ Coletado' : 'Coletar'}
      </button>
    </div>
  );
}
