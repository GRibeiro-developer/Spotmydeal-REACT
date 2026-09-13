import { forwardRef } from 'react';
import type { SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: SelectOption[];
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, id, options, className = '', ...rest }, ref) => {
    return (
      <div className="mb-5">
        <label
          htmlFor={id}
          className="mb-2 block font-display text-xs uppercase tracking-[2px] text-ink-muted"
        >
          {label}
        </label>
        <select
          id={id}
          ref={ref}
          className={`w-full cursor-pointer rounded-sm border bg-surface-3 px-4 py-3.5 text-sm text-ink outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/30 ${
            error ? 'border-red-500 ring-2 ring-red-500/20' : 'border-line'
          } ${className}`}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="mt-1.5 block min-h-[18px] text-xs text-red-400">{error}</span>
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';

export default FormSelect;
