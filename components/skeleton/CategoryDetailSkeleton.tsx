import React from "react";
import ExpenseListSkeleton from "./ExpenseListSkeleton";

const CategoryDetailSkeleton = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="w-20 h-5 rounded-full dark:bg-gray-800 bg-slate-200" />
        <div className="flex justify-center items-center gap-5 font-medium text-sm">
          <div className="w-12 h-5 rounded-full dark:bg-gray-800 bg-slate-200" />
          <div className="w-12 h-5 rounded-full dark:bg-gray-800 bg-slate-200" />
        </div>
      </div>
      <ExpenseListSkeleton />
    </>
  );
};

export default CategoryDetailSkeleton;
