import { Link } from 'react-router-dom';
import type { InfoItemData } from '@/types';

interface ContactInfoListProps {
  items: InfoItemData[];
}

export default function ContactInfoList({ items }: ContactInfoListProps) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-4 border-b border-line py-5 last:border-b-0"
        >
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm border border-line-strong bg-cyan/10 text-lg">
            {item.emoji}
          </div>
          <div>
            <div className="mb-1 font-display text-xs uppercase tracking-[2px] text-cyan">
              {item.label}
            </div>
            <div className="text-sm text-ink">
              {item.linkTo ? (
                <Link to={item.linkTo} className="text-cyan hover:underline">
                  {item.value}
                </Link>
              ) : (
                item.value
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
