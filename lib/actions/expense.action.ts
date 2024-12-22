/*
작성자: 김대엽
파일의 역할: 지출 모델에 대한 CRUD 코드가 작성될 파일.
생성 일자: 2024-12-19
수정 일자: 2024-12-23
 */

"use server";

import db from "../db";
import { getLastThreeMonth } from "../getLastThreeMonth";
import { getWeekRange } from "../getWeekRange";

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
      // TODO: 로그인 및 회원가입 기능이 구현되면 사용자별 카테고리를 가져오도록 수정
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

// TODO: 로그인 및 회원가입 기능이 구현되면 사용자별 지출내역을 가져오도록 수정
export const getExpensesList = async () => {
  const expenses = await db.expense.findMany({
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return expenses;
};

// TODO: 로그인 및 회원가입 기능이 구현되면 사용자별 지출내역을 가져오도록 수정
export const getTodayExpenses = async () => {
  const expenses = await db.expense.findMany({
    where: {
      date: new Date(),
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return expenses;
};

export const getThisWeekExpenses = async () => {
  const range = getWeekRange();
  const expenses = await db.expense.findMany({
    where: {
      date: {
        gte: range.startOfWeek,
        lt: range.endOfWeek,
      },
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return expenses;
};

export const getExpensesForGraph = async () => {
  const range = getLastThreeMonth();
  const expenses = await db.expense.findMany({
    where: {
      date: {
        gte: range.threeMonthAgo,
        lt: range.today,
      },
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return expenses;
};

export const deleteExpense = async (id: string) => {
  const expense = await db.expense.delete({
    where: {
      id,
    },
  });

  return expense;
};

export const updateExpense = async ({
  id,
  name,
  date,
  money,
  category,
  lastCategoryId,
}: {
  id: string;
  name: string;
  date: Date;
  money: number;
  category: string;
  lastCategoryId: string;
}) => {
  const lastCategory = await db.category.findFirst({
    where: {
      id: lastCategoryId,
    },
    select: {
      name: true,
      _count: {
        select: {
          expense: true,
        },
      },
    },
  });
  let newCategoryId;
  if (lastCategory?.name !== category) {
    if (lastCategory?._count.expense === 0) {
      await db.category.delete({
        where: {
          id: lastCategoryId,
        },
      });
    }
    newCategoryId = await db.category.findFirst({
      where: {
        name: category,
      },
      select: {
        id: true,
      },
    });
    if (!newCategoryId) {
      newCategoryId = await db.category.create({
        data: {
          name: category,
        },
        select: {
          id: true,
        },
      });
    }
  }
  const expense = await db.expense.update({
    where: {
      id,
    },
    data: {
      name,
      date,
      money,
      categoryId: newCategoryId?.id,
    },
  });

  return expense;
};
