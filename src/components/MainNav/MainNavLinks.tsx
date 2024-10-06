"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, href: "/", label: "Dashboard" },
  { id: 2, href: "/tickets", label: "Tickets" },
  { id: 3, href: "/users", label: "Users" },
];

const MainNavLinks = (): JSX.Element => {
  const pathName = usePathname();

  return (
    <ul className="flex items-center gap-2">
      {navLinks.map(({ id, href, label }) => (
        <li key={id}>
          <Link
            href={href}
            className={clsx(
              "navbar-link",
              pathName === href &&
                "underline cursor-default text-primary/70 hover:text-primary/60",
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNavLinks;
