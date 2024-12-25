/*
작성자: 김대엽
파일의 역할: 카테고리 모델에 대한 CRUD 코드가 작성될 파일.
생성 일자: 2024-12-23
수정 일자: 2024-12-25
 */

"use server";

import db from "../db";

// TODO: 카테고리에 관한 모든 액션의 필터에는 사용자 정보도 포함되어야 함.
export const updateCategory = async ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  const updatedCategory = await db.category.update({
    where: { id },
    data: { name },
  });
  return updatedCategory;
};

// TODO: 카테고리를 삭제할 경우 해당 카테고리에 속한 지출내역도 삭제되므로 확인 메세지 렌더링 필요
export const deleteCategory = async ({ id }: { id: string }) => {
  const deletedCategory = await db.category.delete({ where: { id } });
  return deletedCategory;
};

export const getCategoriesList = async () => {
  const categories = await db.category.findMany({
    include: { expenses: true },
  });
  return categories;
};
