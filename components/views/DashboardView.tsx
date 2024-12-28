/*
작성자: 김대엽
파일의 역할: 홈화면에 들어갈 Dashboard
생성 일자: 2024-12-10
수정 일자: 2024-12-28
 */

import React from "react";
import CircleProgressChart from "@/components/charts/CircleProgressChart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ExpenseList from "../expense/ExpenseList";
import GoalBtn from "../btn/GoalBtn";

interface IProp {
  expenses: Expense[];
  goal: Goal | null;
}

const DashboardView = ({ expenses, goal }: IProp) => {
  return (
    <>
      <Card>
        {goal === null ? (
          <div className="min-h-32 flex flex-col gap-3 justify-center items-center px-4">
            <CardHeader className="w-full">
              <div className="w-full flex justify-between items-center">
                <span className="text-2xl font-bold">초과 금지 카드</span>
                <GoalBtn mode="Add" />
              </div>
            </CardHeader>
            <div className="min-h-24 flex justify-center items-center font-semibold text-gray-500 text-[15px]">
              <p>목표가 존재하지 않습니다. 지금바로 설정해보세요.</p>
            </div>
          </div>
        ) : (
          <>
            <CardHeader>
              <div className="w-full flex justify-between items-center">
                <span className="text-2xl font-bold">초과 금지 카드</span>
                <GoalBtn mode="Add" />
              </div>
            </CardHeader>
            <CardContent className="flex h-[250px]">
              <CircleProgressChart goal={10000} value={7000} text="Daily" />
              <CircleProgressChart goal={20000} value={10000} text="Weekly" />
              <CircleProgressChart goal={80000} value={60000} text="Monthly" />
            </CardContent>
          </>
        )}
      </Card>
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default DashboardView;
