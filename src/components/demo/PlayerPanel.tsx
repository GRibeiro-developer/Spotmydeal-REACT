interface PlayerPanelProps {
  points: number;
  levelProgressPct: number;
  inventory: string[];
  onAddPoints: () => void;
}

export default function PlayerPanel({
  points,
  levelProgressPct,
  inventory,
  onAddPoints,
}: PlayerPanelProps) {
  return (
    <aside className="h-fit rounded-lg border border-line bg-surface-2 p-7 lg:sticky lg:top-[96px]">
      <div className="mb-5 border-b border-line pb-3 font-display text-xs uppercase tracking-[3px] text-cyan">
        — Meu Perfil
      </div>

      <div className="mb-6 flex items-center gap-3.5">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-line-strong bg-cyan/10 font-display text-lg font-black text-cyan">
          EU
        </div>
        <div>
          <div className="font-display text-lg font-bold text-white">Você</div>
          <div className="text-xs text-ink-muted">Player Nível 3 · SpotMyDeal</div>
        </div>
      </div>

      <div className="mb-5 rounded border border-line bg-surface-3 p-5 text-center">
        <span className="block font-display text-5xl font-black leading-none text-cyan">
          {points}
        </span>
        <span className="mt-1 block text-xs tracking-wide text-ink-muted">
          pontos disponíveis
        </span>
      </div>

      <div className="mb-6">
        <div className="mb-1.5 flex justify-between text-xs text-ink-muted">
          <span>Progresso nível 3</span>
          <span>{levelProgressPct}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan to-cyan-dark transition-all duration-500"
            style={{ width: `${levelProgressPct}%` }}
          />
        </div>
      </div>

      <div className="mb-3 font-display text-xs uppercase tracking-[2px] text-ink-muted">
        Meus Cupons
      </div>
      <div className="mb-4 flex min-h-[60px] flex-col gap-2">
        {inventory.length === 0 ? (
          <div className="rounded p-3 text-center text-sm italic text-ink-muted">
            Nenhum cupom ainda. Dispute na arena! →
          </div>
        ) : (
          inventory.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex animate-slideIn items-center gap-2.5 rounded-sm border border-line bg-surface-3 px-3.5 py-2.5 text-sm text-ink"
            >
              🎯 {item}
            </div>
          ))
        )}
      </div>

      <button
        type="button"
        onClick={onAddPoints}
        className="w-full rounded-sm border border-dashed border-line-strong py-3.5 font-display text-sm font-bold uppercase tracking-wider text-cyan transition-colors hover:border-solid hover:bg-cyan/10"
      >
        ♻️ Simular Descarte (+200 pts)
      </button>
    </aside>
  );
}
