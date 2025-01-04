import WeeklyViewSkeleton from "@/components/skeleton/WeeklyViewSkeleton";
import WeeklyView from "@/components/views/WeeklyView";
import React, { Suspense } from "react";

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
