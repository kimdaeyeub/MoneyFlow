/*
작성자: 김대엽
파일의 역할: 웹사이트 홈페이지
생성 일자: 2024-12-06
수정 일자: 2024-12-29
 */

import ExpenseListSkeleton from "@/components/skeleton/ExpenseListSkeleton";
import WeeklyViewSkeleton from "@/components/skeleton/WeeklyViewSkeleton";
import DashboardView from "@/components/views/DashboardView";
import GraphView from "@/components/views/GraphView";
import TodayView from "@/components/views/TodayView";
import WeeklyView from "@/components/views/WeeklyView";
import { redirect } from "next/navigation";
import { Suspense } from "react";

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
    return (
      <section>
        <Suspense
          fallback={
            <div>
              <div className="w-full h-96 rounded-xl bg-gray-800 animate-pulse" />
              <ExpenseListSkeleton />
            </div>
          }
        >
          <DashboardView />
        </Suspense>
      </section>
    );
  }

  if (view === "today") {
    return (
      <section>
        <Suspense
          fallback={
            <div>
              <h1 className="font-bold text-2xl ml-3">오늘 지출 현황</h1>
              <ExpenseListSkeleton />
            </div>
          }
        >
          <TodayView />
        </Suspense>
      </section>
    );
  }

  if (view === "this week") {
    return (
      <section>
        <Suspense fallback={<WeeklyViewSkeleton />}>
          <WeeklyView />
        </Suspense>
      </section>
    );
  }

  if (view === "graph view") {
    return (
      <section>
        <Suspense
          fallback={
            <div className="w-full h-[400px] bg-gray-800 rounded-xl animate-pulse" />
          }
        >
          <GraphView />
        </Suspense>
      </section>
    );
  }
}
