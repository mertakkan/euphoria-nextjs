import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`whitespace-nowrap rounded-md bg-purple-600 py-2 px-4 text-white shadow-md hover:bg-purple-700 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
