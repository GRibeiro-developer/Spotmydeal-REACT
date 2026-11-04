import Card from '@/components/ui/Card';

interface StepCardProps {
  index: number;
  emoji: string;
  title: string;
  description: string;
}

export default function StepCard({ index, emoji, title, description }: StepCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-cyan transition-transform duration-300 group-hover:scale-x-100" />
      <div className="mb-4 font-display text-6xl font-black leading-none text-cyan/10">
        {String(index).padStart(2, '0')}
      </div>
      <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-sm border border-line-strong bg-cyan/10 text-2xl">
        {emoji}
      </div>
      <h3 className="mb-3 text-xl text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
    </Card>
  );
}
