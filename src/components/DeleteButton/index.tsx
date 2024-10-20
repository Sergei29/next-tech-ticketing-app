"use client";

import React from "react";
import { SquareX } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  title?: string;
  content?: string;
  handleDelete: () => void;
}

const DeleteButton = ({ title, content, handleDelete }: Props): JSX.Element => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 focus:bg-red-700 flex items-center gap-2 max-w-[150px]">
        <SquareX />
        delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {title ?? "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {content ??
              `This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
