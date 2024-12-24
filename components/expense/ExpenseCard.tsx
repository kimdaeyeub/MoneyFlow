/*
작성자: 김대엽
파일의 역할: 지출 목록에 들어갈 각 지출 카드 컴포넌트
생성 일자: 2024-12-24
 */

"use client";

import React, { useState } from "react";
import Tag from "../Tag";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExpenseForm } from "../forms/ExpenseForm";
import { expenseFormSchema } from "@/lib/validation";
import { z } from "zod";
import { updateExpense } from "@/lib/actions/expense.action";

interface IProp {
  expense: Expense;
}

const ExpenseCard = ({ expense }: IProp) => {
  const [open, setOpen] = useState(false);

  async function onSubmit(values: z.infer<typeof expenseFormSchema>) {
    const { title, category, date, money } = values;
    const updatedExpense = await updateExpense({
      name: title,
      category,
      date,
      money,
      id: expense.id,
      lastCategoryName: expense.category.name,
    });
    if (updatedExpense) {
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="w-full grid grid-cols-4 gap-1 text-sm text-gray-600 font-medium hover:bg-slate-50 bg-white transition-colors duration-300">
          <div className="w-full py-3 flex justify-center items-center">
            <Tag name={expense.category.name} />
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <span>{expense.date.toLocaleDateString("kr-ko")}</span>
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <span>{expense.name}</span>
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <span>{expense.money}</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit or Delete</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start">
          <ExpenseForm
            onSubmit={onSubmit}
            defaultValues={{
              money: expense.money,
              title: expense.name,
              category: expense.category.name,
              date: expense.date,
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExpenseCard;
