"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import type { Ticket } from "@prisma/client";

import { ticketSchema } from "@/lib/validationSchema/tickets";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => (
    <div className="h-[406px] grid grid-rows-[46px_1fr_30px] gap-1">
      <Skeleton className="w-full rounded-md" />
      <Skeleton className="w-full rounded-md" />
      <Skeleton className="w-[20%] rounded-md ml-auto" />
    </div>
  ),
});

type FormValues = z.infer<typeof ticketSchema>;

type Props = {
  actionCreate?: (values: FormValues) => Promise<string | undefined>;
  actionUpdate?: (
    values: FormValues,
    id: number,
    ptrt?: string,
  ) => Promise<string | undefined>;
  ticket?: Ticket;
};

const TicketForm = ({
  actionCreate,
  actionUpdate,
  ticket,
}: Props): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const searchParams = useSearchParams();

  const ptrt = searchParams.get("ptrt") ?? undefined;

  const form = useForm<FormValues>({
    defaultValues: ticket,
    resolver: zodResolver(ticketSchema),
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setError(null);
    let errorMessage: string | undefined;

    if (actionCreate) {
      errorMessage = await actionCreate(values);
    }

    if (actionUpdate && ticket) {
      errorMessage = await actionUpdate(values, ticket.id, ptrt);
    }

    if (errorMessage) {
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-md border w-full p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ticket Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ticket Title..."
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Controller
            name="description"
            control={form.control}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { ref, ...restFieldProps } }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <SimpleMDE
                  placeholder="Description"
                  {...restFieldProps}
                  value={restFieldProps.value || ""}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex space-x-4 w-full">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>

                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="OPEN">Open</SelectItem>
                        <SelectItem value="STARTED">Started</SelectItem>
                        <SelectItem value="CLOSED">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="LOW">Low</SelectItem>
                        <SelectItem value="MEDIUM">Medium</SelectItem>
                        <SelectItem value="HIGH">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="min-h-4 flex items-center">
            {error && (
              <p className="text-red-600 text-xl font-semibold">{error}</p>
            )}
          </div>
          <div className="space-x-4">
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Button
              type="reset"
              variant="secondary"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TicketForm;
