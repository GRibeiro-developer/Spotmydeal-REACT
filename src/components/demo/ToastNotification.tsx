import type { ToastState } from '@/types';

interface ToastNotificationProps {
  toast: ToastState;
}

export default function ToastNotification({ toast }: ToastNotificationProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-8 right-6 z-[999] flex max-w-[320px] items-center gap-3 rounded border border-line-strong bg-surface-2 px-6 py-4 shadow-glow-lg transition-all duration-500 ${
        toast.visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'
      }`}
    >
      <span className="text-2xl">{toast.icon}</span>
      <div>
        <div className="font-display text-sm font-bold tracking-wide text-white">{toast.text}</div>
        <div className="mt-0.5 text-xs text-ink-muted">{toast.sub}</div>
      </div>
    </div>
  );
}
