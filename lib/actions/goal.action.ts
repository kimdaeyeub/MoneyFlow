/*
작성자: 김대엽
파일의 역할: 목표 모델에 대한 생성 및 업데이트 코드가 작성될 파일.
생성 일자: 2024-12-28
 */

"use server";

import { revalidatePath } from "next/cache";
import db from "../db";

export const getGoal = async () => {
  const goals = await db.goal.findFirst({});
  return goals;
};

export const createGoal = async ({
  day,
  week,
  month,
}: {
  day: number;
  week: number;
  month: number;
}) => {
  const newGoal = await db.goal.create({
    data: {
      day,
      week,
      month,
    },
  });
  revalidatePath("/");
  return newGoal;
};

export const updateGoal = async ({
  day,
  week,
  month,
  id,
}: {
  day: number;
  week: number;
  month: number;
  id: string;
}) => {
  const updatedGoal = await db.goal.update({
    where: {
      id,
    },
    data: {
      day,
      week,
      month,
    },
  });
  revalidatePath("/");
  return updatedGoal;
};
