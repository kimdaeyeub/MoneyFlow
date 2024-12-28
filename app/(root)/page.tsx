/*
작성자: 김대엽
파일의 역할: 웹사이트 홈페이지
생성 일자: 2024-12-06
수정 일자: 2024-12-28
 */

import DashboardView from "@/components/views/DashboardView";
import GraphView from "@/components/views/GraphView";
import TodayView from "@/components/views/TodayView";
import WeeklyView from "@/components/views/WeeklyView";

import {
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
    const expenses: Expense[] = await getExpensesList();
    const today: Expense[] = await getTodayExpenses();
    const week: Expense[] = await getThisWeekExpenses();
    const month: Expense[] = await getThisMonthExpenses();
    const goal = await getGoal();
    console.log(week, "today", new Date());
    const calcExpenses = (expenses: Expense[] | []) => {
      if (expenses.length === 0) return 0;
      const money = expenses.map((expense) => expense.money);
      return money.reduce((a, b) => a + b);
    };
    // const money = today.map((expense) => expense.money);
    // console.log(
    //   // money.reduce((a, b) => a + b),
    //   money,
    //   "today total"
    // );
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
    const expenses: Expense[] = await getTodayExpenses();

    return (
      <section>
        <TodayView expenses={expenses} />
      </section>
    );
  }
  if (view === "this week") {
    const expenses: Expense[] = await getThisWeekExpenses();

    return (
      <section>
        <WeeklyView expenses={expenses} />
      </section>
    );
  }
  return <section>{view === "graph view" && <GraphView />}</section>;
}
