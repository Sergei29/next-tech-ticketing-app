"use client";

import React from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";

import type { Ticket } from "@prisma/client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import TicketPriorityBadge from "@/components/TicketPriorityBadge";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import DeleteButton from "@/components/DeleteButton";
import { deleteTicketAction } from "@/lib/actions/tickets";
import { paths } from "@/lib/utils";

interface Props {
  tickets: Ticket[];
}

const TicketsDataTable = ({ tickets }: Props): JSX.Element => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Priority</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map(({ id, title, status, priority, createdAt }) => {
              return (
                <TableRow key={id} data-href="/">
                  <TableCell>
                    <Link href={paths.tickets(id)} className="hover:opacity-75">
                      <Tooltip>
                        <TooltipTrigger>{title}</TooltipTrigger>
                        <TooltipContent>
                          <span>see details</span>
                        </TooltipContent>
                      </Tooltip>
                    </Link>
                  </TableCell>
                  <TableCell className="text-center">
                    <TicketStatusBadge status={status} />
                  </TableCell>
                  <TableCell className="text-center">
                    <TicketPriorityBadge priority={priority} />
                  </TableCell>
                  <TableCell>
                    {createdAt.toLocaleDateString("en-GB", {
                      year: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </TableCell>
                  <TableCell>
                    <Link
                      href={paths.tickets(id, true)}
                      className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 flex gap-2 max-w-[120px]"
                    >
                      <Pencil />
                      Edit
                    </Link>
                  </TableCell>
                  <TableCell>
                    <DeleteButton
                      handleDelete={() => {
                        deleteTicketAction(id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TicketsDataTable;
