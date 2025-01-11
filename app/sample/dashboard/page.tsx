import Category from "@/components/category/Category";
import SampleGoalCard from "@/components/sample/SampleGoalCard";
import { Card } from "@/components/ui/card";
import React from "react";

interface IData {
  category: {
    name: string;
    color: string;
  };
  date: string;
  money: number;
  name: string;
}
const data: IData[] = [
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
      <Card className="min-h-40 mt-5 p-5 w-full flex items-center dark:bg-transparent">
        <div className="w-full h-full flex flex-col divide-y dark:divide-gray-800">
          {/* Header */}
          <div className="w-full grid grid-cols-4 gap-1 border-b dark:border-gray-800">
            <div className="w-full py-3 flex justify-center items-center">
              <span className="font-medium text-sm text-gray-500">
                카테고리
              </span>
            </div>
            <div className="w-full py-3 flex justify-center items-center">
              <span className="font-medium text-sm text-gray-500">날짜</span>
            </div>
            <div className="w-full py-3 flex justify-center items-center">
              <span className="font-medium text-sm text-gray-500">
                지출 내용
              </span>
            </div>
            <div className="w-full py-3 flex justify-center items-center">
              <span className="font-medium text-sm text-gray-500">금액</span>
            </div>
          </div>
          {data.map((expense, index) => (
            <div
              key={index}
              className="w-full grid grid-cols-4 gap-1 text-sm text-gray-600 font-medium hover:bg-slate-50 bg-white dark:bg-transparent dark:text-gray-400 transition-colors duration-300"
            >
              <div className="w-full py-4 flex justify-center items-center">
                <Category
                  name={expense.category.name}
                  color={expense.category.color}
                />
              </div>
              <div className="w-full py-4 flex justify-center items-center">
                <span>{expense.date}</span>
              </div>
              <div className="w-full py-4 flex justify-center items-center">
                <span>{expense.name}</span>
              </div>
              <div className="w-full py-4 flex justify-center items-center">
                <span>{expense.money.toLocaleString("ko-KR")}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default page;
