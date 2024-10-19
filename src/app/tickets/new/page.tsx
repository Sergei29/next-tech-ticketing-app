import TicketForm from "@/components/TicketForm";
import { createTicketAction } from "@/lib/actions/tickets";

const NewTicketPage = async () => {
  return (
    <>
      <TicketForm actionCreate={createTicketAction} />
    </>
  );
};

export default NewTicketPage;
