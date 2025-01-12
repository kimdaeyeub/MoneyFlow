import WeeklyViewSkeleton from "@/components/skeleton/WeeklyViewSkeleton";
import WeeklyView from "@/components/views/WeeklyView";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "이번주 지출",
  description: "MoneyFlow 이번주 지출 내역 페이지입니다.",
};

const page = () => {
  return (
    <section>
      <Suspense fallback={<WeeklyViewSkeleton />}>
        <WeeklyView />
      </Suspense>
    </section>
  );
};

export default page;
