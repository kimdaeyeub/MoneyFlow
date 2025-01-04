/*
작성자: 김대엽
파일의 역할: 웹사이트 홈페이지
생성 일자: 2024-12-06
수정 일자: 2024-12-29
 */

import ExpenseListSkeleton from "@/components/skeleton/ExpenseListSkeleton";
import GoalCard from "@/components/ui/GoalCard";
import DashboardView from "@/components/views/DashboardView";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "MoneyFlow | 대시보드",
  description: "MoneyFlow 로그인 페이지입니다.",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;

  if (page === undefined || page === "") redirect("/?page=1");
  return (
    <section>
      <Suspense
        fallback={
          <div>
            <div className="w-full h-96 rounded-xl dark:bg-gray-800 bg-slate-200 animate-pulse" />
            <ExpenseListSkeleton />
          </div>
        }
      >
        <GoalCard />
        <DashboardView page={page} />
      </Suspense>
    </section>
  );
}
