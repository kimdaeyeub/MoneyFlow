/*
작성자: 김대엽
파일의 역할: 웹사이트 홈페이지
생성 일자: 2024-12-06
수정 일자: 2024-12-22
 */

import DashboardView from "@/components/views/DashboardView";
import GraphView from "@/components/views/GraphView";
import TodayView from "@/components/views/TodayView";
import WeeklyView from "@/components/views/WeeklyView";
import { getExpensesList } from "@/lib/actions/expense.action";
import { redirect } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  searchParams: { view: string };
}) {
  if (!searchParams.view) {
    redirect("/?view=dashboard");
  }
  if (searchParams.view === "dashboard") {
    const expenses: Expense[] = await getExpensesList();

    return (
      <section>
        {searchParams.view === "dashboard" && (
          <DashboardView expenses={expenses} />
        )}
      </section>
    );
  }
  return (
    <section>
      {searchParams.view === "graph view" && <GraphView />}
      {searchParams.view === "today" && <TodayView />}
      {searchParams.view === "this week" && <WeeklyView />}
    </section>
  );
}
