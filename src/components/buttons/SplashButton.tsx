import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SplashButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        "rounded-md bg-gradient-to-br from-primary-light to-primary-dark px-4 py-2 text-lg text-primary-content ring-2 ring-primary/50 ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-primary/70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
