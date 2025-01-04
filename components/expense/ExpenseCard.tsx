/*
작성자: 김대엽
파일의 역할: 지출 목록에 들어갈 각 지출 카드 컴포넌트
생성 일자: 2024-12-24
수정 일자: 2024-12-29
 */

"use client";

import React, { useState } from "react";
import Category from "../category/Category";
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
import { deleteExpense, updateExpense } from "@/lib/actions/expense.action";

interface IProp {
  expense: Expense;
}

const ExpenseCard = ({ expense }: IProp) => {
  const [open, setOpen] = useState(false);

  async function onSubmit(values: z.infer<typeof expenseFormSchema>) {
    const { title, category, date, money } = values;
    // const currDate = new Date(date); // Date 객체로 변환
    // const koreaOffset = 9 * 60; // UTC+9:00 (분 단위)
    // const localOffset = currDate.getTimezoneOffset(); // 현재 시스템의 타임존 오프셋 (분 단위)

    // // 한국 시간으로 변환
    // const koreaTime = new Date(
    //   currDate.getTime() + (koreaOffset - localOffset) * 60 * 1000
    // );

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

  const deleteAction = async () => {
    await deleteExpense(expense.id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="w-full grid grid-cols-4 gap-1 text-sm text-gray-600 font-medium hover:bg-slate-50 bg-white dark:bg-transparent dark:text-gray-400 transition-colors duration-300">
          <div className="w-full py-4 flex justify-center items-center">
            <Category
              name={expense.category.name}
              color={expense.category.color}
            />
          </div>
          <div className="w-full py-4 flex justify-center items-center">
            <span>{expense.date.toDateString()}</span>
          </div>
          <div className="w-full py-4 flex justify-center items-center">
            <span>{expense.name}</span>
          </div>
          <div className="w-full py-4 flex justify-center items-center">
            <span>{expense.money}</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            지출 내역 삭제 및 수정
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start mt-4">
          <ExpenseForm
            mode="EDIT"
            onSubmit={onSubmit}
            defaultValues={{
              money: expense.money,
              title: expense.name,
              category: expense.category.name,
              date: expense.date,
            }}
            deleteAction={deleteAction}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExpenseCard;
