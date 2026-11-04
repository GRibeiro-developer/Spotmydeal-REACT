interface FaqAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  return (
    <div
      className={`overflow-hidden rounded border bg-surface-2 transition-colors ${
        isOpen ? 'border-line-strong' : 'border-line'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
      >
        <span className="flex-1 font-display text-base font-bold text-white">{question}</span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-line-strong font-display text-lg font-bold transition-colors ${
            isOpen ? 'bg-cyan text-surface' : 'bg-cyan/10 text-cyan'
          }`}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}
