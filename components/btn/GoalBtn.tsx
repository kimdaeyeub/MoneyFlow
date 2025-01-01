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
import { createGoal, updateGoal } from "@/lib/actions/goal.action";

interface IProp {
  mode: "Add" | "Edit";
  goal?: Goal;
}

const GoalBtn = ({ mode, goal }: IProp) => {
  const [open, setOpen] = useState(false);

  const addGoal = async (values: z.infer<typeof goalFormSchema>) => {
    const newGoal = await createGoal(values);
    if (newGoal) {
      setOpen(false);
    }
  };

  const editGoal = async (values: z.infer<typeof goalFormSchema>) => {
    const updatedGoal = await updateGoal({
      id: goal!.id,
      day: values.day,
      week: values.week,
      month: values.month,
    });
    if (updatedGoal) {
      setOpen(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="px-4 py-2 rounded-full btn-bg text-white font-bold">
          {mode === "Add" ? "목표 추가하기" : "목표 수정하기"}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "Add" ? "새로운 목표 설정" : "목표 수정하기"}
          </DialogTitle>
        </DialogHeader>
        <GoalForm
          onSubmit={mode === "Add" ? addGoal : editGoal}
          defaultValues={
            mode === "Add"
              ? { day: 0, week: 0, month: 0 }
              : { day: goal!.day, week: goal!.week, month: goal!.month }
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default GoalBtn;
