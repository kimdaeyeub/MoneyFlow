/*
작성자: 김대엽
파일의 역할: 지출내역 리스트에 들어갈 테그
생성 일자: 2024-12-08
수정 일자: 2024-12-24
 */

import React from "react";

interface IProp {
  name: string;
}

const Tag = ({ name }: IProp) => {
  return (
    <div className="px-4 py-1 text-center rounded-full text-white text-sm bg-[#ff6f00da]">
      {name}
    </div>
  );
};

export default Tag;
