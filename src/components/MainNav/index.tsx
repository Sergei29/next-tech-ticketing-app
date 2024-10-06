import Link from "next/link";

import ToggleMode from "@/components/ToggleMode";
import MainNavLinks from "./MainNavLinks";

const MainNav = (): JSX.Element => {
  return (
    <div className="flex justify-between">
      <MainNavLinks />

      <ul className="flex items-center gap-2">
        <li>
          <Link href="/">Logout</Link>
        </li>
        <li>
          <ToggleMode />
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
