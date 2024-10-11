"use client";

import React from "react";
import clsx from "clsx";
import { Flame } from "lucide-react";

import type { Priority } from "@prisma/client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const priorityMap: Record<Priority, { label: string; level: 1 | 2 | 3 }> = {
  LOW: { label: "Low", level: 1 },
  MEDIUM: { label: "Medium", level: 2 },
  HIGH: { label: "High", level: 3 },
};

interface Props {
  priority: Priority;
}

const TicketPriorityBadge = ({ priority }: Props): JSX.Element => {
  const { label, level } = priorityMap[priority];

  return (
    <Tooltip>
      <TooltipTrigger>
        <span className="flex justify-center">
          <Flame className={clsx(level >= 1 ? "text-red-500" : "text-muted")} />
          <Flame className={clsx(level >= 2 ? "text-red-500" : "text-muted")} />
          <Flame className={clsx(level >= 3 ? "text-red-500" : "text-muted")} />
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <span>{label}</span>
      </TooltipContent>
    </Tooltip>
  );
};

export default TicketPriorityBadge;
