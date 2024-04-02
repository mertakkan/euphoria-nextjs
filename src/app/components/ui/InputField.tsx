//src/app/components/ui/InputField.tsx

import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  required?: boolean;
}

export default function InputField({
  label,
  errorMessage,
  required,
  ...rest
}: InputFieldProps) {
  return (
    <div>
      <p className="mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </p>
      <input
        className="w-full px-5 py-4 rounded-lg text-sm font-light border border-neutral-700"
        {...rest}
      />
      {errorMessage && (
        <p className="mt-1 text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
}
