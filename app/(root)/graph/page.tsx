import GraphView from "@/components/views/GraphView";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section>
      <Suspense
        fallback={
          <div className="w-full h-[400px] dark:bg-gray-800 bg-slate-200 rounded-xl animate-pulse" />
        }
      >
        <GraphView />
      </Suspense>
    </section>
  );
};

export default page;
