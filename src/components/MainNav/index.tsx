import Link from "next/link";

const MainNav = (): JSX.Element => {
  return (
    <div className="flex justify-between">
      <ul className="flex items-center gap-2">
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

      <ul className="flex items-center gap-2">
        <li>
          <Link href="/">Logout</Link>
        </li>
        <li>
          <Link href="/">Dark</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
