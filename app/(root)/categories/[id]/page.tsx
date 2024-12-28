/*
작성자: 김대엽
파일의 역할: 카테고리별로 가계부를 필터링해서 보여주는 페이지.
생성 일자: 2024-12-07
수정 일자: 2024-12-28
 */

import ExpenseList from "@/components/expense/ExpenseList";
import { getCategoryById } from "@/lib/actions/category.action";
import React from "react";

const CategoryDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const category = await getCategoryById({ id });
  return (
    <>
      <h1 className="font-bold text-2xl ml-3">{category?.name}</h1>

      <ExpenseList expenses={category?.expenses ?? []} />
    </>
  );
};

export default CategoryDetail;
