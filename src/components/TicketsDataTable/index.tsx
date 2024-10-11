"use client";

import React from "react";

import type { Ticket } from "@prisma/client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { TooltipProvider } from "@/components/ui/tooltip";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import TicketPriorityBadge from "../TicketPriorityBadge";

interface Props {
  tickets: Ticket[];
}

const TicketsDataTable = ({ tickets }: Props): JSX.Element => {
  return (
    <TooltipProvider>
      <div className="w-full mt-5">
        <div className="rounded-md sm:border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Priority</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map(({ id, title, status, priority, createdAt }) => {
                return (
                  <TableRow key={id} data-href="/">
                    <TableCell>{title}</TableCell>
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
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default TicketsDataTable;
