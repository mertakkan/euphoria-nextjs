import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function ShopButton({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`px-2 py-4 rounded border border-white justify-center items-center gap-3 inline-flex text-center text-white text-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
