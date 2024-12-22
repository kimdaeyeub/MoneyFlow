/*
작성자: 김대엽
파일의 역할: 홈화면에 들어갈 Dashboard
생성 일자: 2024-12-10
수정 일자: 2024-12-22
 */

import React from "react";
import CircleProgressChart from "@/components/charts/CircleProgressChart";
import ExpenseList from "@/components/ExpenseList";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface IProp {
  expenses: Expense[];
}

const DashboardView = ({ expenses }: IProp) => {
  return (
    <>
      <Card>
        <CardHeader className="text-2xl font-bold">초과 금지 카드</CardHeader>
        <CardContent className="flex h-[250px]">
          <CircleProgressChart goal={10000} value={7000} text="Daily" />
          <CircleProgressChart goal={20000} value={10000} text="Weekly" />
          <CircleProgressChart goal={80000} value={60000} text="Monthly" />
        </CardContent>
      </Card>
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default DashboardView;
