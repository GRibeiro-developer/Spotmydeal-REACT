interface GlowDividerProps {
  className?: string;
}

export default function GlowDivider({ className = '' }: GlowDividerProps) {
  return (
    <div
      className={`h-[3px] w-[60px] rounded-full bg-cyan shadow-[0_0_12px_#12cdde] ${className}`}
    />
  );
}
