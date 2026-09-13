import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'outline';

interface ButtonProps {
  variant?: ButtonVariant;
  /** Rota interna — quando presente, renderiza um <Link> do React Router (SPA). */
  to?: string;
  /** URL externa — quando presente, renderiza um <a>. */
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2.5 rounded-sm px-8 py-3.5 font-display text-sm font-bold uppercase tracking-widest transition-all duration-300';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-cyan text-surface hover:bg-white hover:-translate-y-0.5 hover:shadow-glow',
  outline:
    'border border-cyan/70 bg-transparent text-cyan hover:-translate-y-0.5 hover:bg-cyan/10',
};

/**
 * Botão reutilizável do design system SpotMyDeal.
 * Props determinam o elemento renderizado: rota interna (`to`), link externo (`href`) ou `button`.
 */
export default function Button({
  variant = 'primary',
  to,
  href,
  target,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  children,
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${
    disabled ? 'cursor-not-allowed opacity-60 hover:translate-y-0 hover:shadow-none' : 'cursor-pointer'
  } ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
