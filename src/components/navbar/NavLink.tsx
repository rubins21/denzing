import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const NavLink = ({
  children,
  external,
  href = "#",
}: {
  children: string;
  external?: boolean;
  href?: string;
}) => {
  return (
    <Link
      href={href}
      rel="nofollow"
      target={external ? "_blank" : undefined}
      className="transition-colors hover:text-copy-dark"
    >
      {children}
    </Link>
  );
};
