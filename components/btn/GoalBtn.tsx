/*
작성자: 김대엽
파일의 역할: 목표지출 생성 및 수정 버튼 컴포넌트
생성 일자: 2024-12-28
 */

"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { goalFormSchema } from "@/lib/validation";
import GoalForm from "../forms/GoalForm";
import { createGoal } from "@/lib/actions/goal.action";

interface IProp {
  mode: "Add" | "Edit";
}

const GoalBtn = ({ mode }: IProp) => {
  const [open, setOpen] = useState(false);

  const addGoal = async (values: z.infer<typeof goalFormSchema>) => {
    const newGoal = await createGoal(values);
    if (newGoal) {
      setOpen(false);
    }
  };

  const updateGoal = async (values: z.infer<typeof goalFormSchema>) => {
    console.log(values);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="px-4 py-2 rounded-full btn-bg text-white font-bold">
          {mode === "Add" ? "Add Goal" : "Update Goal"}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add and Update Goal</DialogTitle>
        </DialogHeader>
        <GoalForm
          onSubmit={mode === "Add" ? addGoal : updateGoal}
          defaultValues={{ day: 0, week: 0, month: 0 }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default GoalBtn;
