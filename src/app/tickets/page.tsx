import { db } from "@/lib/db";

const Tickets = async () => {
  const tickets = await db.ticket.findMany();

  return (
    <>
      <h1>Tickets</h1>
      <ul className="flex flex-wrap gap-2">
        {tickets.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </>
  );
};

export default Tickets;
