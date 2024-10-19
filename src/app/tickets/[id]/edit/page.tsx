import { notFound } from "next/navigation";

import type { PageProps } from "@/types";

import TicketForm from "@/components/TicketForm";
import { updateTicketAction } from "@/lib/actions/tickets";
import { db } from "@/lib/db";

const EditTicketPage = async ({ params }: PageProps<{ id: string }>) => {
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
      <h1 className="text-3xl font-bold underline text-center">
        Edit {currentTicket.title}
      </h1>

      <TicketForm actionUpdate={updateTicketAction} ticket={currentTicket} />
    </>
  );
};

export default EditTicketPage;
