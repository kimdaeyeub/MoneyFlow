import SampleExpenseList, {
  IData,
} from "@/components/sample/SampleExpenseList";
import React from "react";

interface WeeklyData {
  [key: string]: IData[];
}

const data: WeeklyData = {
  월: [
    {
      category: { name: "교통", color: "#E63946" },
      date: "2025.01.12",
      money: 8781,
      name: "지하철 요금",
    },
    {
      category: { name: "음식", color: "#FF7000" },
      date: "2025.01.12",
      money: 1814,
      name: "식료품 구입",
    },
    {
      category: { name: "교통", color: "#E63946" },
      date: "2025.01.12",
      money: 4126,
      name: "택시비",
    },
  ],
  화: [
    {
      category: { name: "교통", color: "#E63946" },
      date: "2025.01.13",
      money: 6636,
      name: "버스비",
    },
    {
      category: { name: "음식", color: "#FF7000" },
      date: "2025.01.13",
      money: 9845,
      name: "식당에서 점심",
    },
    {
      category: { name: "공과금", color: "#43A047" },
      date: "2025.01.13",
      money: 9620,
      name: "전기세",
    },
  ],
  수: [
    {
      category: { name: "기타", color: "#00838F" },
      date: "2025.01.14",
      money: 3951,
      name: "기타 비용2",
    },
    {
      category: { name: "음식", color: "#FF7000" },
      date: "2025.01.14",
      money: 4914,
      name: "식당에서 점심",
    },
    {
      category: { name: "공과금", color: "#43A047" },
      date: "2025.01.14",
      money: 8119,
      name: "전기세",
    },
  ],
  목: [
    {
      category: { name: "교통", color: "#E63946" },
      date: "2025.01.15",
      money: 1006,
      name: "지하철 요금",
    },
    {
      category: { name: "오락", color: "#f6ae07" },
      date: "2025.01.15",
      money: 5197,
      name: "콘서트 티켓",
    },
    {
      category: { name: "음식", color: "#FF7000" },
      date: "2025.01.15",
      money: 5860,
      name: "식당에서 점심",
    },
  ],
  금: [
    {
      category: { name: "교통", color: "#E63946" },
      date: "2025.01.16",
      money: 8581,
      name: "지하철 요금",
    },
    {
      category: { name: "음식", color: "#FF7000" },
      date: "2025.01.16",
      money: 7609,
      name: "카페 커피",
    },
    {
      category: { name: "교통", color: "#E63946" },
      date: "2025.01.16",
      money: 5017,
      name: "택시비",
    },
  ],
  토: [
    {
      category: { name: "오락", color: "#f6ae07" },
      date: "2025.01.17",
      money: 6047,
      name: "영화 티켓",
    },
    {
      category: { name: "교통", color: "#E63946" },
      date: "2025.01.17",
      money: 9061,
      name: "택시비",
    },
    {
      category: { name: "기타", color: "#00838F" },
      date: "2025.01.17",
      money: 8022,
      name: "기타 비용3",
    },
  ],
  일: [
    {
      category: { name: "기타", color: "#00838F" },
      date: "2025.01.18",
      money: 9894,
      name: "기타 비용1",
    },
    {
      category: { name: "공과금", color: "#43A047" },
      date: "2025.01.18",
      money: 2618,
      name: "가스 요금",
    },
    {
      category: { name: "교통", color: "#E63946" },
      date: "2025.01.18",
      money: 9724,
      name: "버스비",
    },
  ],
};

const page = () => {
  return (
    <section>
      <ul className="flex flex-col gap-8 pb-14">
        {Object.keys(data).map((key) => (
          <li key={key} className="flex flex-col justify-start items-start">
            <h1 className="font-bold text-2xl ml-3">{key}</h1>
            <SampleExpenseList data={data[key]} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default page;
