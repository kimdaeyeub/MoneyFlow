/*
작성자: 김대엽
파일의 역할: 카테고리 모델에 대한 CRUD 코드가 작성될 파일.
생성 일자: 2024-12-23
수정 일자: 2024-12-26
 */

"use server";

import { revalidatePath } from "next/cache";
import db from "../db";
import getSession from "../session";

export const updateCategory = async ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;
  const updatedCategory = await db.category.update({
    where: { id },
    data: { name },
  });
  return updatedCategory;
};

export const deleteCategory = async ({ id }: { id: string }) => {
  const deletedCategory = await db.category.delete({ where: { id } });
  revalidatePath("/");
  return deletedCategory;
};

export const getCategoriesList = async () => {
  const session = await getSession();
  const userId = session.id;
  if (!userId) return null;

  const categories = await db.category.findMany({
    where: { userId },
    include: { expenses: true },
  });
  return categories;
};

// 카테고리 이름, 해당 지출 목록을 불러오는 함수
export const getCategoryById = async ({ id }: { id: string }) => {
  const category = await db.category.findUnique({
    where: { id },
    include: {
      expenses: {
        include: {
          category: {
            select: {
              name: true,
              color: true,
            },
          },
        },
      },
    },
  });
  return category;
};
