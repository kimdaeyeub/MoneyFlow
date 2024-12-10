/*
작성자: 김대엽
파일의 역할: 루트레이아웃에서 로고 및 로그인 버튼 다크 모드 토글 검색 바 등을 포함한 상단바이다.
생성 일자: 2024-12-06
수정 일자: 2024-12-07
 */

import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-7 py-3 fixed shadow-md z-50 bg-white flex justify-between items-center">
      <p className="text-2xl font-bold">
        Money<span className="text-[#FF7000]">Flow</span>
      </p>
      <input
        type="text"
        placeholder="Search anything..."
        className="w-2/4 px-3 py-3 rounded-md bg-gray-100 border outline-none"
      />
      <div className="flex gap-4 items-center">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#FF7000]"
        >
          <path
            fill="currentColor"
            d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m6.313-2.09l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 1.218-1.567zm-11.306.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM6.213 4.81l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7A1 1 0 0 1 6.11 4.74zm12.894.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m0 5a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"
          />
        </svg>
        <div className="rounded-full size-12 bg-gray-100" />
      </div>
    </nav>
  );
};

export default Navbar;
