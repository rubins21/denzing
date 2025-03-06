import React from "react";

export const GlowingChip = ({ children }: { children: string }) => {
  return (
    <span className="relative z-10 mb-4 inline-block rounded-full border border-border bg-foreground/20 px-3 py-1.5 text-xs text-copy md:mb-0 md:text-sm">
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-copy-lighter/0 via-copy-light to-copy-lighter/0" />
    </span>
  );
};
