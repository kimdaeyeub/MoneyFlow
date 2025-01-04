import ExpenseListSkeleton from "@/components/skeleton/ExpenseListSkeleton";
import TodayView from "@/components/views/TodayView";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "MoneyFlow | 오늘 지출",
  description: "MoneyFlow 로그인 페이지입니다.",
};

const page = () => {
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
};

export default page;
