import { useState } from 'react';
import type { FaqEntry } from '@/types';
import FaqAccordionItem from './FaqAccordionItem';

interface FaqAccordionProps {
  entries: FaqEntry[];
}

export default function FaqAccordion({ entries }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(entries[0]?.id ?? null);
  const categories = Array.from(new Set(entries.map((entry) => entry.category)));

  function handleToggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className="mx-auto max-w-[780px]">
      {categories.map((category) => (
        <div key={category}>
          <p className="mb-5 mt-12 font-display text-xs uppercase tracking-[3px] text-cyan first:mt-0">
            — {category}
          </p>
          <div className="mb-2 flex flex-col gap-3">
            {entries
              .filter((entry) => entry.category === category)
              .map((entry) => (
                <FaqAccordionItem
                  key={entry.id}
                  question={entry.question}
                  answer={entry.answer}
                  isOpen={openId === entry.id}
                  onToggle={() => handleToggle(entry.id)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
