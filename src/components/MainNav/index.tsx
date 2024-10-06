"use client";

import Link from "next/link";
import React from "react";

const MainNav = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/tickets">Tickets</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
