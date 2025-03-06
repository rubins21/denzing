import Link from "next/link";
import React from "react";
import Image from "next/image";
import DenzingLogo from "./denzing.svg";

export const NavLogo = () => {
  return (
    <Link href="/">
      <Image 
        src={DenzingLogo}
        alt="Denzing Logo"
        
        height={36}
        priority
      />
    </Link>
  );
};
