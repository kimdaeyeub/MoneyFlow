/*
작성자: 김대엽
파일의 역할: 루트레이아웃에서 카테고리별 네비게이션기능을 지원하는 화면 우측 사이드 바이다.
생성 일자: 2024-12-06
수정 일자: 2024-12-26
 */
import React from "react";
import CategoryCard from "../category/CategoryCard";
import { getCategoriesList } from "@/lib/actions/category.action";

// interface IProp {
//   categories: Category[] | null;
// }

const RightSideBar = async () => {
  const categories: Category[] | null = await getCategoriesList();

  return (
    <nav className="hidden lg:block sticky right-0 top-0 h-screen border-l dark:border-gray-800 shadow-sm pt-32 px-7 xl:w-[300px] lg:w-[250px]">
      <h1 className="font-bold text-xl">카테고리</h1>
      <ul className="flex flex-col justify-start items-start gap-5 mt-7">
        {categories &&
          categories.map((category) => (
            <CategoryCard
              key={category.id}
              tag={category.name}
              count={category.expenses.length}
              id={category.id}
            />
          ))}
      </ul>
    </nav>
  );
};

export default RightSideBar;
