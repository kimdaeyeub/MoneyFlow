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
import { redirect } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = await getCategoryById({ id });
  if (!category) redirect("/");
  return {
    title: `MoneyFlow | ${category?.name}`,
    description: "MoneyFlow 카테고리별 내역을 보여주는 화면입니다.",
  };
}

const CategoryDetail = async ({ params }: { params: { id: string } }) => {
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
