"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeleteCategoryBtn = ({ categoryId }: { categoryId: string }) => {
  const [open, setOpen] = useState(false);
  // TODO: AlertDialog(shadcn)으로 변경

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger className="text-red-500">Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel asChild>
          </AlertDialogCancel>
          <AlertDialogAction className="bg-blue-800">
            delete
          </AlertDialogAction> */}
          <button
            onClick={() => setOpen(false)}
            className="dark:bg-white dark:text-black bg-gray-700 text-white px-5 py-2 rounded-md font-medium text-[14px]"
          >
            Cancle
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-red-500 text-white px-5 py-2 rounded-md font-medium text-[14px]"
          >
            Delete
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCategoryBtn;
