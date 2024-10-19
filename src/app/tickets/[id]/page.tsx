import { notFound } from "next/navigation";

import type { PageProps } from "@/types";

import TicketDetails from "@/components/TicketDetails";
import { db } from "@/lib/db";

const TicketDetailsPage = async ({ params }: PageProps<{ id: string }>) => {
  const currentTicket = await db.ticket.findUnique({
    where: {
      id: +params.id,
    },
  });

  if (!currentTicket) {
    return notFound();
  }

  return (
    <>
      <TicketDetails ticket={currentTicket} />
    </>
  );
};

export default TicketDetailsPage;
