/*
작성자: 김대엽
파일의 역할: 하루동안의 지출 내역을 보여줄 컴포넌트이다.
생성 일자: 2024-12-11
수정 일자: 2024-12-24
 */

import React from "react";
import ExpenseList from "../expense/ExpenseList";
import { getTodayExpenses } from "@/lib/actions/expense.action";

const TodayView = async () => {
  const expenses: Expense[] | null = await getTodayExpenses();

  return (
    <>
      <h1 className="font-bold text-2xl ml-3">오늘 지출 현황</h1>
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default TodayView;
