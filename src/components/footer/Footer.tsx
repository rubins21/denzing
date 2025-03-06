import React from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { NavLogo } from "../navbar/NavLogo";
import { SiInstagram, SiLinkedin, SiX, SiYoutube } from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      <MaxWidthWrapper className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6">
        <LogoColumn />
        <GenericColumn
          title="Product"
          links={[
            {
              title: "Features",
              href: "/#",
            },
            {
              title: "Documentation",
              href: "/#",
            },
            {
              title: "Pricing",
              href: "/#",
            },
          ]}
        />
        <GenericColumn
          title="Company"
          links={[
            {
              title: "About us",
              href: "/#",
            },
            {
              title: "Team",
              href: "/#",
            },
            {
              title: "Contact",
              href: "/#",
            },
          ]}
        />
        <GenericColumn
          title="Legal"
          links={[
            {
              title: "Terms & Conditions",
              href: "/#",
            },
            {
              title: "Privacy Policy",
              href: "/#",
            },
          
          ]}
        />

        <GenericColumn
          title="Socials"
          links={[
            {
              title: "Linkedin",
              href: "/#",
              Icon: SiLinkedin,
            },
         
            {
              title: "Youtube",
              href: "/#",
              Icon: SiYoutube,
            },
          ]}
        />
      </MaxWidthWrapper>
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <NavLogo />
      <span className="mt-3 inline-block text-xs text-zinc-400">
        © DENZING - All rights reserved.
      </span>
    </div>
  );
};

const GenericColumn = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string; Icon?: IconType }[];
}) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block font-medium text-zinc-500">{title}</span>
      {links.map((l) => (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
};
