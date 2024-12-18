/*
작성자: 김대엽
파일의 역할: 루트레이아웃에서 카테고리별 네비게이션기능을 지원하는 화면 우측 사이드 바이다.
생성 일자: 2024-12-06
수정 일자: 2024-12-18
 */
"use client";
import React from "react";
import CategoryCard from "../CategoryCard";
import { useSearchParams } from "next/navigation";

const tags = ["교육", "취미", "음식", "생필품", "도서", "교통비"];

const RightSideBar = () => {
  const searchParams = useSearchParams();
  if (searchParams.get("view") !== "dashboard") return null;
  return (
    <nav className="sticky right-0 top-0 h-screen border-l dark:border-none shadow-sm pt-32 px-7 lg:w-[266px]">
      <h1 className="font-bold text-xl">Category</h1>
      <ul className="flex flex-col justify-start items-start gap-5 mt-7">
        {tags.map((tag, index) => (
          <CategoryCard key={tag} tag={tag} count={index * 2 + 1} />
        ))}
      </ul>
    </nav>
  );
};

export default RightSideBar;
