import ExpenseListSkeleton from "@/components/skeleton/ExpenseListSkeleton";
import TodayView from "@/components/views/TodayView";
import React, { Suspense } from "react";

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
