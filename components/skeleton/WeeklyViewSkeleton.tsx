import React from "react";
import ExpenseListSkeleton from "./ExpenseListSkeleton";

const WeeklyViewSkeleton = () => {
  return (
    <ul className="flex flex-col gap-8 pb-14">
      {["월요일", "화요일", "수요일", "목요일", "금요일", "토요일"].map(
        (key) => (
          <li key={key} className="flex flex-col justify-start items-start">
            <h1 className="font-bold text-2xl ml-3">{key}</h1>
            <ExpenseListSkeleton />
          </li>
        )
      )}
    </ul>
  );
};

export default WeeklyViewSkeleton;
