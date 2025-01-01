/*
작성자: 김대엽
파일의 역할: 사이드바와 상단바를 포함한 레이아웃
생성 일자: 2024-12-06
수정 일자: 2024-12-25
 */

import LeftSideBar from "@/components/navigation/LeftSideBar";
import Navbar from "@/components/navigation/Navbar";
import RightSideBar from "@/components/navigation/RightSideBar";
import { getCategoriesList } from "@/lib/actions/category.action";
import getSession from "@/lib/session";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const categories: Category[] | null = await getCategoriesList();
  const session = await getSession();

  return (
    <main className="relative w-full">
      <Navbar userId={session.id} />
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-8">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar categories={categories} />
      </div>
    </main>
  );
};

export default layout;
