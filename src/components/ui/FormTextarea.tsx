import { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, id, className = '', ...rest }, ref) => {
    return (
      <div className="mb-5">
        <label
          htmlFor={id}
          className="mb-2 block font-display text-xs uppercase tracking-[2px] text-ink-muted"
        >
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          rows={5}
          className={`w-full resize-y rounded-sm border bg-surface-3 px-4 py-3.5 text-sm text-ink outline-none transition-all placeholder:text-ink-muted focus:border-cyan focus:ring-2 focus:ring-cyan/30 ${
            error ? 'border-red-500 ring-2 ring-red-500/20' : 'border-line'
          } ${className}`}
          {...rest}
        />
        <span className="mt-1.5 block min-h-[18px] text-xs text-red-400">{error}</span>
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
