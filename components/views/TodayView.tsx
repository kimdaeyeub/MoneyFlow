import React from "react";
import ExpenseList from "../ExpenseList";

const TodayView = () => {
  return (
    <>
      <h1 className="font-bold text-2xl ml-3">오늘 지출 현황</h1>
      <ExpenseList />
    </>
  );
};

export default TodayView;
