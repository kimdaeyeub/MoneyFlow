/*
작성자: 김대엽
파일의 역할: 루트레이아웃에서 로고 및 로그인 버튼 다크 모드 토글 검색 바 등을 포함한 상단바이다.
생성 일자: 2024-12-06
수정 일자: 2024-12-19
 */

import React from "react";
import { Theme } from "../Theme";
import Link from "next/link";
import db from "@/lib/db";
import UserDropdownMenu from "../UserDropdownMenu";

const getUserInfo = async (userId: string | undefined) => {
  if (!userId) return null;
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};

const Navbar = async ({ userId }: { userId?: string }) => {
  const userInfo = await getUserInfo(userId);
  // TODO: Dark모드일때 배경색이 transparent이다 보니 뒤에 있는 콘텐츠가 보임.
  return (
    <nav className="w-full px-7 py-3 fixed shadow-md z-50 bg-white dark:bg-[#121212] dark:border border-gray-800 flex justify-between items-center">
      <p className="text-2xl font-bold">
        Money<span className="text-[#FF7000]">Flow</span>
      </p>
      {/* <input
        type="text"
        placeholder="Search anything..."
        className="w-2/4 px-3 py-3 rounded-md bg-gray-100 dark:bg-transparent dark:border-gray-700 border outline-none"
      /> */}
      <div className="flex gap-4 items-center">
        <Theme />
        {userId ? (
          <UserDropdownMenu avatar={userInfo?.avatar} />
        ) : (
          <Link href="/sign-in">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
