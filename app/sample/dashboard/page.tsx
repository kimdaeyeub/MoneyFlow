import SampleExpenseList from "@/components/sample/SampleExpenseList";
import SampleGoalCard from "@/components/sample/SampleGoalCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "대시보드",
  description: "MoneyFlow 대시보드 페이지입니다.",
};

const data = [
  {
    category: { name: "음식", color: "#FF6347" },
    date: "2025.01.11",
    money: 5000,
    name: "식당에서 점심",
  },
  {
    category: { name: "교통", color: "#4682B4" },
    date: "2025.01.10",
    money: 4500,
    name: "택시비",
  },
  {
    category: { name: "오락", color: "#D81B60" },
    date: "2025.01.08",
    money: 6000,
    name: "영화 티켓",
  },
  {
    category: { name: "공과금", color: "#44A047" },
    date: "2025.01.07",
    money: 2500,
    name: "인터넷 요금",
  },
  {
    category: { name: "교통", color: "#4682B4" },
    date: "2025.01.06",
    money: 2000,
    name: "버스비",
  },
  {
    category: { name: "오락", color: "#D81B60" },
    date: "2025.01.04",
    money: 4000,
    name: "콘서트 티켓",
  },
  {
    category: { name: "공과금", color: "#44A047" },
    date: "2025.01.02",
    money: 3500,
    name: "전기세",
  },
  {
    category: { name: "음식", color: "#FF6347" },
    date: "2025.01.02",
    money: 3000,
    name: "식료품 구입",
  },
];

const page = () => {
  return (
    <section>
      <SampleGoalCard />
      <h1 className="text-3xl font-bold xl:hidden block">Dashboard</h1>

      <SampleExpenseList data={data} />
    </section>
  );
};

export default page;
