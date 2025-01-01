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
      return expenses.map((expense) => ({
        date: expense.date.toISOString().split("T")[0],
        money: expense.money,
      }));
    };
    return (
      <section>{expenses && <GraphView data={formatData(expenses)} />}</section>
    );
  }
}
