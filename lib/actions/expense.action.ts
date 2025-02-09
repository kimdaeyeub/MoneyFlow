/*
작성자: 김대엽
파일의 역할: 지출 모델에 대한 CRUD 코드가 작성될 파일.
생성 일자: 2024-12-19
수정 일자: 2024-12-29
 */

"use server";

import { revalidatePath } from "next/cache";
import db from "../db";
import { getLastThreeMonth } from "../getLastThreeMonth";
import { getWeekRange } from "../getWeekRange";
import getSession from "../session";
import { defaultCategoryColor } from "../constants";
import { toKoreaTime } from "../formatKoreaDate";

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
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;
  let categoryId = await db.category.findFirst({
    where: {
      name: category,
      userId,
    },
    select: {
      id: true,
    },
  });
  if (!categoryId) {
    categoryId = await db.category.create({
      data: {
        name: category,
        userId,
        color: defaultCategoryColor,
      },
      select: {
        id: true,
      },
    });
  }

  const newExpense = await db.expense.create({
    data: {
      userId,
      name: title,
      date,
      money: expense,
      categoryId: categoryId.id,
    },
  });
  revalidatePath("/");
  return newExpense;
};

export const getExpensesList = async (skip: number) => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;
  const expenses = await db.expense.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
    include: {
      category: {
        select: {
          name: true,
          color: true,
        },
      },
    },
    skip: (skip - 1) * 20,
    take: 20,
  });

  return expenses;
};

export const getTodayExpenses = async () => {
  const today = toKoreaTime(new Date());
  const startOfDayKorea = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    0,
    0,
    0
  );
  const endOfDayKorea = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59,
    999
  );

  const startOfDayUTC = new Date(
    startOfDayKorea.getTime() - 9 * 60 * 60 * 1000
  );
  const endOfDayUTC = new Date(endOfDayKorea.getTime() - 9 * 60 * 60 * 1000);

  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;

  const expenses = await db.expense.findMany({
    where: {
      userId,
      date: {
        gte: startOfDayUTC,
        lt: endOfDayUTC,
      },
    },
    orderBy: {
      date: "desc",
    },
    include: {
      category: {
        select: {
          name: true,
          color: true,
        },
      },
    },
  });

  return expenses;
};

export const getThisWeekExpenses = async () => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;

  const range = getWeekRange();
  const expenses = await db.expense.findMany({
    where: {
      userId,
      date: {
        gte: range.startOfWeek,
        lte: range.endOfWeek,
      },
    },
    orderBy: {
      date: "desc",
    },
    include: {
      category: {
        select: {
          name: true,
          color: true,
        },
      },
    },
  });

  return expenses;
};

export const getExpensesForGraph = async () => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;

  const range = getLastThreeMonth();

  const expenses = await db.expense.findMany({
    where: {
      userId,
      date: {
        gte: range.threeMonthAgo,
        lte: range.today,
      },
    },
    orderBy: {
      date: "asc",
    },
    include: {
      category: {
        select: {
          name: true,
          color: true,
        },
      },
    },
  });

  return expenses;
};

export const deleteExpense = async (id: string) => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;
  const expense = await db.expense.delete({
    where: {
      id,
    },
    select: {
      categoryId: true,
    },
  });
  const category = await db.category.findUnique({
    where: {
      id: expense.categoryId,
    },
    select: {
      _count: {
        select: {
          expenses: true,
        },
      },
    },
  });

  if (category !== null && category._count.expenses === 0) {
    await db.category.delete({
      where: {
        id: expense.categoryId,
      },
    });
  }

  revalidatePath("/");
  return expense;
};

export const updateExpense = async ({
  id,
  name,
  date,
  money,
  category,
  lastCategoryName,
}: {
  id: string;
  name: string;
  date: Date;
  money: number;
  category: string;
  lastCategoryName: string;
}) => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;
  const lastCategory = await db.category.findFirst({
    where: {
      userId,
      name: lastCategoryName,
    },
    select: {
      id: true,
      name: true,
      color: true,
      _count: {
        select: { expenses: true },
      },
    },
  });
  let newCategoryId;
  if (lastCategory?.name !== category) {
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
          userId,
          name: category,
          color: defaultCategoryColor,
        },
        select: {
          id: true,
        },
      });
    }
  } else {
    newCategoryId = lastCategory;
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
  if (lastCategory?._count.expenses === 1 && lastCategory.name !== category) {
    await db.category.delete({
      where: {
        id: lastCategory.id,
      },
    });
  }
  revalidatePath("/");

  return expense;
};

export const getThisMonthExpenses = async () => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;

  const today = toKoreaTime(new Date());
  const year = today.getFullYear();
  const month = today.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(today);

  first.setHours(0, 0, 0, 0);

  const startOfMonthUTC = new Date(first.getTime() - 9 * 60 * 60 * 1000);
  const endOfMonthUTC = new Date(last.getTime() - 9 * 60 * 60 * 1000);

  const expenses = await db.expense.findMany({
    where: {
      userId,
      date: {
        gte: startOfMonthUTC,
        lt: endOfMonthUTC,
      },
    },
    orderBy: {
      date: "desc",
    },
    include: {
      category: {
        select: {
          color: true,
          name: true,
        },
      },
    },
  });

  return expenses;
};

export const userTotalExpensesCount = async () => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;
  const count = await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      _count: {
        select: {
          expenses: true,
        },
      },
    },
  });
  if (!count) return null;
  return count?._count.expenses;
};
