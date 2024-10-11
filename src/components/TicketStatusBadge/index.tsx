"use client";

import React from "react";
import clsx from "clsx";

import type { Status } from "@prisma/client";

import { Badge } from "@/components/ui/badge";

const statusMap: Record<
  Status,
  { label: string; color: "bg-red-400" | "bg-blue-400" | "bg-green-400" }
> = {
  OPEN: { label: "Open", color: "bg-red-400" },
  STARTED: { label: "Started", color: "bg-blue-400" },
  CLOSED: { label: "Closed", color: "bg-green-400" },
};

interface Props {
  status: Status;
}

const TicketStatusBadge = ({ status }: Props): JSX.Element => {
  const { label, color } = statusMap[status];

  return (
    <Badge
      className={clsx(
        color,
        "text-background min-w-[86px] justify-center",
        `hover:${color}`,
      )}
    >
      {label}
    </Badge>
  );
};

export default TicketStatusBadge;
