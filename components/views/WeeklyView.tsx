/*
작성자: 김대엽
파일의 역할: 일주일동안의 지출 내역을 보여줄 컴포넌트이다.
생성 일자: 2024-12-11
 */

import React from "react";
import ExpenseList from "../ExpenseList";

const WeeklyView = () => {
  return (
    <ul className="flex flex-col gap-8">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <li key={item} className="flex flex-col justify-start items-start">
          <h1 className="font-bold text-2xl ml-3">{item}일</h1>
          <ExpenseList />
        </li>
      ))}
    </ul>
  );
};

export default WeeklyView;
