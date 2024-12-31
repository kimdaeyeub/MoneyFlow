/*
작성자: 김대엽
파일의 역할: 목표 모델에 대한 생성 및 업데이트 코드가 작성될 파일.
생성 일자: 2024-12-28
 */

"use server";

import { revalidatePath } from "next/cache";
import db from "../db";
import getSession from "../session";

export const getGoal = async () => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;
  const goals = await db.goal.findFirst({
    where: { userId },
  });
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
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;
  const newGoal = await db.goal.create({
    data: {
      userId,
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
  const session = await getSession();
  const userId = session.id;

  if (!userId) return null;
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
