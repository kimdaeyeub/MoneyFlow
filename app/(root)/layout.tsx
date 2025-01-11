/*
작성자: 김대엽
파일의 역할: 사이드바와 상단바를 포함한 레이아웃
생성 일자: 2024-12-06
수정 일자: 2024-12-25
 */

import LeftSideBar from "@/components/navigation/LeftSideBar";
import Navbar from "@/components/navigation/Navbar";
import RightSideBar from "@/components/navigation/RightSideBar";
import React, { Suspense } from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative w-full">
      <Navbar />
      <div className="flex">
        <LeftSideBar />

        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-8 pb-6 pt-36 max-md:pb-14">
          <div className="mx-auto w-full">{children}</div>
        </section>
        <Suspense
          fallback={
            <div className="dark:bg-gray-800 bg-slate-200 animate-pulse h-screen hidden lg:block xl:w-[300px] lg:w-[250px]"></div>
          }
        >
          <RightSideBar />
        </Suspense>
      </div>
    </main>
  );
};

export default layout;
