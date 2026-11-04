import type { CouponPreview } from '@/types';
import CouponStatusBadge from './CouponStatusBadge';

export default function CouponPreviewCard({ pct, label, store, playersDisputing, status }: CouponPreview) {
  return (
    <div className="relative rounded border border-dashed border-line-strong bg-surface-2 p-6 text-center">
      <div className="font-display text-4xl font-black leading-none text-cyan">{pct}</div>
      <div className="mt-2 font-display text-xs uppercase tracking-[2px] text-ink-muted">{label}</div>
      <div className="mt-3 text-sm font-semibold text-white">{store}</div>
      <div className="mt-1.5 text-xs text-ink-muted">⚡ {playersDisputing} players disputando</div>
      <div className="mt-3">
        <CouponStatusBadge status={status} />
      </div>
    </div>
  );
}
