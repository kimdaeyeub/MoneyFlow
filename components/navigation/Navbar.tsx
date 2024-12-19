/*
작성자: 김대엽
파일의 역할: 루트레이아웃에서 로고 및 로그인 버튼 다크 모드 토글 검색 바 등을 포함한 상단바이다.
생성 일자: 2024-12-06
수정 일자: 2024-12-19
 */

import React from "react";
import { Theme } from "../Theme";

const Navbar = () => {
  return (
    <nav className="w-full px-7 py-3 fixed shadow-md z-50 bg-white dark:bg-black flex justify-between items-center">
      <p className="text-2xl font-bold">
        Money<span className="text-[#FF7000]">Flow</span>
      </p>
      <input
        type="text"
        placeholder="Search anything..."
        className="w-2/4 px-3 py-3 rounded-md bg-gray-100 dark:bg-gray-900 dark:border-gray-700 border outline-none"
      />
      <div className="flex gap-4 items-center">
        <Theme />
        <div className="rounded-full size-12 bg-gray-100" />
      </div>
    </nav>
  );
};

export default Navbar;
