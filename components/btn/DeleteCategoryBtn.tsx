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
import { deleteCategory } from "@/lib/actions/category.action";
import { redirect } from "next/navigation";

const DeleteCategoryBtn = ({ categoryId }: { categoryId: string }) => {
  const [open, setOpen] = useState(false);
  const onClickDeleteBtn = async (categoryId: string) => {
    const category = await deleteCategory({ id: categoryId });
    if (category) {
      setOpen(false);
      redirect("/dashboard");
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger className="text-red-500">삭제</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>해당 카테고리를 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            해당 카테고리를 삭제할 경우 해당 카테고리에 속한 지출 목록도 함께
            삭제됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <button
            onClick={() => setOpen(false)}
            className="dark:bg-white dark:text-black bg-gray-700 text-white px-5 py-2 rounded-md font-medium text-[14px]"
          >
            취소
          </button>
          <button
            onClick={() => onClickDeleteBtn(categoryId)}
            className="bg-red-500 text-white px-5 py-2 rounded-md font-medium text-[14px]"
          >
            삭제
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCategoryBtn;
