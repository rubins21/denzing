import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BubbleButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        `
            relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md 
            border border-border bg-gradient-to-br from-foreground to-background
           px-3 py-1.5
           text-copy transition-all duration-300
            
            before:absolute before:inset-0
            before:-z-10 before:translate-y-[200%]
            before:scale-[2.5]
            before:rounded-[100%] before:bg-primary-light
            before:transition-transform before:duration-500
            before:content-[""]
    
            hover:scale-105 hover:text-copy
            hover:before:translate-y-[0%]
            active:scale-100`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
