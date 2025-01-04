import React from "react";
import ExpenseGraph from "../charts/ExpenseGraph";
import { getExpensesForGraph } from "@/lib/actions/expense.action";
import { toKoreaTime } from "@/lib/formatKoreaDate";

const GraphView = async () => {
  const expenses: Expense[] | null = await getExpensesForGraph();
  const formatData = (expenses: Expense[]) => {
    const groupedData = expenses.reduce((acc, expense) => {
      const koreaDate = toKoreaTime(new Date(expense.date));

      const date = koreaDate.toISOString().split("T")[0];

      if (!acc[date]) {
        acc[date] = { date, money: 0 };
      }
      acc[date].money += expense.money;
      return acc;
    }, {} as Record<string, { date: string; money: number }>);

    return Object.values(groupedData);
  };

  return <>{expenses && <ExpenseGraph data={formatData(expenses)} />};</>;
};

export default GraphView;
