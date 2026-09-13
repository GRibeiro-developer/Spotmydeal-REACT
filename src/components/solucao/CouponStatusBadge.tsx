import type { CouponStatus } from '@/types';

const STATUS_STYLES: Record<CouponStatus, string> = {
  live: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  hot: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
  rare: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300',
};

const STATUS_LABELS: Record<CouponStatus, string> = {
  live: '● Ao vivo',
  hot: '🔥 Hot',
  rare: '★ Raro',
};

interface CouponStatusBadgeProps {
  status: CouponStatus;
}

export default function CouponStatusBadge({ status }: CouponStatusBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 font-display text-[11px] uppercase tracking-[2px] ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
