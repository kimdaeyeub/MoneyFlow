/*
작성자: 김대엽
파일의 역할: 사이드바와 상단바를 포함한 레이아웃
생성 일자: 2024-12-06
수정 일자: 2024-12-11
 */

import LeftSideBar from "@/components/navigation/LeftSideBar";
import Navbar from "@/components/navigation/Navbar";
import RightSideBar from "@/components/navigation/RightSideBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative w-full">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar />
      </div>
    </main>
    // <SidebarProvider>
    //   <AppSidebar />
    //   <main>
    //     <SidebarTrigger />
    //     {children}
    //   </main>
    // </SidebarProvider>
  );
};

export default layout;
