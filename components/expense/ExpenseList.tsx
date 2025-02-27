/*
작성자: 김대엽
파일의 역할: 홈화면에 들어갈 지출내역 리스트
생성 일자: 2024-12-08
수정 일자: 2024-12-28
 */

import React from "react";
import { Card } from "../ui/card";
import ExpenseCard from "./ExpenseCard";

interface IProp {
  expenses: Expense[] | null;
}

const ExpenseList = ({ expenses }: IProp) => {
  if (!expenses) return null;

  if (expenses.length === 0) {
    return (
      <Card className="min-h-40 mt-5 p-5 w-full flex items-center justify-center dark:bg-transparent">
        <span className="font-medium text-gray-400 text-sm">
          해당 날짜의 지출내역이 존재하지 않습니다.
        </span>
      </Card>
    );
  }
  return (
    <Card className="min-h-40 mt-5 p-5 w-full flex items-center dark:bg-transparent">
      <div className="w-full h-full flex flex-col divide-y dark:divide-gray-800">
        {/* Header */}
        <div className="w-full grid grid-cols-4 gap-1 border-b dark:border-gray-800">
          <div className="w-full py-3 flex justify-center items-center">
            <span className="font-medium text-sm text-gray-500">카테고리</span>
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <span className="font-medium text-sm text-gray-500">날짜</span>
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <span className="font-medium text-sm text-gray-500">지출 내용</span>
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <span className="font-medium text-sm text-gray-500">금액</span>
          </div>
        </div>
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}
      </div>
    </Card>
  );
};

export default ExpenseList;
