import React from "react";
import { NavLink } from "./NavLink";

export const NavLinks = () => {
  return (
    <ul className="flex gap-3 text-copy md:gap-9">
      <li>
        <NavLink href="/#">Home</NavLink>
      </li>
      <li>
        <NavLink href="/#">Features</NavLink>
      </li>
      <li>
        <NavLink href="/#">Pricing</NavLink>
      </li>
      <li>
        <NavLink href="/#">Docs</NavLink>
      </li>
     
    </ul>
  );
};
