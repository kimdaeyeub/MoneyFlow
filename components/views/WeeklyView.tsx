/*
작성자: 김대엽
파일의 역할: 일주일동안의 지출 내역을 보여줄 컴포넌트이다.
생성 일자: 2024-12-11
수정 일자: 2024-12-29
 */
import React from "react";
import ExpenseList from "../expense/ExpenseList";
import { getThisWeekExpenses } from "@/lib/actions/expense.action";

const WeeklyView = async () => {
  const expenses: Expense[] | null = await getThisWeekExpenses();

  const getDayOfWeek = (day: number) => {
    switch (day) {
      case 0:
        return "일요일";
      case 1:
        return "월요일";
      case 2:
        return "화요일";
      case 3:
        return "수요일";
      case 4:
        return "목요일";
      case 5:
        return "금요일";
      case 6:
        return "토요일";
      default:
        return "";
    }
  };

  const sortDay = (expenses: Expense[] | null) => {
    const data: {
      [key: string]: Expense[];
    } = {
      월요일: [],
      화요일: [],
      수요일: [],
      목요일: [],
      금요일: [],
      토요일: [],
      일요일: [],
    };
    if (!expenses) return data;
    expenses.forEach((expense) => {
      const day = expense.date.getDay();
      const dayOfWeek = getDayOfWeek(day);

      data[dayOfWeek].push(expense);
    });

    return data;
  };

  return (
    <ul className="flex flex-col gap-8 pb-14">
      {Object.keys(sortDay(expenses)).map((key) => (
        <li key={key} className="flex flex-col justify-start items-start">
          <h1 className="font-bold text-2xl ml-3">{key}</h1>
          <ExpenseList expenses={sortDay(expenses)[key]} />
        </li>
      ))}
    </ul>
  );
};

export default WeeklyView;
