"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { ticketSchema } from "@/lib/validationSchema/tickets";
import { paths, getErrorMessage } from "@/lib/utils";
import { db } from "@/lib/db";

export const createTicketAction = async (
  values: z.infer<typeof ticketSchema>,
): Promise<string | undefined> => {
  const result = ticketSchema.safeParse(values);
  if (!result.success) {
    return result.error.format()._errors.join(", ");
  }

  try {
    await db.ticket.create({
      data: result.data,
    });
  } catch (error) {
    return getErrorMessage(error);
  }

  revalidatePath(paths.tickets());
  return redirect(paths.tickets());
};

export const updateTicketAction = async (
  values: z.infer<typeof ticketSchema>,
  id: number,
  ptrt?: string,
): Promise<string | undefined> => {
  const result = ticketSchema.safeParse(values);
  if (!result.success) {
    return result.error.format()._errors.join(", ");
  }

  try {
    await db.ticket.update({
      where: { id },
      data: result.data,
    });
  } catch (error) {
    return getErrorMessage(error);
  }

  revalidatePath(paths.tickets());

  console.log({ ptrt });

  return redirect(ptrt || paths.tickets());
};

export const deleteTicketAction = async (id: number, ptrt?: string) => {
  try {
    await db.ticket.delete({
      where: { id },
    });
  } catch (error) {
    return getErrorMessage(error);
  }

  revalidatePath(paths.tickets());

  if (ptrt) {
    redirect(ptrt);
  }
};
