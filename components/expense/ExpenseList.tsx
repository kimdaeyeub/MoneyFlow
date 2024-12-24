/*
작성자: 김대엽
파일의 역할: 홈화면에 들어갈 지출내역 리스트
생성 일자: 2024-12-08
수정 일자: 2024-12-24
 */

import React from "react";
import { Card } from "../ui/card";
import ExpenseCard from "./ExpenseCard";

interface IProp {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: IProp) => {
  return (
    <Card className="min-h-60 mt-5 p-5 w-full">
      <div className="w-full h-full flex flex-col divide-y">
        {/* Header */}
        <div className="w-full grid grid-cols-4 gap-1 border-b">
          <div className="w-full py-3 flex justify-center items-center">
            <span className="font-medium text-sm text-gray-500">Category</span>
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <span className="font-medium text-sm text-gray-500">Date</span>
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <span className="font-medium text-sm text-gray-500">Name</span>
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <span className="font-medium text-sm text-gray-500">Amount</span>
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
