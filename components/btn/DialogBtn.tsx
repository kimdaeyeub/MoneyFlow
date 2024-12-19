/*
작성자: 김대엽
파일의 역할: 다이얼로그를 여는 버튼으로 폼이 정상 제출시 해당 다이얼로그를 닫기위해 상태가 필요해져 별도의 클라이언트 사이드 컴포넌트로 분리
생성 일자: 2024-12-19
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

const DialogBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <div className="text-center text-lg w-full py-3 btn-bg font-bold text-white rounded-lg">
          Add Expense
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add Expense</DialogTitle>
        <ExpenseForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogBtn;
