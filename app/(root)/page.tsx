/*
작성자: 김대엽
파일의 역할: 웹사이트 홈페이지
생성 일자: 2024-12-06
수정 일자: 2024-12-29
 */

import DashboardView from "@/components/views/DashboardView";
import GraphView from "@/components/views/GraphView";
import TodayView from "@/components/views/TodayView";
import WeeklyView from "@/components/views/WeeklyView";

import {
  getExpensesForGraph,
  getExpensesList,
  getThisMonthExpenses,
  getThisWeekExpenses,
  getTodayExpenses,
} from "@/lib/actions/expense.action";
import { getGoal } from "@/lib/actions/goal.action";
import { redirect } from "next/navigation";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ view: string }>;
}) {
  const { view } = await searchParams;
  const page = view
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return {
    title: `MoneyFlow | ${page}`,
    description: "MoneyFlow 메인 콘텐츠 화면입니다.",
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: { view: string };
}) {
  const { view } = await searchParams;
  if (!view) {
    redirect("/?view=dashboard");
  }

  if (view === "dashboard") {
    const expenses: Expense[] | null = await getExpensesList();
    const today: Expense[] | null = await getTodayExpenses();
    const week: Expense[] | null = await getThisWeekExpenses();
    const month: Expense[] | null = await getThisMonthExpenses();
    const goal = await getGoal();

    const calcExpenses = (expenses: Expense[] | null) => {
      if (!expenses || expenses.length === 0) return 0;
      const money = expenses.map((expense) => expense.money);
      return money.reduce((a, b) => a + b);
    };

    return (
      <section>
        <DashboardView
          expenses={expenses}
          goal={goal}
          circularProgressbar={{
            week: calcExpenses(week),
            today: calcExpenses(today),
            month: calcExpenses(month),
          }}
        />
      </section>
    );
  }

  if (view === "today") {
    const expenses: Expense[] | null = await getTodayExpenses();

    return (
      <section>
        <TodayView expenses={expenses} />
      </section>
    );
  }
  if (view === "this week") {
    const expenses: Expense[] | null = await getThisWeekExpenses();

    return (
      <section>
        <WeeklyView expenses={expenses} />
      </section>
    );
  }

  if (view === "graph view") {
    const expenses: Expense[] | null = await getExpensesForGraph();
    const formatData = (expenses: Expense[]) => {
      const groupedData = expenses.reduce((acc, expense) => {
        const date = expense.date.toISOString().split("T")[0];
        if (!acc[date]) {
          acc[date] = { date, money: 0 };
        }
        acc[date].money += expense.money;
        return acc;
      }, {} as Record<string, { date: string; money: number }>);

      return Object.values(groupedData);
    };
    console.log(formatData(expenses!));
    return (
      <section>{expenses && <GraphView data={formatData(expenses)} />}</section>
    );
  }
}
