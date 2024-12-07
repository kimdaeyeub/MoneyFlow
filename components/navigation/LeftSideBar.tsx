/*
작성자: 김대엽
파일의 역할: 루트레이아웃에서 사용자가 여러 방식으로 데이터를 비교할 수 있도록 여러 뷰를 선택할 수 있는 
기능을 지원하는 화면 좌측 사이드 바이다.
생성 일자: 2024-12-06
수정 일자: 2024-12-07
 */

import React from "react";
import NavLink from "./NavLink";

const lists: string[] = ["Dashboard", "Calendar", "Graph", "Daily", "Weekly"];

const LeftSideBar = () => {
  return (
    <div className="sticky left-0 top-0 h-screen border-r shadow-sm pt-36 px-7 flex flex-col justify-start items-center gap-6 lg:w-[266px]">
      {lists.map((item) => (
        <NavLink key={item} item={item} />
      ))}
    </div>
  );
};

export default LeftSideBar;
