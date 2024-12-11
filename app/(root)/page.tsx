/*
작성자: 김대엽
파일의 역할: 웹사이트 홈페이지
생성 일자: 2024-12-06
수정 일자: 2024-12-11
 */

import DashboardView from "@/components/views/DashboardView";
import GraphView from "@/components/views/GraphView";
import TodayView from "@/components/views/TodayView";
import WeeklyView from "@/components/views/WeeklyView";

export default function Home({
  searchParams,
}: {
  searchParams: { view: string };
}) {
  return (
    <section>
      {searchParams.view === "dashboard" && <DashboardView />}
      {searchParams.view === "graph view" && <GraphView />}
      {searchParams.view === "today" && <TodayView />}
      {searchParams.view === "this week" && <WeeklyView />}
    </section>
  );
}
