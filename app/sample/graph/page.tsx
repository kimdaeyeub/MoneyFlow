import ExpenseGraph from "@/components/charts/ExpenseGraph";
import React from "react";

const page = () => {
  interface IProp {
    data: {
      date: string;
      money: number;
    }[];
  }

  function getRandomDate(): string {
    const start = new Date();
    start.setDate(start.getDate() - 100);
    const end = new Date();
    end.setDate(end.getDate());
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toISOString().split("T")[0];
  }

  function getRandomMoney(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateMockData(count: number): IProp["data"] {
    const data: IProp["data"] = [];
    for (let i = 0; i < count; i++) {
      const money = getRandomMoney(2000, 5000);
      data.push({
        date: getRandomDate(),
        money,
      });
    }
    return data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  const mockData: IProp["data"] = generateMockData(100);
  console.log(mockData);

  return (
    <section>
      <ExpenseGraph data={mockData} />
    </section>
  );
};

export default page;
