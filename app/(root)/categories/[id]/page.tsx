/*
작성자: 김대엽
파일의 역할: 카테고리별로 가계부를 필터링해서 보여주는 페이지.
생성 일자: 2024-12-07
수정 일자: 2024-12-28
 */
import DeleteCategoryBtn from "@/components/btn/DeleteCategoryBtn";
import UpdateCategoryBtn from "@/components/btn/UpdateCategoryBtn";
import ExpenseList from "@/components/expense/ExpenseList";
import { getCategoryById } from "@/lib/actions/category.action";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "MoneyFlow | 카테고리",
  description: "MoneyFlow 로그인 페이지입니다.",
};

const CategoryDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const category = await getCategoryById({ id });
  if (!category) redirect("/");
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-2xl ml-3">{category?.name}</h1>
        <div className="flex justify-center items-center gap-5 font-medium text-sm">
          <UpdateCategoryBtn category={category} />
          <DeleteCategoryBtn categoryId={id} />
        </div>
      </div>

      <ExpenseList expenses={category?.expenses ?? []} />
    </>
  );
};

export default CategoryDetail;
