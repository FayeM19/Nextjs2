// @/components/ui/button.tsx

import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'outline' | 'solid';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = 'solid',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-md px-4 py-2 font-semibold',
        {
          'bg-blue-600 text-white': variant === 'solid',
          'border border-blue-600 text-blue-600': variant === 'outline',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
