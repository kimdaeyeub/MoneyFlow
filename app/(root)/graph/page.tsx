import GraphView from "@/components/views/GraphView";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "MoneyFlow | 그래프",
  description: "MoneyFlow 로그인 페이지입니다.",
};

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
