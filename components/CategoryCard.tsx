/*
작성자: 김대엽
파일의 역할: 루트레이아웃 우측 네비게이션바에 들어가는 컴포넌트로 '/categories/[id]'로 이동하는 링크와
해당 카테고리에 해당하는 데이터의 숫자를 렌더링해주는 span테그로 이루어진 컴포넌트이다.
생성 일자: 2024-12-07
 */

import Link from "next/link";
import React from "react";

const CategoryCard = ({ tag, count }: { tag: string; count: number }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <Link
        href={`/categories/${count}`}
        className="text-[#858ead] bg-[#f4f6f8] px-5 py-1.5 rounded-md font-medium text-sm"
      >
        {tag}
      </Link>

      <span className="text-[#3f4354] font-semibold text-sm">{count}</span>
    </div>
  );
};

export default CategoryCard;
