import React from "react";
import ExpenseListSkeleton from "./ExpenseListSkeleton";

const CategoryDetailSkeleton = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="w-20 h-5 rounded-full bg-gray-800" />
        <div className="flex justify-center items-center gap-5 font-medium text-sm">
          <div className="w-12 h-5 rounded-full bg-gray-800" />
          <div className="w-12 h-5 rounded-full bg-gray-800" />
        </div>
      </div>
      <ExpenseListSkeleton />
    </>
  );
};

export default CategoryDetailSkeleton;
