"use client";

import React from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import ReactMarkdown from "react-markdown";

import type { Ticket } from "@prisma/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TicketPriorityBadge from "@/components/TicketPriorityBadge";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import DeleteButton from "@/components/DeleteButton";
import { deleteTicketAction } from "@/lib/actions/tickets";
import { paths } from "@/lib/utils";

interface Props {
  ticket: Ticket;
}

const TicketDetails = ({ ticket }: Props): JSX.Element => {
  const { id, title, description, status, priority, createdAt, updatedAt } =
    ticket;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between mb-4">
            <TicketStatusBadge status={status} />
            <TicketPriorityBadge priority={priority} />
          </div>
          {title}
        </CardTitle>
        <CardDescription>
          <span className="grid grid-cols-[150px_1fr]">
            <span>Created at: </span>
            {createdAt.toLocaleDateString("en-GB", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
          <span className="grid grid-cols-[150px_1fr]">
            <span>Updated at: </span>
            {updatedAt.toLocaleDateString("en-GB", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="prose dark:prose-invert">
        <ReactMarkdown>{description}</ReactMarkdown>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <Link
          href={{
            pathname: paths.tickets(id, true),
            query: { ptrt: paths.tickets(id) },
          }}
          className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 flex gap-2 max-w-[120px]"
        >
          <Pencil />
          Edit
        </Link>

        <DeleteButton
          handleDelete={() => {
            deleteTicketAction(id, paths.tickets());
          }}
        />
      </CardFooter>
    </Card>
  );
};

export default TicketDetails;
