import type { Player } from '@/types';

interface LeaderboardPreviewProps {
  players: Player[];
}

const RANK_ICONS = ['🥇', '🥈', '🥉'];
const RANK_COLORS = ['text-yellow-400', 'text-slate-300', 'text-orange-400'];

/** Prévia estática do leaderboard, usada como elemento visual do Hero. */
export default function LeaderboardPreview({ players }: LeaderboardPreviewProps) {
  return (
    <div className="animate-floaty rounded-lg border border-line-strong bg-surface-2 p-7 shadow-glow-lg">
      <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
        <span className="font-display text-xs uppercase tracking-[3px] text-cyan">Deal Hunter</span>
        <span className="flex items-center gap-1.5 font-display text-xs uppercase tracking-[2px] text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-emerald-400" />
          Ao vivo
        </span>
      </div>

      <div className="flex flex-col">
        {players.map((player, index) => (
          <div
            key={player.id}
            className="flex items-center gap-3 border-b border-line py-2.5 last:border-b-0"
          >
            <span className={`w-7 text-center font-display text-base font-black ${RANK_COLORS[index] ?? 'text-ink-muted'}`}>
              {RANK_ICONS[index] ?? `${index + 1}°`}
            </span>
            {player.avatarUrl && (
              <img
                src={player.avatarUrl}
                alt={`Avatar de ${player.name}`}
                className="h-9 w-9 flex-shrink-0 rounded-full border-2 border-line object-cover"
              />
            )}
            <div className="flex-1">
              <div className="font-display text-sm font-bold tracking-wide text-white">
                {player.name}
              </div>
              <div className="text-xs text-ink-muted">
                {player.points.toLocaleString('pt-BR')} pts acumulados
              </div>
            </div>
            <span className="whitespace-nowrap rounded-full bg-cyan/10 px-2.5 py-0.5 font-display text-sm font-bold text-cyan">
              {player.coupons} cupons
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
