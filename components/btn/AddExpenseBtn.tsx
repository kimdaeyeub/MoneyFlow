/*
작성자: 김대엽
파일의 역할: 다이얼로그를 여는 버튼으로 폼이 정상 제출시 해당 다이얼로그를 닫기위해 상태가 필요해져 별도의 클라이언트 사이드 컴포넌트로 분리
생성 일자: 2024-12-19
수정 일자: 2024-12-25
 */

"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExpenseForm } from "../forms/ExpenseForm";
import { z } from "zod";
import { addExpense } from "@/lib/actions/expense.action";
import { expenseFormSchema } from "@/lib/validation";

const AddExpenseBtn = () => {
  const [open, setOpen] = useState(false);
  async function onSubmit(values: z.infer<typeof expenseFormSchema>) {
    const { title, category, date, money } = values;

    const newExpnese = await addExpense({
      title,
      category,
      date,
      expense: money,
    });
    if (newExpnese) {
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <div className="text-center text-lg w-full py-3 btn-bg font-bold text-white rounded-lg">
          지출 내역 추가
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-xl font-bold">지출 추가</DialogTitle>
        <ExpenseForm
          onSubmit={onSubmit}
          defaultValues={{
            title: "",
            category: "",
            date: new Date(),
            money: 0,
          }}
          mode="ADD"
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseBtn;
