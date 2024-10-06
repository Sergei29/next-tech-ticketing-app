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
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map(({ id, title, status, priority, createdAt }) => {
              return (
                <TableRow key={id} data-href="/">
                  <TableCell>{title}</TableCell>
                  <TableCell>{status}</TableCell>
                  <TableCell>{priority}</TableCell>
                  <TableCell>{createdAt.toLocaleDateString("en-GB")}</TableCell>
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
