import Link from "next/link";
import { CirclePlus } from "lucide-react";

import TicketsDataTable from "@/components/TicketsDataTable";
import { db } from "@/lib/db";
import { paths } from "@/lib/utils";

const Tickets = async () => {
  const tickets = await db.ticket.findMany({
    orderBy: {
      title: "asc",
    },
  });

  return (
    <>
      <div className="flex px-4 justify-between items-center">
        <h1>Tickets</h1>
        <Link
          href={paths.tickets("new")}
          className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 flex items-center gap-2 max-w-[120px]"
        >
          <CirclePlus /> new
        </Link>
      </div>
      <TicketsDataTable tickets={tickets} />
    </>
  );
};

export default Tickets;
