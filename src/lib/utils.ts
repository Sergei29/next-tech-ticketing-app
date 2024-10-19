import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const paths = {
  home: () => "/",
  tickets: (id?: number | string, isEdit?: boolean) => {
    if (id && isEdit) {
      return `/tickets/${id}/edit`;
    }
    return id ? `/tickets/${id}` : "/tickets";
  },
  users: () => "/users",
};

export const getErrorMessage = (error: unknown) => {
  return error instanceof Error
    ? error.message
    : (error as Record<string, unknown>).toString();
};
