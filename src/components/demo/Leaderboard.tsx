import type { Player } from '@/types';

interface LeaderboardProps {
  players: Player[];
}

const RANK_ICONS = ['🥇', '🥈', '🥉'];
const RANK_COLORS = ['text-yellow-400', 'text-slate-300', 'text-orange-400'];

export default function Leaderboard({ players }: LeaderboardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface-2">
      <div className="border-b border-line bg-surface-3 px-6 py-4 font-display text-xs uppercase tracking-[3px] text-cyan">
        — Ranking em tempo real
      </div>
      {players.map((player, index) => (
        <div
          key={player.id}
          className={`grid grid-cols-[32px_1fr_auto_auto] items-center gap-4 border-b border-line px-6 py-3.5 last:border-b-0 ${
            player.isMe ? 'bg-cyan/10' : ''
          }`}
        >
          <span
            className={`text-center font-display text-base font-black ${
              RANK_COLORS[index] ?? 'text-ink-muted'
            }`}
          >
            {RANK_ICONS[index] ?? index + 1}
          </span>
          <span className="font-display text-sm font-semibold text-white">
            {player.name}
            {player.isMe && <span className="ml-1.5 text-[11px] text-cyan">← você</span>}
          </span>
          <span className="font-display text-sm text-ink-muted">{player.points} pts</span>
          <span className="rounded-full bg-cyan/10 px-2.5 py-0.5 font-display text-xs text-cyan">
            {player.coupons} 🎯
          </span>
        </div>
      ))}
    </div>
  );
}
