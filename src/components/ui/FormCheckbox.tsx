import { FormCheckboxProps } from '../../types';

export function FormCheckbox({
  id,
  name,
  label,
  checked,
  onChange,
  className = '',
}: FormCheckboxProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-700 rounded bg-gray-900/50"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-400">
        {label}
      </label>
    </div>
  );
}