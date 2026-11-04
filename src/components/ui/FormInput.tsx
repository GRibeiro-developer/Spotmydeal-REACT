import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

/**
 * Input de formulário com label, mensagem de erro e encaminhamento de ref —
 * compatível com `register()` do React Hook Form.
 */
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, id, className = '', ...rest }, ref) => {
    return (
      <div className="mb-5">
        <label
          htmlFor={id}
          className="mb-2 block font-display text-xs uppercase tracking-[2px] text-ink-muted"
        >
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`w-full rounded-sm border bg-surface-3 px-4 py-3.5 text-sm text-ink outline-none transition-all placeholder:text-ink-muted focus:border-cyan focus:ring-2 focus:ring-cyan/30 ${
            error ? 'border-red-500 ring-2 ring-red-500/20' : 'border-line'
          } ${className}`}
          {...rest}
        />
        <span className="mt-1.5 block min-h-[18px] text-xs text-red-400">{error}</span>
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
