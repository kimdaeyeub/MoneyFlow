/*
작성자: 김대엽
파일의 역할: 루트레이아웃에서 카테고리별 네비게이션기능을 지원하는 화면 우측 사이드 바이다.
생성 일자: 2024-12-06
수정 일자: 2024-12-07
 */

import React from "react";
import CategoryCard from "../CategoryCard";

const tags = ["교육", "취미", "음식", "생필품", "도서", "교통비"];

const RightSideBar = () => {
  return (
    <nav className="sticky right-0 top-0 h-screen border-l shadow-sm pt-36 px-7 lg:w-[266px]">
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
