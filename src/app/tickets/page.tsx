import TicketsDataTable from "@/components/TicketsDataTable";
import { db } from "@/lib/db";

const Tickets = async () => {
  const tickets = await db.ticket.findMany({
    orderBy: {
      title: "asc",
    },
  });

  return (
    <>
      <h1>Tickets</h1>
      <TicketsDataTable tickets={tickets} />
    </>
  );
};

export default Tickets;
