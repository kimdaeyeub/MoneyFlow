import React from "react";
import { Card } from "../ui/card";
import Category from "../category/Category";

export interface IData {
  category: {
    name: string;
    color: string;
  };
  date: string;
  money: number;
  name: string;
}

const SampleExpenseList = ({ data }: { data: IData[] }) => {
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
  );
};

export default SampleExpenseList;
