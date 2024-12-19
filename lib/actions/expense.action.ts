/*
작성자: 김대엽
파일의 역할: 지출 모델에 대한 CRUD 코드가 작성될 파일.
생성 일자: 2024-12-19
 */

"use server";

import db from "../db";

export const addExpense = async ({
  title,
  category,
  date,
  expense,
}: {
  title: string;
  category: string;
  date: Date;
  expense: number;
}) => {
  let categoryId = await db.category.findFirst({
    where: {
      name: category,
    },
    select: {
      id: true,
    },
  });
  if (!categoryId) {
    categoryId = await db.category.create({
      data: {
        name: category,
      },
      select: {
        id: true,
      },
    });
  }
  const newExpense = await db.expense.create({
    data: {
      name: title,
      date,
      money: expense,
      categoryId: categoryId.id,
    },
  });
  return newExpense;
};
